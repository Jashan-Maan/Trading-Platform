import { Position } from "../models/positions.model.js";

export const getAllPositions = async (req, res) => {
  try {
    const positions = await Position.find();
    if (positions.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No positions found",
        data: positions,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Positions fetched successfully",
      data: positions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
