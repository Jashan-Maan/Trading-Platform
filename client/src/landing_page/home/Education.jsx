import education from "../../assets/education.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="w-full md:w-1/2">
          <img src={education} className="w-[85%]" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="mb-6 text-2xl font-medium text-gray-800 ">
            Free and open market education
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href=""
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-gray-800 transition-colors duration-300"
          >
            Varsity <FaArrowRightLong />
          </a>
          <p className="mt-10 text-gray-600 text-base leading-relaxed mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href=""
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-gray-800 transition-colors duration-300"
          >
            TradingQ&A <FaArrowRightLong />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
