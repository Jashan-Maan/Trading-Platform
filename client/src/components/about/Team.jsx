import nithinKamath from "../../assets/nithinKamath.jpg";
import Nikhil from "../../assets/Nikhil.jpg";
import Kailash from "../../assets/Kailash.jpg";
import Venu from "../../assets/Venu.jpg";
import Hanan from "../../assets/Hanan.jpg";
import Seema from "../../assets/Seema.jpg";
import karthik from "../../assets/karthik.jpg";
import Austin from "../../assets/Austin.jpg";

const Team = () => {
  const teamMembers = [
    {
      img: Nikhil,
      name: "Nikhil Kamath",
      title: "Co-founder & CTO",
    },
    {
      img: Kailash,
      name: "Dr. Kailash Nadh",
      title: "CTO",
    },
    {
      img: Venu,
      name: "Venu Madhav",
      title: "COO",
    },
    {
      img: Hanan,
      name: "Hanan Delvi",
      title: "CCO",
    },
    {
      img: Seema,
      name: "Seema Patil",
      title: "Director",
    },
    {
      img: karthik,
      name: "karthik Rangappa",
      title: "Chief of Education",
    },
    { img: Austin, name: "Austin Prakesh", title: "Director Strategy" },
  ];

  return (
    <section className="container mx-auto px-4 md:px-10 lg:px-20 pt-16 pb-20">
      <h1 className=" text-xl md:text-2xl font-medium text-[#444] text-center mb-10">
        People
      </h1>
      <div className="flex items-center flex-col md:flex-row gap-8 lg:gap-32 mb-24">
        <div className="flex flex-col items-center w-full md:w-2/5">
          <img
            src={nithinKamath}
            alt="Nithin Kamath"
            className="w-64 h-64 rounded-full object-cover mb-4 border border-green-100"
          />
          <h1 className="text-xl font-medium text-gray-700">Nithin Kamath</h1>
          <p className="text-sm text-gray-500 mt-1">Founder, CEO</p>
        </div>
        <div className="flex flex-col w-full md:w-3/5 gap-6 text-base leading-8 text-gray-600">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <span className="text-[#387ed1] hover:text-black font-medium transition-colors no-underline cursor-pointer">
              Homepage
            </span>{" "}
            /{" "}
            <span className="text-[#387ed1] hover:text-black font-medium transition-colors no-underline cursor-pointer">
              TradingQnA
            </span>{" "}
            /{" "}
            <span className="text-[#387ed1] hover:text-black font-medium transition-colors no-underline cursor-pointer">
              Twitter
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
        {teamMembers.map((member, index) => (
          <div className="flex flex-col items-center text-center" key={index}>
            <div className="w-48 h-48 mb-6 overflow-hidden rounded-full border border-gray-100">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </div>
            <h1 className="text-base font-medium mb-1 text-gray-700">
              {member.name}
            </h1>
            <p className="text-sm text-gray-500 mb-3">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
