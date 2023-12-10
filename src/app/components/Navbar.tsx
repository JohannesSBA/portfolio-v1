"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="h-14 w-full bg-teal-blue-950 flex justify-between sticky top-0 backdrop-blur-3xl">
      <h1 className="mx-4 p-2 h-fit uppercase font-extrabold rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-green-500 shadow-lg">
        JB
      </h1>
      <div className=" mx-4 gap-4 text-black md:flex hidden">
        <button
          className={
            pathName.includes("home")
              ? "bg-gradient-to-r from-red-300 to-green-500 h-fit p-2 mt-2 rounded-xl text-white"
              : "bg-slate-50"
          }
          onClick={() => {
            if (!pathName.includes("home")) {
              router.push("/home");
            }
          }}
        >
          Home
        </button>
        <button
          className={
            pathName.includes("projects")
              ? "bg-gradient-to-r from-red-300 to-green-500 h-fit p-2 mt-2 rounded-xl text-white"
              : "bg-slate-50"
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
              ? "bg-gradient-to-r from-red-300 to-green-500 h-fit p-2 mt-2 rounded-xl text-white"
              : "bg-slate-50"
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
              ? "bg-gradient-to-r from-red-300 to-green-500 h-fit p-2 mt-2 rounded-xl text-white"
              : "bg-slate-50"
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
              ? "bg-gradient-to-r from-red-300 to-green-500 h-fit p-2 mt-2 rounded-xl text-white"
              : "bg-slate-50"
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
  );
};

export default Navbar;
