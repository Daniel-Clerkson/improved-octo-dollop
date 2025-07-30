import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import {
  FaOutdent,
  FaSearch,
  FaShoppingBasket,
  FaChevronDown,
  FaSeedling,
  FaTractor,
  FaBoxOpen,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaTruck,
  FaMoneyBillWave,
  FaBlog,
  FaBookOpen,
  FaQuestionCircle,
  FaUsers,
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaRegLifeRing,
  FaTimes,
} from "react-icons/fa";

// Add a "path" property to each navLink for navigation
const navLinks = [
  {
    label: "Market",
    path: "/market",
    dropdown: [
      { label: "Agro Inputs", icon: <FaSeedling /> },
      { label: "Agro Outputs", icon: <FaBoxOpen /> },
      { label: "Equipments And Mechanization", icon: <FaTractor /> },
    ],
  },
  {
    label: "Extension",
    path: "/extension",
    dropdown: [
      { label: "Advisory", icon: <FaChalkboardTeacher /> },
      { label: "Workshops", icon: <FaHandsHelping /> },
    ],
  },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      { label: "Logistics", icon: <FaTruck /> },
      { label: "Financing", icon: <FaMoneyBillWave /> },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    dropdown: [
      { label: "Blog", icon: <FaBlog /> },
      { label: "Guides", icon: <FaBookOpen /> },
      { label: "FAQs", icon: <FaQuestionCircle /> },
    ],
  },
  {
    label: "Community",
    path: "/community",
    dropdown: [
      { label: "Forum", icon: <FaUsers /> },
      { label: "Events", icon: <FaCalendarAlt /> },
    ],
  },
  {
    label: "Food Bank",
    path: "/foodbank",
    dropdown: [
      { label: "Donate", icon: <FaHandHoldingHeart /> },
      { label: "Request Help", icon: <FaRegLifeRing /> },
    ],
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  // Handle navigation for main nav links
  const handleNavLinkClick = (path) => {
    if (path) {
      navigate(path);
      setMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <>
      {/* Sticky navbar with high z-index */}
      <div className="navbar w-full px-3 py-2 md:px-6 lg:px-10 flex items-center justify-between lg:justify-evenly fixed top-0 left-0 right-0 shadow-md bg-white z-[9999]">
        <div className="logo w-6/12 lg:w-1/12">
          <img src={logo} alt="" className="" />
        </div>
        {/* Links and cart: hidden on md and below, flex on lg and up */}
        <div className="links1 w-2/3 items-center justify-between px-2 text-gray-500 text-sm hidden lg:flex">
          <div className="links flex">
            {navLinks.map((link, idx) => (
              <div
                key={link.label}
                className={`relative link cursor-pointer mx-3 ${
                  location.pathname === link.path
                    ? "text-green-700 font-semibold border-b-2 border-green-700"
                    : "hover:text-green-600"
                }`}
                onMouseEnter={() => handleDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div
                  className="flex items-center"
                  onClick={() => handleNavLinkClick(link.path)}
                  style={{ userSelect: "none" }}
                >
                  <p>{link.label}</p>
                  <FaChevronDown className="ml-1 text-xs" />
                </div>
                {openDropdown === idx && (
                  <div
                    className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md z-50 py-2"
                    onMouseEnter={() => handleDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.dropdown.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-green-50 hover:text-green-700 cursor-pointer"
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="cart flex items-center justify-around w-1/6">
            <input
              type="text"
              className="w-24 bg-gray-100 py-2 px-4 mx-1 rounded-md outline-0"
            />
            <div className="cart-item">
              <FaSearch className="font-l mx-2" />
            </div>
            <div className="cart-item">
              <FaShoppingBasket className="mx-2" />
            </div>
          </div>
        </div>
        {/* Hamburger menu: block on md and below, hidden on lg and up */}
        <div
          className="outdent text-gray-600 block lg:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaOutdent size={24} />
        </div>
      </div>

      {/* Spacer div to prevent content from being hidden under the navbar */}
      <div className="h-16 md:h-[56px] lg:h-[64px]" />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-[100] flex">
          <div className="bg-white w-4/5 max-w-xs h-full p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <img src={logo} alt="Logo" className="h-8" />
              <button
                className="text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <div key={link.label} className="mb-2">
                  <div
                    className={`flex items-center justify-between cursor-pointer py-2 px-2 rounded ${
                      location.pathname === link.path
                        ? "bg-green-50 text-green-700 font-semibold"
                        : "hover:bg-green-50"
                    }`}
                    onClick={() => {
                      handleNavLinkClick(link.path);
                      handleDropdown(idx);
                    }}
                  >
                    <span className="font-medium">{link.label}</span>
                    <FaChevronDown
                      className={`ml-2 text-xs transition-transform ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openDropdown === idx && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-2 px-2 py-1 hover:bg-green-100 rounded text-gray-700"
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-auto flex gap-4 pt-8">
              <FaSearch className="text-gray-500" />
              <FaShoppingBasket className="text-gray-500" />
            </div>
          </div>
          {/* Click outside to close */}
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={-1}
            aria-label="Close menu overlay"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
