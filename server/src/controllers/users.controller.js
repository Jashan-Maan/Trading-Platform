import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { cookiesOptions } from "../config/cookiesConfig.js";
import jwt from "jsonwebtoken";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(400, "User with this email already exists");
  }

  const newUser = await User.create({
    name,
    password,
    email,
  });

  //   Generate Tokens
  const accessToken = newUser.generateAccessToken();
  const refreshToken = newUser.generateRefreshToken();

  newUser.refreshToken = refreshToken;
  await newUser.save({ validateBeforeSave: false });

  const user = newUser.toObject();
  delete user.password;
  delete user.refreshToken;

  return res
    .status(201)
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .cookie("accessToken", accessToken, cookiesOptions)
    .json(
      new ApiResponse(
        201,
        {
          user,
        },
        "User registered successfully",
      ),
    );
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  //   Generate Tokens
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  const loggedInUser = user.toObject();
  delete loggedInUser.password;
  delete loggedInUser.refreshToken;

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .cookie("accessToken", accessToken, cookiesOptions)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          refreshToken,
          user: loggedInUser,
        },
        "Login successful",
      ),
    );
});

export const logoutUser = asyncHandler(async (req, res) => {
  if (!req.user?._id) {
    throw new ApiError(401, "User not authenticated");
  }

  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    { new: true },
  );

  return res
    .status(200)
    .clearCookie("accessToken", cookiesOptions)
    .clearCookie("refreshToken", cookiesOptions)
    .json(new ApiResponse(200, {}, "logout Successfully"));
});

export const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies?.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Refresh Token is missing");
  }
  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    const user = await User.findById(decodedToken._id);

    if (!user || user.refreshToken !== incomingRefreshToken) {
      throw new ApiError(401, "Invalid Refresh Token");
    }

    const newAccessToken = user.generateAccessToken();

    return res
      .status(200)
      .cookie("accessToken", newAccessToken, cookiesOptions)
      .json(
        new ApiResponse(
          200,
          { accessToken: newAccessToken },
          "Access Token refreshed successfully",
        ),
      );
  } catch (error) {
    throw new ApiError(401, "Invalid or expired Refresh Token");
  }
});
