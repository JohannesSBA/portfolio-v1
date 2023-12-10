"use client";
import React from "react";
import ProjectItem from "../components/PorjectItem";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const page = () => {
  return (
    <div className="md:h-screen w-screen flex flex-col overflow-clip md:flex-row gap-12 items-center bg-teal-blue-950 bg-opacity-30">
      <div className="w-screen md:w-1/2 ml-12 md:ml-24 h-full overflow-clip">
        <div className="flex flex-col gap-4 md:h-1/2 mt-20">
          <h1 className="font-extrabold text-4xl md:text-6xl text-slate-200 glow:text-black">
            Johannes Bekele
          </h1>
          <h4 className="text-xl md:text-2xl text-slate-300">
            Software Engineer
          </h4>
          <p className="font-light text-slate-400 w-80">
            These are the project I have currently been working on !!
          </p>
        </div>
        <div className="text-slate-400 flex gap-4 mt-8 md:absolute md:bottom-12">
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
      <div className="md:w-1/2 md:h-5/6 md:mr-12 overflow-scroll md:flex md:flex-col md:gap-8">
        <ProjectItem
          title={"Econnect"}
          desc={
            "Econnect is a employment-focused social media platform that works through websites and mobile apps. The platform is primarily ment for professional networking and career development, and allows jobseekers to post their apply for jobs and employers to post jobs."
          }
          image={`/bunaChai.png`}
          link="https://github.com/JohannesSBA/econnect-dev"
          tags={[
            "Nextjs",
            "Postgres",
            "TypeScript",
            "tailwind",
            "Prisma",
            "Docker",
          ]}
        />
        <ProjectItem
          title={"bunaChai"}
          desc={
            "Realtime Messaging Applicaiton. Built using Nextjs, Redis, Typscript, tailwind, and Upstash. Ability to find friends using email adresses and login using google through OAuth"
          }
          image={`/bunaChai.png`}
          link="https://github.com/JohannesSBA/buna-chai"
          tags={["Nextjs", "Redis", "TypeScript", "tailwind"]}
        />
        <ProjectItem
          title={"Admin Portal"}
          desc={
            "This project is to build a web app that brings together all of these services together into an easy-to-use portal that will allow multiple people to organize and run events. Ultimately, it will allow for scaling out the operations of Grassroots Grocery to more sites around NYC and beyond."
          }
          image={`/admin-portal.png`}
          link="https://github.com/JohannesSBA/admin-portal"
          tags={["Vite", "Express", "TypeScript", "tailwind", "React"]}
        />
      </div>
    </div>
  );
};

export default page;
