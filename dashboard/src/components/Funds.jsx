import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

const Funds = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-end gap-4 px-4 md:pr-10 pt-4 md:pt-2">
        <p className="text-xs text-gray-400 text-center md:text-right md:mr-2">
          Instant, zero-cost fund transfers with UPI
        </p>
        <div className="flex gap-2">
          <Link className="bg-green-500 hover:bg-green-600 text-white rounded px-5 py-2.5 font-medium text-sm transition-colors">
            Add funds
          </Link>
          <Link className="bg-blue-500 hover:bg-blue-600 text-white rounded px-5 py-2.5 font-medium text-sm transition-colors">
            Withdraw
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 mt-6 md:mt-10 pb-10">
        <div className="w-full">
          <h3 className="text-xl font-light text-gray-700 mb-4 flex items-center">
            Equity
            <span className="ml-4 text-xs text-gray-400 font-normal">
              Margin available
            </span>
          </h3>

          <div className="border border-gray-200 rounded-sm p-4 md:p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Available margin</p>
              <p className="text-2xl font-normal text-blue-500">4,043.10</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Used margin</p>
              <p className="text-2xl font-normal text-gray-700">3,757.30</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Available cash</p>
              <p className="text-2xl font-normal text-gray-700">4,043.10</p>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Opening Balance</p>
                <p className="text-gray-700">4,043.10</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Payin</p>
                <p className="text-gray-700">4,064.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">SPAN</p>
                <p className="text-gray-700">0.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Delivery margin</p>
                <p className="text-gray-700">0.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Exposure</p>
                <p className="text-gray-700">0.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Options premium</p>
                <p className="text-gray-700">0.00</p>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Collateral (Liquid funds)</p>
                <p className="text-gray-700">0.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Collateral (Equity)</p>
                <p className="text-gray-700">0.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Total Collateral</p>
                <p className="text-gray-700">0.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-light text-gray-700 mb-4">Commodity</h3>

          <div className="flex flex-col items-center justify-center h-[300px] border border-transparent">
            <MdAccountCircle className="text-4xl opacity-30 mb-4" />
            <p className="text-gray-400 text-sm mb-6 text-center">
              You don't have a commodity account
            </p>
            <Link className="bg-blue-500 hover:bg-blue-600 text-white rounded px-5 py-2.5 font-medium text-sm transition-colors">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
