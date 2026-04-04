import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./db/db.js";
import { errorHandling } from "./middlewares/errorHandling.middleware.js";

const app = express();
const PORT = process.env.PORT || 8080;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

import userRoutes from "./routes/users.routes.js";
import positionsRoutes from "./routes/positions.routes.js";
import holdingsRoutes from "./routes/holdings.routes.js";
import ordersRoutes from "./routes/orders.route.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/holdings", holdingsRoutes);
app.use("/api/v1/positions", positionsRoutes);
app.use("/api/v1/orders", ordersRoutes);

app.use(errorHandling);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
