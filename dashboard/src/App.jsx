import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./components/LoginPage";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import { Loading } from "./components/Loading";

const App = () => {
  const { user, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        {user ? (
          <Route path="/*" element={<Home />} />
        ) : (
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </>
  );
};

export default App;
