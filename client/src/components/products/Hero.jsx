import { HiArrowLongRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 pt-16 md:pt-24 border-b border-gray-200 mb-20 pb-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl  md:text-[1.75rem] font-medium mb-4">
          Zerodha Products
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700 mb-7 leading-relaxed">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p className="flex items-center text-gray-600 gap-2">
          Check out our{" "}
          <span className="flex items-center gap-1 text-[#387ed1] font-medium hover:text-gray-800 transition-colors cursor-pointer">
            investment offerings <HiArrowLongRight />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
