import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Zerodha account?",
      answer:
        "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
    },
    {
      question: "What documents are required to open a demat account?",
      answer:
        "The following documents are required to open a Zerodha account online:PAN number,Aadhaar Card (Linked with a phone number for OTP verification),Cancelled cheque or bank account statement (To link your bank account),Income proof (Required only if you wish to trade in Futures & options)",
    },
    {
      question: "Is Zerodha account opening free?",
      answer: "Yes, It is completely free.",
    },
    {
      question: "Are there any maintenance charges for a demat account?",
      answer:
        "The account maintenance charges is applicable based on the account type.For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.To learn more about BSDA, Click here..",
    },
    {
      question: "Can I open a demat account without a bank account?",
      answer:
        "To open a demat account, you must have a bank account in your name.If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.",
    },
  ];

  return (
    <section className=" px-4 md:px-10 lg:px-20">
      <h1 className="text-xl md:text-2xl font-medium text-[#444] mb-8">FAQs</h1>

      <div className="flex flex-col gap-0">
        {faqs.map((faq, index) => (
          <div key={index} className="relative group">
            <div className="w-full h-1 bg-gray-200"></div>
            <div className="absolute top-0 left-0 w-20 group-hover:w-24 h-1 bg-[#387ed1] transition-all duration-300 ease-in-out"></div>

            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-5 flex justify-between items-center text-left focus:outline-none bg-white cursor-pointer"
            >
              <span className="text-base text-gray-700 font-medium transition-colors duration-200">
                {faq.question}
              </span>
              <span className="text-gray-500 text-sm ml-4 shrink-0">
                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-40 opacity-100 mb-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500 leading-relaxed pr-8">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
