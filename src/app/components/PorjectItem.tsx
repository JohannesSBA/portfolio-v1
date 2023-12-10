import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons";

interface projectProps {
  title: string;
  desc: string;
  image: string;
  link: string;
  tags: string[];
}

const PorjectItem = ({ title, desc, image, link, tags }: projectProps) => {
  return (
    <a
      href={link}
      className="p-6 md:p-2 transition-all w-screen md:w-full flex flex-col md:flex-row gap-2 bg-transparent group hover:border2 hover:border-gray-200 rounded-lg shadow  hover:bg-gray-100 hover:bg-opacity-5 hover-backdrop-blur-sm"
    >
      <div className="md:w-fit w-full mb-4 flex flex-col md:h-full justify-center">
        <Image
          src={image}
          width={100}
          height={24}
          alt={"portfolio project pic"}
          className="object-cover flex w-44 h-24 rounded-lg border-2 border-transparent group-hover:border-gray-500 align-middle "
        />
      </div>
      <div className="md:w-1/2 w-full flex flex-col gap-2">
        <div className="flex gap-2">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-slate-100 group-hover:text-teal-blue-300">
            {title}
          </h5>
          <IconContext.Provider
            value={{
              className:
                "rotate-45 group-hover:translate-x-1 text-slate-100 group-hover:-translate-y-1 group-hover:text-teal-blue-400 transition-all",
            }}
          >
            <FaArrowUp />
          </IconContext.Provider>
        </div>
        <div className="">
          <p className="mb-3 text-slate-400 font-extralight text-sm">{desc}</p>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="p-2 rounded-2xl bg-teal-blue-900 bg-opacity-80"
              >
                <h1 className="text-teal-blue-200 font-extralight text-xs h-fit px-1 py-0">
                  {tag}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default PorjectItem;
