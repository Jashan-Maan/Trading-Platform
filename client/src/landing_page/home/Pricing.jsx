import { FaArrowRightLong } from "react-icons/fa6";
import pricing0 from "../../assets/pricing0.svg";
import intradayTrades from "../../assets/intradayTrades.svg";

const Pricing = () => {
  return (
    <div className="container px-4 mx-auto lg:px-20">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="w-full md:w-2/5">
          <h1 className="mb-4 text-2xl font-medium text-gray-800">
            Unbeatable pricing
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className=" hidden md:flex items-center gap-2 text-blue-600 font-medium hover:text-gray-800 transition-all duration-300"
          >
            See pricing <FaArrowRightLong />
          </a>
        </div>
        <div className=" w-full md:w-3/5 flex flex-row flex-wrap items-center lg:flex-nowrap gap-8 md:mt-0">
          <div className="flex items-center shrink-0 flex-1 relative min-w-[150px] w-full max-w-[190px]">
            <img
              src={pricing0}
              alt="Zero Brokerage"
              className="min-w-[85px] w-full max-w-[105px] shrink-0"
            />
            <p className="text-[10px] text-gray-500 leading-tight absolute left-22 top-1/2 w-full">
              Free account
              <br /> opening
            </p>
          </div>
          <div className="flex items-center shrink-0 relative flex-1 min-w-[150px] w-full max-w-[190px]">
            <img
              src={pricing0}
              alt="Zero Brokerage"
              className="min-w-[85px] w-full max-w-[105px]"
            />
            <p className="text-[10px] text-gray-500 leading-tight absolute left-22 top-1/2 w-fit">
              Free equity delivery
              <br /> and direct mutual funds
            </p>
          </div>
          <div className="flex items-center shrink-0 relative flex-1 min-w-[150px] w-full max-w-[190px]">
            <img
              src={intradayTrades}
              alt=""
              className="min-w-[85px] w-full max-w-[105px] shrink-0"
            />
            <p className="text-[10px] text-gray-500 leading-tight absolute left-24 top-1/2 w-full">
              Intraday and
              <br /> F&O
            </p>
          </div>
        </div>
      </div>
      <a
        href="#"
        className=" md:hidden flex items-center gap-2 text-blue-600 font-medium hover:text-gray-800 transition-all duration-300 mt-4"
      >
        See pricing <FaArrowRightLong />
      </a>
    </div>
  );
};

export default Pricing;
