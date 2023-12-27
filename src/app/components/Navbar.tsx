"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { delay, useInView } from "framer-motion";
import { Section } from "./Section";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Section delay={1}>
      <div className="w-full bg-transparent shadow-md flex justify-between absolute top-0 backdrop-blur-3xl p-4 z-50">
        <h1
          className="mx-4 p-2 h-fit uppercase font-extrabold rounded-xl text-2xl bg-clip-text text-transparent cursor-pointer bg-gradient-to-r from-red-300 to-green-500 shadow-lg"
          onClick={() => {
            if (!pathName.includes("home")) {
              router.push("/home");
            }
          }}
        >
          JB
        </h1>
        <div className="mx-4 gap-4 text-black md:flex hidden transition-all">
          <button
            className={
              pathName.includes("projects")
                ? "bg-gradient-to-r ring-2 h-fit p-2 mt-2 rounded-xl text-white"
                : "bg-transparent rounded-lg p-2 shadow-lg text-white"
            }
            onClick={() => {
              if (!pathName.includes("projects")) {
                router.push("/projects");
              }
            }}
          >
            Projects
          </button>
          <button
            className={
              pathName.includes("experience")
                ? "bg-gradient-to-r ring-2 h-fit p-2 mt-2 rounded-xl text-white"
                : "bg-transparent rounded-lg p-2 shadow-lg text-white"
            }
            onClick={() => {
              if (!pathName.includes("experience")) {
                router.push("/experience");
              }
            }}
          >
            Experience
          </button>
          <button
            className={
              pathName.includes("about")
                ? "bg-gradient-to-r ring-2 h-fit p-2 mt-2 rounded-xl text-white"
                : "bg-transparent rounded-lg p-2 shadow-lg text-white"
            }
            onClick={() => {
              if (!pathName.includes("about")) {
                router.push("/about");
              }
            }}
          >
            About
          </button>
          <button
            className={
              pathName.includes("contact")
                ? "bg-gradient-to-r ring-2 h-fit p-2 mt-2 rounded-xl text-white"
                : "bg-transparent rounded-lg p-2 shadow-lg text-white"
            }
            onClick={() => {
              if (!pathName.includes("contact")) {
                setTimeout(() => router.push("/contact"), 0);
              }
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;
