import HomePage from "./pages/home/HomePage";
import Navbar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import AboutPage from "./pages/about/AboutPage";
import ProductPage from "./pages/products/ProductPage";
import PricingPage from "./pages/pricing/PricingPage";
import SupportPage from "./pages/support/SupportPage";
import Footer from "./components/common/Footer";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
