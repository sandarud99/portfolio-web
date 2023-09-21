import React from "react";

function ProjectItem({ img, title }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src={img} alt="" className="rounded-xl" />
    </div>
  );
}

export default ProjectItem;
