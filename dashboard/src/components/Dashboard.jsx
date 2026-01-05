import { Route, Routes } from "react-router-dom";
import Apps from "../pages/Apps";
import Funds from "../pages/Funds";
import Holdings from "../pages/Holdings";
import Orders from "../pages/Orders";
import Positions from "../pages/Positions";
import Summary from "../pages/Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden bg-white">
      <div className="w-full h-[40vh] md:w-[32%] md:h-full border-b md:border-b-0 md:border-r border-gray-200 z-10">
        <WatchList />
      </div>
      <div className="w-full h-[60vh] md:w-[68%] md:h-full overflow-y-auto px-2 py-4 md:px-5 md:py-8 bg-white">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
