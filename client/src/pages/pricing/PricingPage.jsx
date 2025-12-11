import Charges from "../../components/pricing/Charges";
import Brokerage from "../../components/pricing/Brokerage";
import AnotherCharges from "../../components/pricing/AnotherCharges";
import ChargesExplained from "../../components/pricing/ChargesExplained";

const PricingPage = () => {
  return (
    <>
      <Charges />
      <Brokerage />
      <AnotherCharges />
      <ChargesExplained />
    </>
  );
};

export default PricingPage;
