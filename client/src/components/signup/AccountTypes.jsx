import {
  MdOutlinePerson,
  MdOutlineGroups,
  MdOutlinePublic,
  MdOutlineBusiness,
} from "react-icons/md";
import { FaBaby } from "react-icons/fa6";

const AccountTypes = () => {
  const accounts = [
    {
      icon: <MdOutlinePerson className="text-2xl" />,
      title: "Individual Account",
      desc: "Invest in equity, mutual funds and derivatives",
    },
    {
      icon: <MdOutlineGroups className="text-2xl" />,
      title: "HUF Account",
      desc: "Make tax-efficient investments for your family",
    },
    {
      icon: <MdOutlinePublic className="text-2xl" />,
      title: "NRI Account",
      desc: "Invest in equity, mutual funds, debentures, and more",
    },
    {
      icon: <FaBaby className="text-2xl" />,
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future with them",
    },
    {
      icon: <MdOutlineBusiness className="text-2xl" />,
      title: "Corporate / LLP/ Partnership",
      desc: "Manage your business surplus and investments easily",
    },
  ];

  return (
    <section className=" px-4 md:px-10 lg:px-20 ">
      <h1 className="text-3xl font-medium text-[#444] text-center mb-16">
        Explore different account types
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-5 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white group cursor-pointer"
          >
            <div className="rounded-full bg-blue-50 p-3 text-[#387ed1] shrink-0">
              {account.icon}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-gray-800">
                {account.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {account.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountTypes;
