import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss,SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [ "MERN Stack Developer.","Techh Enthusiast.","Aspiring Software Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Bijay Paudel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a passionate Web Developer with strong front-end skills in React
          (React.js, .tsx), Tailwind CSS, and JavaScript. I enjoy building
          responsive, user-focused interfaces and have a solid understanding of
          backend technologies like Node.js. I am excited to apply my front-end
          knowledge to create innovative and high performing web applications.
        </p>
      </div>
      <div className="flex flex-col  xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont pl-2 mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Bijaypaudel977" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/bijay-paudel-5a307b26a/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/bijay.paudel.18400" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            {/* <a href="https://github.com/Bijaypaudel977" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a> */}
          </div>
        </div>
        <div>
          <h2 className="text-base pl-2 uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            {/* <span className="bannerIcon">
              <SiFigma />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
