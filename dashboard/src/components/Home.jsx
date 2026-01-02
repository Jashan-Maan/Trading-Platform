import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-white">
      <div className="shrink-0">
        <TopBar />
      </div>
      <div className="flex-1 overflow-hidden">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
