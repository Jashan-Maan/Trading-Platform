import accountOpen from "../../assets/account_open.svg";
import indiaFlag from "../../assets/india-flag.svg";

const Hero = () => {
  return (
    <section className="pt-12 md:pt-24 pb-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="hidden md:block text-3xl font-medium text-center text-gray-700 leading-tight">
          Open a free demat and trading account online
        </h1>
        <p className="hidden md:block text-center mt-4 text-gray-500 text-lg">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mt-12 md:mt-24">
          <img
            src={accountOpen}
            alt="Account Open"
            className="h-72 mx-auto md:w-full "
          />
          <h1 className="md:hidden font-semibold text-2xl ">
            Open a free demat & trading account online
          </h1>
          <div>
            <h2 className=" text-xl md:text-2xl font-medium text-gray-800">
              SignUp now
            </h2>
            <p className="text-gray-500 mt-2 mb-4 hidden md:block">
              Or track your existing application
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              aria-label="Signup form"
              className="w-full flex flex-col gap-4 mt-4"
            >
              <div className="flex items-stretch border border-gray-300 rounded-sm overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 bg-white border-r border-gray-300">
                  <img
                    src={indiaFlag}
                    alt="India Flag"
                    className="w-6 h-4 object-contain"
                  />
                  <span className="text-lg">+91</span>
                </div>
                <input
                  type="number"
                  name="phone"
                  inputMode="tel"
                  placeholder="Enter your mobile number"
                  required
                  className="flex-1 px-4 py-3 text-lg no-updown border-none outline-none placeholder:text-gray-400"
                  aria-label="Mobile number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                />
              </div>
              <button
                type="submit"
                className="mt-6 bg-[#387ed1] hover:bg-[#111]
                cursor-pointer text-white py-3 w-full md:w-2/3 rounded-sm text-lg font-medium mb-6"
              >
                Get OTP
              </button>
              <p className="text-xs text-gray-500 text-center md:text-left">
                By proceeding, you agree to the Zerodha{" "}
                <span className="text-[#387ed1] font-medium">terms</span> and{" "}
                <span className="text-[#387ed1] font-medium">
                  privacy policy
                </span>
              </p>
              <hr className="w-full border-gray-300/60" />
              <p className="text-xs text-gray-500 text-center md:text-left">
                Looking to open NRI account?{" "}
                <span className="text-[#387ed1] font-medium">Click here</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
