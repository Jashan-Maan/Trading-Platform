import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiChevronLeftCircle } from "react-icons/bi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SiCircle } from "react-icons/si";
import { RiCoinsFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

const QuickInfo = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const categories = [
    {
      title: "Account Opening",
      icon: <FiPlusCircle className="text-xl text-[#387ed1]" />,
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: <CgProfile className="text-xl text-[#387ed1]" />,
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: <BiChevronLeftCircle className="text-2xl text-[#387ed1]" />,
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: <RiMoneyRupeeCircleLine className="text-2xl text-[#387ed1]" />,
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: <SiCircle className="text-2xl text-[#387ed1]" />,
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: <RiCoinsFill className="text-2xl text-[#387ed1]" />,
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className=" w-full md:w-3/4 flex-1 flex flex-col gap-4">
            {categories.map((cat, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleTab(index)}
                  className="flex justify-between items-center px-3 py-4 bg-white cursor-pointer hover:scale-[102%] transition-all duration-300 ease-in-out border border-gray-200"
                >
                  <div className="flex items-center gap-4 w-full h-full">
                    <span className="text-[#387ed1]">{cat.icon}</span>
                    <h4 className="text-lg text-gray-700 font-normal">
                      {cat.title}
                    </h4>
                  </div>
                  <FaChevronDown
                    className={` transition-transform duration-300 text-[#387ed1] ${
                      activeTab === index ? "-rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden border border-gray-100 transition-all duration-300 ease-in-out ${
                    activeTab === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-4 p-6 pt-2 pl-16 list-disc">
                    {cat.links.map((link, idx) => (
                      <li
                        key={idx}
                        className="marker:text-[#387ed1] hover:marker:text-gray-900"
                      >
                        <a
                          href="#"
                          className="text-[#387ed1] hover:text-gray-900 text-[15px] block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/4 flex flex-col gap-8">
            <div className="bg-blue-50/10 p-0">
              <div className="bg-[#ff9100]/10 border-l-6 border-[#ff9100] p-4 rounded-sm">
                <ul className="space-y-2 list-disc marker:text-[#387ed1] hover:marker:text-gray-900 ml-2">
                  <li>
                    <a
                      href="#"
                      className="text-[#387ed1] hover:text-gray-900 text-base underline decoration-1 underline-offset-2"
                    >
                      Latest Intraday leverages and Square-off timings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#387ed1] hover:text-gray-900 text-base underline decoration-1 underline-offset-2"
                    >
                      Surveillance measure on scrips - December 2025
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded">
              <h4 className="text-base font-medium text-gray-800 mb-4  bg-gray-100 px-4 py-3">
                Quick links
              </h4>
              <ul>
                {[
                  "Track account opening",
                  "Track segment activation",
                  "Intraday margins",
                  "Kite user manual",
                  "Learn how to create a ticket",
                ].map((link, i) => (
                  <li key={i} className="border-b border-gray-200 px-4 py-2">
                    <a
                      href="#"
                      className="text-[#387ed1] hover:text-gray-900 text-base tracking-tight leading-relaxed"
                    >
                      {i + 1}. {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
