import Hero from "../../components/home/Hero";
import Education from "../../components/home/Education";
import OpenAccount from "../../components/common/OpenAccount";
import Stats from "../../components/home/Stats";
import Pricing from "../../components/home/Pricing";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-32 mb-24">
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  );
};

export default HomePage;
