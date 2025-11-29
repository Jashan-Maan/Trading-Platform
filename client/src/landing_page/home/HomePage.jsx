import Hero from "./Hero";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Navbar from "../Navbar";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-20 md:gap-32 mb-24">
        <Hero />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
