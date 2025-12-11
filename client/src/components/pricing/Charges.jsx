import pricing0 from "../../assets/pricing0.svg";
import intradayTrades from "../../assets/intradayTrades.svg";

const Hero = () => {
  const data = [
    {
      img: pricing0,
      title: "Free equity delivery",
      description:
        "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
    },
    {
      img: intradayTrades,
      title: "Intraday and F&O trades",
      description:
        "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
    },
    {
      img: pricing0,
      title: "Free direct MF",
      description:
        "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
    },
  ];
  return (
    <section className="px-4 md:px-8 lg:px-20 py-16">
      <div className="text-center mb-18 md:mb-36 mt-8">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-700">
          Charges
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mt-4 tracking-wide leading-relaxed">
          List of all charges and taxes
        </p>
      </div>
      <div className="flex flex-col items-start justify-center md:flex-row gap-8 lg:gap-10">
        {data.map((item, index) => (
          <div
            className="flex flex-col w-full md:w-1/3 items-center gap-6"
            key={index}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-60 md:w-72 object-contain"
            />
            <h2 className="text-2xl md:text-3xl font-[450] text-center text-gray-800 tracking-tight">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base text-center leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
