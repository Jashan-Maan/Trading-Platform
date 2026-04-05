import { createContext, useEffect, useState } from "react";
import BuyActionWindow from "../components/BuyActionWindow";
import axios from "axios";

const AppContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  user: null,
  setUser: () => {},
});

export const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await axios.get("/users/me", {
          withCredentials: true,
        });
        if (response.data.success) {
          setUser(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        user,
        setUser,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </AppContext.Provider>
  );
};

export default AppContext;
