import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./db/db.js";
import { errorHandling } from "./middlewares/errorHandling.middleware.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { watchlist } from "./data/data.js";

const app = express();
const PORT = process.env.PORT || 8080;
const clientUrl = process.env.FRONTEND_URL;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: clientUrl,
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

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: clientUrl,
    credentials: true,
  },
});

const simulatePrice = (stocks) => {
  return stocks.map((stock) => {
    const changePercent = (Math.random() - 0.5) * 2;
    const newPrice = parseFloat(stock.price + changePercent).toFixed(2);
    const isLoss = newPrice < stock.price;

    return {
      ...stock,
      price: newPrice,
      changePercent: changePercent.toFixed(2),
      isLoss,
    };
  });
};

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  const interval = setInterval(() => {
    const updatedStocks = simulatePrice(watchlist);
    socket.emit("watchlist:update", updatedStocks);
  }, 2000);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    clearInterval(interval);
  });
});

httpServer.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
