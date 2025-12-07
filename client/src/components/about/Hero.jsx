const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 lg:px-20 mt-10 md:mt-20">
      <div className="flex items-center justify-center py-10 md:py-16">
        <h1 className="text-xl md:text-2xl font-medium text-[#444] text-center leading-[1.4] tracking-wide">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>
      <hr className=" border-gray-200 border-t" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 mt-16 md:mt-24 text-base text-[#444] leading-8">
        <div className="flex flex-col gap-6">
          <p className="">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <span className="text-[#387ed1] font-medium no-underline hover:text-black transition-colors">
              Rainmatter
            </span>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <span className="text-[#387ed1] font-medium no-underline hover:text-black transition-colors">
              blog
            </span>{" "}
            or see what the media is{" "}
            <span className="text-[#387ed1] font-medium no-underline hover:text-black transition-colors">
              saying about us
            </span>{" "}
            or learn more about our business and product{" "}
            <span className="text-[#387ed1] font-medium no-underline hover:text-black transition-colors">
              philosophies
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
