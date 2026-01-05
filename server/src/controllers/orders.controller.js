import { Orders } from "../models/orders.model.js";

export const createOrder = async (req, res) => {
  try {
    let newOrder = new Orders({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    newOrder.save();
    res.status(200).json({
      message: "Order created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create order",
      success: false,
      error: error.message,
    });
  }
};
