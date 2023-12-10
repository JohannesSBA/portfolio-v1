import React from "react";
import { FiAperture } from "react-icons/fi";

interface experienceProps {
  date: string;
  title: string;
  desc: string[];
}

const ExperienceItem = ({ date, title, desc }: experienceProps) => {
  return (
    <div className="w-full ml-8 md:flex md:gap-12 md:shadow-md hover:border2 hover:border-gray-200 rounded-lg shadow  hover:bg-gray-100 hover:bg-opacity-5 hover-backdrop-blur-sm md:p-8">
      <h4 className="text-xs uppercase text-slate-500">{date}</h4>
      <h1 className="text-xl uppercase font-extrabold text-teal-blue-400">
        {title}
      </h1>
      <div className="text-slate-400 ml-3 w-80">
        {desc.map((description, index) => (
          <h1 className="text-xs p-4 flex gap-2" key={index}>
            <FiAperture />
            {description}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
