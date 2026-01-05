import { useContext, useState } from "react";
import { watchlist } from "../data/data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { MdMoreHoriz } from "react-icons/md";
import AppContext from "../context/AppContext";

const WatchList = () => {
  return (
    <div className="w-full h-full border-r border-gray-200 overflow-y-auto relative bg-white">
      <div className="flex items-center px-5 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="w-full outline-none text-sm text-gray-700 font-light placeholder-gray-400"
        />
        <span className="text-xs text-gray-400 whitespace-nowrap pl-2">
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="list-none">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistAction(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistAction(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
    >
      <div className="flex items-center justify-between px-5 py-3">
        <div className="w-full flex items-center justify-between gap-2">
          <p
            className={`text-xs ${
              stock.isDown ? "text-red-500" : "text-gray-600"
            }`}
          >
            {stock.name}
          </p>
          <div className="flex items-center gap-3">
            <span
              className={`text-xs ${
                stock.isDown ? "text-red-500" : "text-green-500"
              }`}
            >
              {stock.percent}
            </span>
            {stock.isDown ? (
              <FaChevronDown className="text-red-500 text-xs" />
            ) : (
              <FaChevronUp className="text-green-500 text-xs" />
            )}
            <span className="text-xs text-gray-700 font-normal">
              {stock.price}
            </span>
          </div>
        </div>
      </div>

      {showWatchlistAction && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(AppContext);
  const handleBuyClick = () => {
    openBuyWindow(uid);
  };
  return (
    <span className="absolute top-0 right-0 h-full w-[60%] bg-white flex items-center justify-end px-4 gap-2 shadow-sm z-20">
      <button
        onClick={handleBuyClick}
        className="bg-blue-500 text-white rounded-[2px] px-3 py-1.5 text-xs font-medium hover:bg-blue-600 shadow-sm transition-colors cursor-pointer"
      >
        B
      </button>

      <button className="bg-orange-500 text-white rounded-[2px] px-3 py-1.5 text-xs font-medium hover:bg-orange-600 shadow-sm transition-colors cursor-pointer">
        S
      </button>

      <button className="text-gray-500 hover:bg-gray-100 p-1.5 rounded border border-transparent hover:border-gray-200 transition-colors cursor-pointer">
        <FaChartSimple className="text-sm" />
      </button>

      <button className="text-gray-500 hover:bg-gray-100 p-1.5 rounded border border-transparent hover:border-gray-200 transition-colors cursor-pointer">
        <MdMoreHoriz className="text-lg" />
      </button>
    </span>
  );
};
