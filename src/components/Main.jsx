import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import sandy1 from "../assets/sandy1.jpg";
import sandy2 from "../assets/sandy2.jpg";

function Main() {
  return (
    <div id="main" className="flex bg-black text-white">
      {/* Right side (photo) */}
      <div className="flex-1">
        <img
          className="w-full h-screen object-cover object-center scale-x-[-1]"
          src={sandy1}
          alt="/"
        />
      </div>
      {/* Left side */}
      <div className="flex-1 bg-black bg-opacity-40">
        <div className="max-w-[700px] m-auto h-screen flex flex-col justify-center lg:items-start items-center p-4">
          <h1 className="sm:text-5xl text-4xl font-bold font-mono">
            I'm <span className="text-blue-400">Sandaru</span>
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white font-mono">
            <span className="text-yellow-300">I'm a</span>
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Coder",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "0.5em",
              }}
              repeat={Infinity}
            />
          </h2>
          <p className="flex sm:text-1xl text-1xl pt-4 text-gray-300 font-mono">
            I am a skilled and passionate web designer with experience in
            creating visually appealing and user-friendly websites.
          </p>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://twitter.com/SandyBeats1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="cursor-pointer text-blue-400" size={20} />
            </a>
            <a
              href="https://web.facebook.com/sandaru.dissanayake.75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer text-blue-400" size={20} />
            </a>
            <a
              href="https://www.instagram.com/sandy__beats/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer text-blue-400" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandaru-dissanayake-8a5964290/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer text-blue-400" size={20} />
            </a>
            <a
              href="https://github.com/sandarud99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer text-blue-400" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
