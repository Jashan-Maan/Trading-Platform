import { Link } from "react-router-dom";

const Orders = () => {
  return (
 
    <div className="h-full flex flex-col items-center justify-center px-4">
      <div className="text-center flex flex-col items-center">
    
        <p className="text-gray-400 text-sm md:text-base mb-6 font-light">
          You haven't placed any orders today
        </p>

        <Link
          to={"/"}
        
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5 rounded-sm transition-colors duration-200"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
