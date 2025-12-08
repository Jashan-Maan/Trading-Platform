import ZerodhaFundHouse from "../../assets/zerodhaFundhouse.png";
import SensiBull from "../../assets/sensibullLogo.svg";
import Tijori from "../../assets/tijori.svg";
import Streak from "../../assets/streakLogo.png";
import smallCaseLogo from "../../assets/smallcaseLogo.png";
import Ditto from "../../assets/dittoLogo.png";

const Universe = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20 py-16">
      <h1 className="text-2xl text-center mb-6">The Zerodha Universe</h1>
      <p className="text-center mb-10 text-gray-600">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex flex-col items-center gap-6 md:gap-12 w-full md:w-1/3">
          <a href="/" className="flex flex-col items-center gap-4">
            <img
              src={ZerodhaFundHouse}
              alt="Zerodha Fund House"
              className="w-48"
            />
            <p className="text-center text-xs text-gray-500 leading-relaxed tracking-tighter">
              Our asset management venture
              <br /> that is creating simple and transparent index
              <br /> funds to help you save for your goals.
            </p>
          </a>
          <a href="/" className="flex flex-col items-center gap-4">
            <img src={Streak} alt="Streak" className="w-48" />
            <p className="text-center text-xs text-gray-500 leading-relaxed tracking-tighter">
              Systematic trading platform
              <br /> that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-12 w-full md:w-1/3">
          <a href="/" className="flex flex-col items-center gap-4">
            <img src={SensiBull} alt="SensiBull" className="w-48" />
            <p className="text-center text-xs text-gray-500 leading-relaxed tracking-tighter">
              Options trading platform that lets you
              <br /> create strategies, analyze positions, and examine
              <br /> data points like open interest, FII/DII, and more.
            </p>
          </a>
          <a href="/" className="flex flex-col items-center gap-4">
            <img src={smallCaseLogo} alt="smallCase" className="w-48" />
            <p className="text-center text-xs text-gray-500 leading-relaxed tracking-tighter">
              Thematic investing platform
              <br /> that helps you invest in diversified
              <br /> baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-12 w-full md:w-1/3">
          <a href="/" className="flex flex-col items-center gap-4">
            <img src={Tijori} alt="Tijori" className="w-48" />
            <p className="text-center text-xs text-gray-500 leading-relaxed tracking-tighter">
              Investment research platform
              <br /> that offers detailed insights on stocks,
              <br /> sectors, supply chains, and more.
            </p>
          </a>
          <a href="/" className="flex flex-col items-center gap-4">
            <img src={Ditto} alt="Ditto" className="w-40" />
            <p className="text-center text-xs text-gray-500 leading-relaxed tracking-tighter">
              Personalized advice on life
              <br /> and health insurance. No spam
              <br /> and no mis-selling.
            </p>
          </a>
        </div>
      </div>
      <button className="bg-[#387ed1] text-lg font-semibold text-white px-10 py-2.5 rounded hover:bg-gray-800 transition-colors duration-300 ease-in-out cursor-pointer mx-auto block mt-16">
        Sign Up for free
      </button>
    </section>
  );
};

export default Universe;
