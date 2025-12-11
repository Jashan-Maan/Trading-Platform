import { useState } from "react";

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("equity");

  const tableData = {
    equity: {
      headers: [
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      rows: [
        {
          title: "Brokerage",
          values: [
            "Zero Brokerage",
            "0.03% or Rs. 20/executed order whichever is lower",
            "0.03% or Rs. 20/executed order whichever is lower",
            "Flat Rs. 20 per executed order",
          ],
        },
        {
          title: "STT/CTT",
          values: [
            "0.1% on buy & sell",
            "0.025% on the sell side",
            "0.02% on the sell side",
            <div key="stt-opt">
              <p>
                0.125% of the intrinsic value on options that are bought and
                exercised
              </p>
              <p>(0.1% on sell side (on premium))</p>
            </div>,
          ],
        },
        {
          title: "Transaction charges",
          values: [
            <div key="tc-1">
              <p>NSE: 0.00297%</p>
              <p>BSE: 0.00375%</p>
            </div>,
            <div key="tc-2">
              <p>NSE: 0.00297%</p>
              <p>BSE: 0.00375%</p>
            </div>,
            <div key="tc-3">
              <p>NSE: 0.00173%</p>
              <p>BSE: 0</p>
            </div>,
            <div key="tc-4">
              <p>NSE: 0.03503% (on premium)</p>
              <p>BSE: 0.0325% (on premium)</p>
            </div>,
          ],
        },
        {
          title: "GST",
          values: [
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)",
          ],
        },
        {
          title: "SEBI charges",
          values: ["₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
        },
        {
          title: "Stamp charges",
          values: [
            "0.015% or ₹1500 / crore on buy side",
            "0.003% or ₹300 / crore on buy side",
            "0.002% or ₹200 / crore on buy side",
            "0.003% or ₹300 / crore on buy side",
          ],
        },
      ],
    },
    currency: {
      headers: ["Currency futures", "Currency options"],
      rows: [
        {
          title: "Brokerage",
          values: [
            "0.03% or ₹ 20/executed order whichever is lower",
            "₹ 20/executed order",
          ],
        },
        {
          title: "STT/CTT",
          values: ["No STT", "No STT"],
        },
        {
          title: "Transaction charges",
          values: [
            <div key="cur-tc-1">
              <p>NSE: 0.00035%</p>
              <p>BSE: 0.00045%</p>
            </div>,
            <div key="cur-tc-2">
              <p>NSE: 0.0311%</p>
              <p>BSE: 0.001%</p>
            </div>,
          ],
        },
        {
          title: "GST",
          values: [
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)",
          ],
        },
        {
          title: "SEBI charges",
          values: ["₹10 / crore", "₹10 / crore"],
        },
        {
          title: "Stamp charges",
          values: [
            "0.0001% or ₹10 / crore on buy side",
            "0.0001% or ₹10 / crore on buy side",
          ],
        },
      ],
    },
    commodity: {
      headers: ["Commodity futures", "Commodity options"],
      rows: [
        {
          title: "Brokerage",
          values: [
            "0.03% or Rs. 20/executed order whichever is lower",
            "₹ 20/executed order",
          ],
        },
        {
          title: "STT/CTT",
          values: ["0.01% on sell side (Non-Agri)", "0.05% on sell side"],
        },
        {
          title: "Transaction charges",
          values: [
            <div key="com-tc-1">
              <p>MCX: 0.0021%</p>
              <p>NSE: 0.0001%</p>
            </div>,
            <div key="com-tc-2">
              <p>MCX: 0.0418%</p>
              <p>NSE: 0.001%</p>
            </div>,
          ],
        },
        {
          title: "GST",
          values: [
            "18% on (brokerage + SEBI charges + transaction charges)",
            "18% on (brokerage + SEBI charges + transaction charges)",
          ],
        },
        {
          title: "SEBI charges",
          values: [
            <div key="com-sebi-1">
              <p>Agri: ₹1 / crore</p>
              <p>Non-agri: ₹10 / crore</p>
            </div>,
            "₹10 / crore",
          ],
        },
        {
          title: "Stamp charges",
          values: [
            "0.002% or ₹200 / crore on buy side",
            "0.003% or ₹300 / crore on buy side",
          ],
        },
      ],
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-20 py-16">
      <div className="mt-16">
        <div className="flex gap-8 border-b border-gray-200 mb-8 relative">
          {["equity", "currency", "commodity"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-5 text-lg md:text-2xl font-medium capitalize transition-colors duration-300 relative cursor-pointer ${
                activeTab === tab
                  ? "text-gray-800"
                  : "hover:text-gray-600 text-[#387ed1]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#387ed1]"></span>
              )}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto border border-gray-300 rounded-sm">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-400">
                <th className="p-4 text-gray-800 font-medium text-sm md:text-base w-1/4">
                  &nbsp;
                </th>
                {tableData[activeTab].headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="p-4 text-gray-600 font-normal text-sm md:text-base last:border-r-0 whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData[activeTab].rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="not-odd:bg-gray-50">
                  <td className="p-4 text-gray-600 font-normal text-sm md:text-base border-r border-gray-200">
                    {row.title}
                  </td>
                  {row.values.map((val, colIdx) => (
                    <td
                      key={colIdx}
                      className="p-4 text-gray-500 text-xs md:text-sm leading-relaxed border-r border-gray-200 last:border-r-0 align-top"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8 text-base md:text-xl">
          <a
            href="#"
            className="text-[#387ed1] hover:text-gray-800 no-underline transition-colors"
          >
            Calculate your costs upfront
          </a>{" "}
          <span className="text-gray-800">using our brokerage calculator</span>
        </div>
      </div>
    </section>
  );
};

export default Brokerage;
