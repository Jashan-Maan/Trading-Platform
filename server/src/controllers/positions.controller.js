import { Position } from "../models/positions.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getAllPositions = asyncHandler(async (req, res) => {
  const positions = await Position.find({ userId: req.user?._id });

  return res
    .status(200)
    .json(new ApiResponse(200, positions, "Positions fetched successfully"));
});
