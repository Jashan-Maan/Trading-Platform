import HomeHero from "../../assets/HomeHero.svg";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-16 md:pt-24">
      <div className="flex flex-col items-center text-center">
        <img
          src={HomeHero}
          alt="Hero Image"
          className="mb-10 md:mb-12 min-w-[310px] max-w-[800px] w-full mx-auto"
        />
        <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4 leading-tight">
          Invest in everything
        </h1>
        <p className="text-lg text-gray-600 md:text-xl mb-10">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="bg-[#387ed1] text-lg font-semibold text-white px-10 py-2.5 rounded hover:bg-gray-800 transition-colors duration-300 ease-in-out cursor-pointer">
          Sign Up for free
        </button>
      </div>
    </section>
  );
};

export default Hero;
