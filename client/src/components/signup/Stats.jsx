import React from "react";
import benefitsAcop from "../../assets/acop-benefits.svg";

const Stats = () => {
  const points = [
    {
      title: "Unbeatable pricing",
      desc: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
    },
    {
      title: "Best investing experience",
      desc: "Simple and intuitive trading platform with an easy-to-understand user interface.",
    },
    {
      title: "No spam or gimmicks",
      desc: 'Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.',
    },
    {
      title: "The Zerodha universe",
      desc: "More than just an app — gain free access to the entire ecosystem of our partner products.",
    },
  ];

  return (
    <section className=" px-4 md:px-10 lg:px-20  md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center text-left">
          <img
            src={benefitsAcop}
            alt="Benefits"
            className="w-full max-w-[450px]"
          />
          <h1 className="text-2xl font-medium text-[#444] mt-10 leading-snug">
            Benefits of opening a Zerodha demat account
          </h1>
        </div>

        <div className="flex flex-col gap-8 md:gap-10 mt-8 md:mt-0">
          {points.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="text-xl font-medium text-[#444]">{item.title}</h2>
              <p className="text-[#666] text-sm md:text-base leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
