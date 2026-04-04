import { model, Schema } from "mongoose";

const PositionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: { type: String, required: true },
    name: { type: String },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String },
    day: { type: String },
    isLoss: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Position = model("Position", PositionSchema);
