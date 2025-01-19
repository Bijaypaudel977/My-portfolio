import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-16 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-2 gap-8">
      {/* Logo and Social Media */}
      <div className="w-full h-full flex flex-col items-center gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          
          <a
            href="https://github.com/Bijaypaudel977"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bijay-paudel-5a307b26a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/bijay.paudel.18400"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full h-full pt-32 flex flex-col items-center">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-row items-center  gap-4 font-titleFont font-medium py-6">
          {["Home", "Projects", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              >
                {item}
                <span className="w-0 h-[2px] bg-designColor absolute left-0 -bottom-1 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
