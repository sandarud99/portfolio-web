import React from "react";
import ProojectItem from "./ProjectItem";
import pimg1 from "../assets/517.png";
import pimg2 from "../assets/518.png";
import pimg3 from "../assets/519.png";
import pimg4 from "../assets/520.png";
import ProjectItem from "./ProjectItem";

function Project() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={pimg1} title={"Pimg1"} />
        <ProjectItem img={pimg2} title={"Pimg2"} />
        <ProjectItem img={pimg3} title={"Pimg3"} />
        <ProjectItem img={pimg4} title={"Pimg4"} />
      </div>
    </div>
  );
}

export default Project;
