import Dashboard from "../components/Dashboard";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-white">
      <div className="shrink-0">
        <TopBar />
      </div>
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
