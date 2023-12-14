"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Section } from "./Section";

const MobileNavBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  return (
    <Section delay={1}>
      <div className="w-full bg-transparent shadow-md flex absolute top-0 backdrop-blur-3xl p-4 z-50 justify-between">
        <h1
          className={
            openSideBar
              ? "hidden"
              : "mx-4 p-2 h-fit uppercase font-extrabold rounded-xl text-2xl bg-clip-text text-transparent cursor-pointer bg-gradient-to-r from-red-300 to-green-500 shadow-lg"
          }
          onClick={() => {
            if (!pathName.includes("home")) {
              router.push("/home");
            }
          }}
        >
          JB
        </h1>
        <div
          onClick={() => {
            setOpenSideBar(!openSideBar);
          }}
        >
          <GiHamburgerMenu />
        </div>
        <div
          className={
            openSideBar
              ? "w-screen h-screen -left-full flex flex-col transitional-all justify-between"
              : "right-0"
          }
        >
          <button
            className={
              pathName.includes("projects")
                ? "bg-gradient-to-r ring-2 h-fit p-2 mt-2 rounded-xl text-white"
                : "bg-transparent shadow-lg text-white"
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
                : "bg-transparent shadow-lg text-white"
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
                : "bg-transparent shadow-lg text-white"
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
                : "bg-transparent shadow-lg text-white"
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

export default MobileNavBar;

{
  /* <div className="h-screen w-screen flex absolute flex-col z-50 bg-slate-950 md:hidden">
          <button
            className={
              pathName.includes("projects")
                ? "bg-gradient-to-r ring-2 h-fit p-2 mt-2 rounded-xl text-white"
                : "bg-transparent shadow-lg text-white"
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
                : "bg-transparent shadow-lg text-white"
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
                : "bg-transparent shadow-lg text-white"
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
                : "bg-transparent shadow-lg text-white"
            }
            onClick={() => {
              if (!pathName.includes("contact")) {
                setTimeout(() => router.push("/contact"), 0);
              }
            }}
          >
            Contact
          </button>
        </div> */
}
