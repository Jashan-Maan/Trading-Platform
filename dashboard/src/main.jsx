import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";
import axios from "axios";
import { BackendApiUrl } from "./constants.js";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = BackendApiUrl;

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
);
