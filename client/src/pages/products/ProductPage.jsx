import LeftSection from "../../components/products/LeftSection";
import RightSection from "../../components/products/RightSection";
import Universe from "../../components/products/Universe";
import Hero from "../../components/products/Hero";
import Kite from "../../assets/kite.png";
import Coin from "../../assets/coin.png";
import Varsity from "../../assets/varsity.svg";
import Console from "../../assets/console.png";
import KiteConnect from "../../assets/kiteconnect.png";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl={Kite}
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Urls={[
          { url: "/", title: "Try Demo" },
          { url: "/", title: "Learn More" },
        ]}
        googlePlay="/"
        appStore="/"
      />
      <RightSection
        imageUrl={Console}
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        url={{ url: "/", title: "Learn more" }}
      />
      <LeftSection
        imageUrl={Coin}
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices"
        Urls={[{ url: "/", title: "Coin" }]}
        googlePlay="/"
        appStore="/"
      />
      <RightSection
        imageUrl={KiteConnect}
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        url={{ url: "/", title: "Kite Connect" }}
      />
      <LeftSection
        imageUrl={Varsity}
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="/"
        appStore="/"
      />
      <p className="text-center text-gray-600 text-xl my-9">
        Want to know more about our technology stack? Check out the{" "}
        <span className="text-[#387ed1] font-medium ">Zerodha.tech</span> blog.
      </p>
      <Universe />
    </>
  );
};

export default ProductPage;
