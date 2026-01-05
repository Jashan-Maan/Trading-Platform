
const Summary = () => {
  return (
    <>
      <div className="mb-7">
        <h6 className="text-2xl font-normal text-gray-700 mb-4">Hi, User!</h6>
        <div className="h-px bg-gray-200 w-full" />
      </div>

      <div className="pb-5">
        <div className="flex items-center mb-6">
          <p className="text-xl font-light text-gray-600">Equity</p>
        </div>

        <div className="flex items-center w-full md:w-1/2 justify-between">
          <div className="text-left">
            <h3 className="text-4xl font-light text-gray-700">3.74k</h3>
            <p className="text-xs text-gray-400 mt-1">Margin available</p>
          </div>

          <div className="h-16 w-px bg-gray-200 mx-5"></div>

          <div className="text-left">
            <p className="text-xs text-gray-400 mb-2">
              Margins used <span className="text-sm text-gray-600 ml-3">0</span>
            </p>
            <p className="text-xs text-gray-400">
              Opening balance{" "}
              <span className="text-sm text-gray-600 ml-3">3.74k</span>
            </p>
          </div>
        </div>

        <div className="h-px bg-gray-200 w-full my-6" />
      </div>

      <div className="pb-5">
        <div className="flex items-center mb-6">
          <p className="text-xl font-light text-gray-600">Holdings (13)</p>
        </div>

        <div className="flex items-center w-full md:w-1/2 justify-between">
          <div className="text-left">
            <h3 className="text-4xl font-light text-green-500 flex items-end">
              1.55k
              <small className="text-xs text-green-500 ml-2 mb-1">+5.20%</small>
            </h3>
            <p className="text-xs text-gray-400 mt-1">P&L</p>
          </div>

          <div className="h-16 w-px bg-gray-200 mx-5"></div>

          <div className="text-left">
            <p className="text-xs text-gray-400 mb-2">
              Current Value{" "}
              <span className="text-sm text-gray-600 ml-3">31.43k</span>
            </p>
            <p className="text-xs text-gray-400">
              Investment{" "}
              <span className="text-sm text-gray-600 ml-3">29.88k</span>
            </p>
          </div>
        </div>

        <div className="h-px bg-gray-200 w-full my-6" />
      </div>
    </>
  );
};

export default Summary;
