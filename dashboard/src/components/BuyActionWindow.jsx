import { useState, useContext } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(AppContext);

  const handleBuyClick = () => {
    const res = axios.post("http://localhost:5500/api/v1/orders", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs">
      <div
        className="w-[450px] bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all scale-100"
        id="buy-window"
        draggable="true"
      >
        <div className="bg-blue-600 px-6 py-3 text-white flex justify-between items-center">
          <div>
            <h4 className="font-medium">Buy {uid}</h4>
            <span className="text-xs text-blue-100">BSE</span>
            <span className="text-xs text-blue-100 ml-2">Regular</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked
                readOnly
              />
              <div className="w-9 h-5 bg-blue-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-800"></div>
            </label>
          </div> */}
        </div>

        <div className="p-6 bg-white">
          <div className="flex gap-4 mb-4">
            <fieldset className="border border-gray-300 rounded px-3 pb-2 pt-1 w-1/2 focus-within:border-blue-500 group">
              <legend className="text-xs text-gray-500 px-1 group-focus-within:text-blue-500">
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

            <fieldset className="border border-gray-300 rounded px-3 pb-2 pt-1 w-1/2 focus-within:border-blue-500 group">
              <legend className="text-xs text-gray-500 px-1 group-focus-within:text-blue-500">
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
                className="accent-blue-600"
              />
              <label className="text-sm text-gray-600">Market</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="type" className="accent-blue-600" />
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
              onClick={handleBuyClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded shadow-sm transition-colors"
            >
              Buy
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

export default BuyActionWindow;
