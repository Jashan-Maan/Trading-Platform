import { model, Schema } from "mongoose";

const ordersSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, required: true, enum: ["BUY", "SELL"] },
  },
  { timestamps: true },
);

export const Orders = model("Order", ordersSchema);
