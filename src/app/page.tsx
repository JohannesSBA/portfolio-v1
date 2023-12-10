import React from "react";
import NavBar from "./components/Navbar";
import { redirect } from "next/navigation";

const page = () => {
  redirect("/home");
  return <div className="w-screen h-screen"></div>;
};

export default page;
