import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center shadow-sm z-50 bg-white relative">
    
      <div className="hidden md:flex w-[32%] h-full px-5 border-r border-gray-200 items-center justify-around">
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium uppercase text-gray-600">
            NIFTY 50
          </p>
          <p className="text-xs font-medium text-red-500">{100.2}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium uppercase text-gray-600">SENSEX</p>
          <p className="text-xs font-medium text-red-500">{100.2}</p>
        </div>
      </div>

      
      <div className="flex md:hidden px-4 items-center gap-4 border-r border-gray-200 mr-4 h-full">
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold text-gray-600">NIFTY</span>
          <span className="text-[10px] text-red-500">100.2</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold text-gray-600">SENSEX</span>
          <span className="text-[10px] text-red-500">100.2</span>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
