"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Section } from "./Section";

const MobileNavBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <Section delay={1}>
      <div className="w-full bg-transparent shadow-md flex justify-between absolute top-0 backdrop-blur-3xl p-4 z-50">
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
          className="p-5"
          onClick={() => {
            setOpenSideBar(!openSideBar);
          }}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Sidebar */}
      {openSideBar && (
        <div className="fixed top-0 h-full w-full justify-around bg-slate-950 z-50 flex flex-col">
          <button
            className="p-5"
            onClick={() => {
              setOpenSideBar(!openSideBar);
            }}
          >
            <AiOutlineClose />
          </button>
          <div className="flex flex-col w-full h-full justify-around p-8">
            <button
              className={
                pathName.includes("projects")
                  ? "bg-gradient-to-r  h-fit p-2 mt-2 rounded-xl text-white"
                  : "bg-transparent shadow-lg text-white"
              }
              onClick={() => {
                if (!pathName.includes("projects")) {
                  router.push("/projects");
                }
                setOpenSideBar(!openSideBar);
              }}
            >
              Projects
            </button>
            <button
              className={
                pathName.includes("experience")
                  ? "bg-gradient-to-r  h-fit p-2 mt-2 rounded-xl text-white"
                  : "bg-transparent shadow-lg text-white"
              }
              onClick={() => {
                if (!pathName.includes("experience")) {
                  router.push("/experience");
                }
                setOpenSideBar(!openSideBar);
              }}
            >
              Experience
            </button>
            <button
              className={
                pathName.includes("about")
                  ? "bg-gradient-to-r  h-fit p-2 mt-2 rounded-xl text-white"
                  : "bg-transparent shadow-lg text-white"
              }
              onClick={() => {
                if (!pathName.includes("about")) {
                  router.push("/about");
                }
                setOpenSideBar(!openSideBar);
              }}
            >
              About
            </button>
            <button
              className={
                pathName.includes("contact")
                  ? "bg-gradient-to-r  h-fit p-2 mt-2 rounded-xl text-white"
                  : "bg-transparent shadow-lg text-white"
              }
              onClick={() => {
                if (!pathName.includes("contact")) {
                  router.push("/contact");
                }
                setOpenSideBar(!openSideBar);
              }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default MobileNavBar;
