import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const menuItems = [
  { label: "Dashboard", path: "/", id: "dashboard" },
  { label: "Orders", path: "/orders", id: "orders" },
  { label: "Holdings", path: "/holdings", id: "holdings" },
  { label: "Positions", path: "/positions", id: "positions" },
  { label: "Funds", path: "/funds", id: "funds" },
  { label: "Apps", path: "/apps", id: "apps" },
];

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (id) => {
    setSelectedMenu(id);
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const activeClass = "text-orange-500";
  const inactiveClass = "text-gray-600 hover:text-orange-500";

  const { user, setUser } = useContext(AppContext);

  const handleLogout = async () => {
    try {
      await axios.post("/users/logout", {}, { withCredentials: true });
      setUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-between px-4 md:px-10 py-0 relative">
      <img src="kite.png" className="w-[20px] md:w-[30px] mr-2" alt="Logo" />

      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-8 list-none">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                onClick={() => handleMenuClick(item.id)}
                className="no-underline"
              >
                <p
                  className={`text-sm font-normal transition-colors duration-200 cursor-pointer ${
                    selectedMenu === item.id ? activeClass : inactiveClass
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="h-6 w-px bg-gray-200"></div>

        {/* Profile */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-80"
            onClick={handleProfileClick}
          >
            <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 text-[0.7rem] flex items-center justify-center font-medium">
              {user?.name?.charAt(0).toUpperCase() || "U"}{" "}
              {/* 👈 show first letter of name */}
            </div>
            <p className="text-xs font-light text-gray-500 uppercase">
              {user?.name || "User"} {/* 👈 show actual name */}
            </p>
          </div>

          {/* Dropdown */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 top-10 w-40 bg-white shadow-lg border border-gray-100 rounded-md z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden flex items-center gap-4">
        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-[0.6rem] flex items-center justify-center font-medium">
          ZU
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-gray-600 text-xl" />
          ) : (
            <FaBars className="text-gray-600 text-xl" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-12 right-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 flex flex-col md:hidden">
          <ul className="flex flex-col list-none w-full">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full border-b border-gray-50">
                <Link
                  to={item.path}
                  onClick={() => handleMenuClick(item.id)}
                  className="block w-full px-6 py-4"
                >
                  <p
                    className={`text-base font-normal ${
                      selectedMenu === item.id ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
