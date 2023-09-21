import React from "react";
import WorkItem from "./WorkItem";
import js1 from "../assets/js.svg";

function Work() {
  return (
    <div>
      {/* Your existing Work component */}
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          My Skills
        </h1>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 bg-white shadow-md rounded-lg p-4">
        <div className="flex flex-wrap -mx-4">
          {/* Skill Cards */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-blue-400 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">HTML</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-green-400 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">CSS</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-yellow-400 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">
                JavaScript
              </h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-red-400 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">Node.js</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-purple-400 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">MongoDB</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-red-200 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">MySQL</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-blue-200 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">
                Material UI
              </h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-green-200 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">
                Chakra UI
              </h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-indigo-400 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">
                Tailwind CSS
              </h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-purple-300 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">PHP</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-pink-400 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">C#</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <div className="bg-red-400 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-black mb-2">Python</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
