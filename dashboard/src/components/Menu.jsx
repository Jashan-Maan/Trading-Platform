import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

  return (
    <div className="flex-1 flex items-center justify-between px-4 md:px-10 py-0 relative">
      
      <img src="logo.png" className="w-[20px] md:w-[30px]" alt="Logo" />

  
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
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 relative"
          onClick={handleProfileClick}
        >
          <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 text-[0.7rem] flex items-center justify-center font-medium">
            ZU
          </div>
          <p className="text-xs font-light text-gray-500 uppercase">USERID</p>
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
