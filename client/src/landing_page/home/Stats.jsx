import ecosystem from "../../assets/ecosystem.png";
import { FaArrowRightLong } from "react-icons/fa6";
import pressLogos from "../../assets/pressLogos.png";

const Stats = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-medium mb-6 leading-tight">
            Trust with confidence
          </h1>
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-3">
              Customer-first always
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-3">
              No spam or gimmicks
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-3">
              The Zerodha universe
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-800 mb-3">
              Do better with money
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-full max-w-[500px] mb-8"
            src={ecosystem}
            alt="ecosystem"
          />
          <div className="flex justify-center gap-5 mt-4">
            <a
              href=""
              className="flex items-center gap-2 text-blue-600 font-normal hover:text-gray-800 transition-colors duration-300"
            >
              Explore our products <FaArrowRightLong />
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-blue-600 font-normal hover:text-gray-800 transition-colors duration-300"
            >
              Try Kite demo <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-14">
        <img src={pressLogos} alt="Press Logos" className="mx-auto" />
      </div>
    </div>
  );
};

export default Stats;
