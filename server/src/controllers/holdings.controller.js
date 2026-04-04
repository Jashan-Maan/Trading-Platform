import { Holdings } from "../models/holdings.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getAllHoldings = asyncHandler(async (req, res) => {
  const holdings = await Holdings.find({ userId: req.user?._id });
  return res
    .status(200)
    .json(new ApiResponse(200, holdings, "Holdings fetched successfully"));
});
