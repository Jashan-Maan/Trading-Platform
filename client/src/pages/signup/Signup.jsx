import OpenAccount from "../../components/common/OpenAccount";
import AccountTypes from "../../components/signup/AccountTypes";
import FAQs from "../../components/signup/FAQs";
import Hero from "../../components/signup/Hero";
import InvestmentOptions from "../../components/signup/InvestmentOptions";
import Stats from "../../components/signup/Stats";
import StepsToOpen from "../../components/signup/StepsToOpen";

const Signup = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-32 mb-24">
      <Hero />
      <InvestmentOptions />
      <StepsToOpen />
      <Stats />
      <AccountTypes />
      <FAQs />
      <OpenAccount />
    </div>
  );
};

export default Signup;
