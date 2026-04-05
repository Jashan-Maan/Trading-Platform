import { useState, useContext } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";
import { toast } from "react-hot-toast";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow } = useContext(AppContext);

  const handleSellClick = async () => {
    try {
      if (
        !stockQuantity ||
        !stockPrice ||
        stockPrice <= 0 ||
        stockQuantity <= 0
      ) {
        toast.error("Please enter valid quantity and price");
        return;
      }
      const res = await axios.post("/orders", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });
      toast.success("Order placed successfully");
      closeSellWindow();
    } catch (error) {
      toast.error(error.response?.data?.message || "Order failed");
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs">
      <div
        className="w-[450px] bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all scale-100"
        id="sell-window"
        draggable="true"
      >
        <div className="bg-orange-600 px-6 py-3 text-white flex justify-between items-center">
          <div>
            <h4 className="font-medium">Sell {uid}</h4>
            <span className="text-xs text-blue-100">BSE</span>
            <span className="text-xs text-blue-100 ml-2">Regular</span>
          </div>
        </div>

        <div className="p-6 bg-white">
          <div className="flex gap-4 mb-4">
            <fieldset className="border border-gray-300 rounded px-3 pb-2 pt-1 w-1/2 focus-within:border-orange-600 group">
              <legend className="text-xs text-gray-500 px-1 group-focus-within:text-orange-600">
                Qty.
              </legend>
              <input
                type="number"
                name="qty"
                id="qty"
                className="w-full outline-none text-lg text-gray-700 font-medium"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
                min="1"
              />
            </fieldset>

            <fieldset className="border border-gray-300 rounded px-3 pb-2 pt-1 w-1/2 focus-within:border-orange-600 group">
              <legend className="text-xs text-gray-500 px-1 group-focus-within:text-orange-600">
                Price
              </legend>
              <input
                type="number"
                name="price"
                id="price"
                step="1"
                className="w-full outline-none text-lg text-gray-700 font-medium"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
              />
            </fieldset>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                defaultChecked
                className="accent-orange-600"
              />
              <label className="text-sm text-gray-600">Market</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="type" className="accent-orange-600" />
              <label className="text-sm text-gray-600">Limit</label>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Margin required</span>
            <span className="text-sm font-medium text-gray-700">
              ₹{(stockQuantity * stockPrice).toFixed(2)}
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSellClick}
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded shadow-sm transition-colors"
            >
              Sell
            </button>
            <button
              onClick={handleCancelClick}
              className="border border-gray-300 text-gray-600 hover:bg-gray-100 font-medium py-2 px-6 rounded transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
