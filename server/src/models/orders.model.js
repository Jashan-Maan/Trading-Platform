import { model, Schema } from "mongoose";

const ordersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

export const Orders = model("Order", ordersSchema);
