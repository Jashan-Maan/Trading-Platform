import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20 bg-[#387ed1]/80">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent">
        404 Not Found
      </h1>
      <div className="h-px w-80 rounded bg-gradient-to-r from-[#387ed1]/20 to-gray-900 my-5 md:my-7"></div>
      <p className="md:text-xl text-gray-800 max-w-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-[#387ed1] rounded-full mt-10 font-medium active:scale-95 transition-all"
      >
        Back to Home
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default PageNotFound;
