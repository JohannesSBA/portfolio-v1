import React from "react";
import Image from "next/image";

interface projectProps {
  title: string;
  desc: string;
  image: string;
  link: string;
}

const PorjectItem = ({ title, desc, image, link }: projectProps) => {
  return (
    <div>
      <a
        href={link}
        className="p-12 m-12 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          src={image}
          width={100}
          height={24}
          alt={"portfolio project pic"}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
        </div>
      </a>
    </div>
  );
};

export default PorjectItem;
