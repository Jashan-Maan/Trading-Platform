import React from "react";
import stepsAcop from "../../assets/steps-acop.svg";

const StepsToOpen = () => {
  const steps = [
    "Enter the requested details",
    "Complete e-sign & verification",
    "Start investing!",
  ];

  return (
    <section className="bg-gray-200/20  py-8 md:py-12 ">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <h1 className=" text-xl md:text-3xl text-gray-800 font-medium  text-center mb-16 md:mb-12 leading-snug">
          Steps to open a demat account with Zerodha
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={stepsAcop}
              alt="Steps to open account"
              className="w-full max-w-[500px]"
            />
          </div>

          <div className="w-full md:w-1/2 max-w-[480px]">
            <ul className="flex flex-col">
              {steps.map((step, index) => (
                <li key={index} className="group">
                  <div className="flex items-center gap-6 py-6">
                    <span className="shrink-0 text-xs font-medium text-gray-500 border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center select-none">
                      0{index + 1}
                    </span>

                    <span className="text-lg md:text-xl text-[#444] font-normal">
                      {step}
                    </span>
                  </div>

                  {index !== steps.length - 1 && (
                    <hr className="border-gray-200 w-full" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsToOpen;
