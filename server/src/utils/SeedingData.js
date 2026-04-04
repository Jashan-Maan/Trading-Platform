import { Holdings } from "../models/holdings.model.js";
import { Position } from "../models/positions.model.js";
import { holdings, positions } from "../data/data.js";

const seedHoldings = async (userId) => {
  const userHolding = holdings.map((holding) => ({
    ...holding,
    userId,
  }));
  await Holdings.insertMany(userHolding);
};

const seedPositions = async (userId) => {
  const userPosition = positions.map((position) => ({
    ...position,
    userId,
  }));
  await Position.insertMany(userPosition);
};

export { seedHoldings, seedPositions };
