const OpenAccount = () => {
  return (
    <section className="container mx-auto px-4 lg:px-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-medium mb-6 leading-tight text-gray-800">
          Open a Zerodha account
        </h1>
        <p className="text-gray-600 text-base mb-8">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="bg-[#387ed1] text-lg font-semibold text-white px-10 py-2.5 rounded hover:bg-gray-800 transition-colors duration-300 ease-in-out cursor-pointer">
          Sign Up for free
        </button>
      </div>
    </section>
  );
};

export default OpenAccount;
