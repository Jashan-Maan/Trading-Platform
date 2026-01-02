import { useState, useEffect } from "react";
import { holdings } from "../data/data";

const Holdings = () => {
  return (
    <>
      <h3 className="text-xl font-light text-gray-700 mb-6">
        Holdings ({holdings.length})
      </h3>

      <div className="w-full overflow-x-auto bg-white rounded shadow-sm">
        <table className="w-full border-collapse bg-white min-w-[700px] md:min-w-full">
          <thead>
            <tr className="border-b border-t border-gray-200">
              <th className="text-left text-xs font-normal text-gray-500 py-3 px-3">
                Instrument
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                Qty.
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                Avg. cost
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                LTP
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                Cur. val
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                P&L
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                Net chg.
              </th>
              <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
                Day chg.
              </th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-500" : "text-red-500";
              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                >
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
                  <td className="text-right text-sm text-gray-700 py-3 px-3">
                    {curValue.toFixed(2)}
                  </td>
                  <td className={`text-right text-sm py-3 px-3 ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`text-right text-sm py-3 px-3 ${profClass}`}>
                    {stock.net}
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

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-10 px-3 gap-6 md:gap-0">
        <div className="w-full md:w-1/3 text-left">
          <h5 className="text-3xl font-light text-gray-700">
            29,875.<span className="text-base text-gray-500">55</span>
          </h5>
          <p className="text-xs text-gray-400 mt-2">Total investment</p>
        </div>

        <div className="w-full md:w-1/3 text-left">
          <h5 className="text-3xl font-light text-gray-700">
            31,428.<span className="text-base text-gray-500">95</span>
          </h5>
          <p className="text-xs text-gray-400 mt-2">Current value</p>
        </div>

        <div className="w-full md:w-1/3 text-left">
          <h5 className="text-3xl font-light text-green-500">
            1,553.40 <span className="text-sm">(+5.20%)</span>
          </h5>
          <p className="text-xs text-gray-400 mt-2">P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
