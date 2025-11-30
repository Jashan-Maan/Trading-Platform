import stocksAcop from "../../assets/stocks-acop.svg";
import mfAcop from "../../assets/mf-acop.svg";
import ipoAcop from "../../assets/ipo-acop.svg";
import foAcop from "../../assets/fo-acop.svg";

const InvestmentOptions = () => {
  const options = [
    {
      img: stocksAcop,
      title: "Stocks",
      desc: "Invest in all exchange-listed securities",
    },
    {
      img: mfAcop,
      title: "Mutual funds",
      desc: "Invest in commission-free direct mutual funds",
    },
    {
      img: ipoAcop,
      title: "IPO",
      desc: "Apply to the latest IPOs instantly via UPI",
    },
    {
      img: foAcop,
      title: "Futures & Options",
      desc: "Hedge and mitigate market risk through simplified F&O trading",
    },
  ];
  return (
    <section className="container mx-auto px-4 lg:px-20">
      <h1 className="text-2xl font-medium text-center text-[#444] mb-16 md:mb-20 leading-snug">
        Investment options With Zerodha demat account
      </h1>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 md:gap-x-16">
          {options.map((option, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={option.img} alt="stocks" className="w-24 md:w-28" />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-gray-800">
                  {option.title}
                </h2>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {option.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-[#387ed1] text-white py-2.5 px-8 rounded-[3px] mx-auto text-lg hover:bg-gray-800 
        cursor-pointer transition-colors block w-full md:w-auto text-center mt-16 md:mt-20 font-medium"
        >
          Explore Investments
        </button>
      </div>
    </section>
  );
};

export default InvestmentOptions;
