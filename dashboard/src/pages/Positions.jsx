import { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/v1/positions", {
          withCredentials: true,
        });
        setPositions(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPositions();
  }, []);

  return (
    <>
      <h3 className="text-xl font-light text-gray-700 mb-6">
        Positions ({positions.length})
      </h3>

      <div className="overflow-x-auto bg-white rounded shadow-sm">
        <table className="w-full border-collapse bg-white min-w-[700px] md:min-w-full">
          <thead>
            <tr className="border-b border-t border-gray-200">
              <th className="text-left text-xs font-normal text-gray-500 py-3 px-3">
                Product
              </th>
              <th className="text-left text-xs font-normal text-gray-500 py-3 px-3">
                Instrument
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                Qty.
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                Avg.
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                LTP
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                P&L
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                Chg.
              </th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "text-green-500" : "text-red-500";
              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                >
                  <td className="text-left text-xs text-gray-500 py-3 px-3">
                    {/* Product Badge Style */}
                    <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded-sm font-medium">
                      {stock.product}
                    </span>
                  </td>
                  <td className="text-left text-sm text-gray-700 py-3 px-3">
                    {stock.name}
                  </td>
                  <td className="text-right text-sm text-gray-700 py-3 px-3">
                    {stock.qty}
                  </td>
                  <td className="text-right text-sm text-gray-700 py-3 px-3">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="text-right text-sm text-gray-700 py-3 px-3">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className={`text-right text-sm py-3 px-3 ${profClass}`}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={`text-right text-sm py-3 px-3 ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
