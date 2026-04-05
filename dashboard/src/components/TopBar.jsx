import { useEffect, useState } from "react";
import Menu from "./Menu";

const TopBar = () => {
  const nifty = 22500;
  const sensex = 74000;

  const [niftyPrice, setNiftyPrice] = useState(nifty);
  const [sensexPrice, setSensexPrice] = useState(sensex);

  useEffect(() => {
    const interval = setInterval(() => {
      setNiftyPrice(nifty + (Math.random() - 0.5) * 10);
      setSensexPrice(sensex + (Math.random() - 0.5) * 10);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-[10vh] flex items-center shadow-sm z-50 bg-white relative">
      <div className="hidden md:flex w-[32%] h-full px-2 border-r border-gray-200 items-center justify-around">
        <div className="flex items-center gap-2 flex-1">
          <p className="text-xs font-medium uppercase text-gray-600">
            NIFTY 50
          </p>
          <p
            className={`text-xs font-medium ${niftyPrice > nifty ? "text-green-500" : "text-red-500"}`}
          >
            {niftyPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium uppercase text-gray-600">SENSEX</p>
          <p
            className={`text-xs font-medium ${sensexPrice > sensex ? "text-green-500" : "text-red-500"}`}
          >
            {sensexPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex md:hidden px-4 items-center gap-4 border-r border-gray-200 mr-4 h-full">
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold text-gray-600">NIFTY</span>
          <span
            className={`text-[10px] ${niftyPrice > nifty ? "text-green-500" : "text-red-500"}`}
          >
            {niftyPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold text-gray-600">SENSEX</span>
          <span
            className={`text-[10px] ${sensexPrice > sensex ? "text-green-500" : "text-red-500"}`}
          >
            {sensexPrice.toFixed(2)}
          </span>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
