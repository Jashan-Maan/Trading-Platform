import { Holdings } from "../models/holdings.model.js";

export const getAllHoldings = async (req, res) => {
  try {
    const holdings = await Holdings.find();
    if (holdings.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No Holdings found",
        data: holdings,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Holdings fetched successfully",
      data: holdings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
