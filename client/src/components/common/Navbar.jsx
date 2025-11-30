import { useState } from "react";
import logo from "../../assets/logo.svg";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import kiteLogo from "../../assets/kite-logo.svg";
import consoleLogo from "../../assets/console.svg";
import kiteConnectLogo from "../../assets/kite-connect.svg";
import coinLogo from "../../assets/coin.svg";
import varsityLogo from "../../assets/varsity-logo.png";
import TradingQNA from "../../assets/tqna.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="lg:container mx-auto px-4 lg:px-32 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="shrink-0">
          <img src={logo} alt="Zerodha Logo" className="w-32" />
        </NavLink>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center gap-10 text-[#666] text-sm hover:text-gray-800">
            <NavLink
              to="/signup"
              className="hover:text-blue-600 transition-colors"
            >
              Signup
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="hover:text-blue-600 transition-colors"
            >
              Products
            </NavLink>
            <NavLink
              to="/pricing"
              className="hover:text-blue-600 transition-colors"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/support"
              className="hover:text-blue-600 transition-colors"
            >
              Support
            </NavLink>
          </div>

          {/* Hamburger Menu Button (Visible on All Screens) */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 hover:scale-105 focus:outline-none"
          >
            {isOpen ? (
              <MdOutlineClose className="text-2xl cursor-pointer" />
            ) : (
              <MdMenu className="text-2xl cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* EXPANDABLE DROPDOWN MENU */}
      {/* This covers the screen on mobile, or drops down on desktop */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full lg:w-1/2 lg:left-1/2 lg:-translate-x-1/6 bg-white shadow-lg border-b border-gray-200 min-h-[50vh] z-40 overflow-auto max-h-[calc(100vh-64px)] no-scrollbar">
          <div className="container mx-auto px-4 lg:px-20 py-5">
            {/* Mobile-Only Links (These hide on desktop inside the menu) */}
            <div className="lg:hidden flex flex-col gap-4 mb-4 border-b border-gray-200 pb-6 text-gray-600">
              <div className="grid grid-cols-2 gap-5">
                <NavLink to="/signup" className="hover:text-blue-600">
                  Signup
                </NavLink>
                <NavLink to="/about" className="hover:text-blue-600">
                  About
                </NavLink>
                <NavLink to="/products" className="hover:text-blue-600">
                  Products
                </NavLink>
                <NavLink to="/pricing" className="hover:text-blue-600">
                  Pricing
                </NavLink>
                <NavLink to="/support" className="hover:text-blue-600">
                  Support
                </NavLink>
              </div>
            </div>

            {/* The "Apps" Grid (Visible on Desktop & Mobile Menu) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 border-b border-gray-200 pb-4">
              <Link
                to="/"
                className="flex items-center gap-3 lg:flex-col hover:bg-gray-50 lg:hover:bg-transparent  rounded transition"
              >
                <img
                  src={kiteLogo}
                  alt="Kite"
                  className="w-10 lg:w-16 lg:hover:opacity-80"
                />
                <div className="lg:text-center">
                  <h3 className="text-base font-medium text-gray-800 lg:hover:text-blue-500">
                    Kite
                  </h3>
                  <p className="hidden lg:block text-xs text-gray-500">
                    Trading platform
                  </p>
                </div>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-3 lg:flex-col hover:bg-gray-50 lg:hover:bg-transparent rounded transition"
              >
                <img
                  src={consoleLogo}
                  alt="Console"
                  className="w-10 lg:w-16 lg:hover:opacity-80"
                />
                <div className="lg:text-center">
                  <h3 className="text-base font-medium text-gray-800 lg:hover:text-blue-500">
                    Console
                  </h3>
                  <p className="hidden lg:block text-xs text-gray-500">
                    Backoffice
                  </p>
                </div>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-3 lg:flex-col hover:bg-gray-50 lg:hover:bg-transparent rounded transition"
              >
                <img
                  src={kiteConnectLogo}
                  alt="Kite Connect"
                  className="w-10 lg:w-16 lg:hover:opacity-80"
                />
                <div className="lg:text-center">
                  <h3 className="text-base font-medium text-gray-800 lg:hover:text-blue-500">
                    Kite Connect
                  </h3>
                  <p className="hidden lg:block text-xs text-gray-500">
                    Trading APIs
                  </p>
                </div>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-3 lg:flex-col hover:bg-gray-50 lg:hover:bg-transparent rounded transition"
              >
                <img
                  src={coinLogo}
                  alt="Coin"
                  className="w-10 lg:w-16 lg:hover:opacity-80"
                />
                <div className="lg:text-center">
                  <h3 className="text-base font-medium text-gray-800 lg:hover:text-blue-500">
                    Coin
                  </h3>
                  <p className="hidden lg:block text-xs text-gray-500">
                    Mutual funds
                  </p>
                </div>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-3 lg:hidden hover:bg-gray-50  rounded transition"
              >
                <img
                  src={varsityLogo}
                  alt="Varsity"
                  className="ml-2 w-6 lg:w-12"
                />
                <div>
                  <h3 className="text-base font-medium text-gray-800">
                    Varsity
                  </h3>
                  <p className="text-xs text-gray-500 hidden">Mutual funds</p>
                </div>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-3 lg:hidden hover:bg-gray-50 lg:hover:bg-transparent rounded transition"
              >
                <img
                  src={TradingQNA}
                  alt="Trading Q&A"
                  className="ml-2 w-6 lg:w-12 lg:hover:opacity-80"
                />
                <div>
                  <h3 className="text-base font-medium text-gray-800 lg:hover:text-blue-500">
                    Trading Q&A
                  </h3>
                  <p className="hidden text-xs text-gray-500">Mutual funds</p>
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {/* Column 2: Utilities */}
              <div className="flex flex-col gap-2 pl-0 lg:pl-10 ">
                <h3 className="text-base font-medium text-gray-800 pb-2 w-fit">
                  Utilities
                </h3>
                <Link
                  to="/"
                  className="lg:hover:text-blue-500 text-sm text-gray-600 "
                >
                  Brokerage calculator
                </Link>
                <Link
                  to="/"
                  className="lg:hover:text-blue-500 text-sm text-gray-600 "
                >
                  Margin calculator
                </Link>
                <Link
                  to="/"
                  className="lg:hover:text-blue-500 text-sm text-gray-600 "
                >
                  Holiday calendar
                </Link>
                <Link
                  to="/"
                  className="lg:hover:text-blue-500 text-sm text-gray-600 "
                >
                  Markets
                </Link>
              </div>

              {/* Column 3: Updates */}
              <div className="flex flex-col gap-2 pl-0 lg:pl-10">
                <h3 className="text-base font-medium text-gray-800 pb-2 w-fit">
                  Updates
                </h3>
                <Link
                  to="/"
                  className="lg:hover:text-blue-500 text-sm text-gray-600 "
                >
                  Z-Connect blog
                </Link>
                <Link
                  to="/"
                  className="lg:hover:text-blue-500 text-sm text-gray-600 "
                >
                  Pulse News
                </Link>
                <Link
                  to="/"
                  className="lg:hover:text-blue-500 text-sm text-gray-600 "
                >
                  Circulars / Bulletin
                </Link>
                <Link
                  to="/"
                  className="lg:hover:text-blue-500 text-sm text-gray-600 "
                >
                  IPOs
                </Link>
              </div>

              {/* Column 4: Education */}
              <div className="hidden flex-col gap-6 items-start text-center lg:text-left lg:flex ">
                <h3 className="text-base font-medium text-gray-800 pb-2 w-fit ">
                  Education
                </h3>
                <div className="grid grid-cols-2 gap-8 items-center ">
                  <Link
                    to="/"
                    className="flex flex-col items-center lg:items-center gap-2 group"
                  >
                    <img src={varsityLogo} alt="Varsity" className="w-10" />
                    <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
                      Varsity
                    </p>
                  </Link>
                  <Link
                    to="/"
                    className="flex flex-col items-center lg:items-center gap-2 group"
                  >
                    <img src={TradingQNA} alt="TradingQnA" className="w-10" />
                    <p className="text-sm font-medium  text-gray-600 group-hover:text-blue-600">
                      TradingQ&A
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
