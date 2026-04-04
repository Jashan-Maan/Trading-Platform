import { model, Schema } from "mongoose";

const holdingsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String },
    day: { type: String },
    isLoss: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Holdings = model("Holdings", holdingsSchema);
