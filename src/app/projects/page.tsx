"use client";
import React from "react";
import ProjectItem from "../components/PorjectItem";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const page = () => {
  return (
    <div className="h-screen w-screen flex gap-2 items-center ">
      <div className="w-1/2 ml-24 h-full overflow-clip">
        <div className="flex flex-col gap-2 h-1/2 mt-20">
          <h1 className="font-extrabold text-6xl text-slate-200">
            Johannes Bekele
          </h1>
          <h4 className=" text-2xl">Software Engineer</h4>
          <p className="font-light text-slate-400 w-80">
            I build exceptional and accessible digital experiences for the web.
          </p>
        </div>
        <div className="text-slate-400 flex gap-4 absolute bottom-16">
          <IconContext.Provider
            value={{ size: "2em", color: "hover:text-white" }}
          >
            <a
              href="https://www.instagram.com/johannesseleshi/?next=%2F"
              target="_blank"
              className="hover:text-slate-50"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/JohannesSBA"
              target="_blank"
              className="hover:text-slate-50"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/johannes-bekele/"
              target="_blank"
              className="hover:text-slate-50"
            >
              <FaLinkedin />
            </a>
          </IconContext.Provider>
        </div>
      </div>
      <div className="w-1/2">
        <ProjectItem
          title={"bunaChai"}
          desc={"Realtime Messaging Applicaiton"}
          image={`/bunaChai.png`}
          link="https://github.com/JohannesSBA/buna-chai"
        />
      </div>
    </div>
  );
};

export default page;
