import { Orders } from "../models/orders.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const createOrder = asyncHandler(async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const userId = req.user?._id;
  let newOrder = new Orders({
    userId,
    name,
    qty,
    price,
    mode,
  });
  await newOrder.save();
  res
    .status(201)
    .json(new ApiResponse(201, newOrder, "Order created successfully"));
});

export const getAllOrders = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  const orders = await Orders.find({ userId: userId });
  res
    .status(200)
    .json(new ApiResponse(200, orders, "Orders fetched successfully"));
});

export const deleteOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const userId = req.user?._id;
  const order = await Orders.findOne({ _id: orderId, userId: userId });
  if (!order) {
    throw new ApiError(404, "Order not found");
  }
  await order.deleteOne();

  res.status(200).json(new ApiResponse(200, {}, "Order deleted successfully"));
});
