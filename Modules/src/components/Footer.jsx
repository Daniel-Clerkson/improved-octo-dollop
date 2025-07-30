import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.svg"; // Make sure this path matches your logo location

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Marketplace",
    links: ["Products", "Pricing", "Partners", "Vendors"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Guides", "Events", "Community"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Security"],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-10 px-2 md:px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 items-start">
        {/* Logo */}
        <div className="mb-8 md:mb-0 flex-shrink-0 flex items-center pl-0 md:pl-2">
          <img src={logo} alt="Onims Logo" className="h-10 w-auto mr-3" />
          <span className="text-green-900 font-bold text-lg">Onims Agro Solutions Limited</span>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-green-900 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-700 transition text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Socials */}
        <div className="flex flex-col items-center md:items-end gap-4 mt-8 md:mt-0">
          <div className="flex gap-5 text-green-800 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-600 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-blue-700 transition" />
            </a>
          </div>
          <div className="text-gray-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} Onims Agro Solutions Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;