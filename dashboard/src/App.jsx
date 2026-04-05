import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./components/LoginPage";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import AppContext from "./context/AppContext";

const App = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        {user ? (
          <Route path="/*" element={<Home />} />
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
      </Routes>
    </>
  );
};

export default App;
