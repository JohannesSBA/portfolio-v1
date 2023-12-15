import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="h-screen w-screen overflow-clip p-12 flex justify-center items-center">
      <div className="w-1/2 h-full flex justify-center items-center">
        <Image
          src={"/johannes.jpeg"}
          alt={"johannes"}
          width={300}
          height={75}
          className="rounded-full border-2 "
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-8">
        <div className="flex gap-4">
          <h1 className="text-2xl font-extrabold text-teal-blue-400">
            About me
          </h1>
          <div className="h-1 w-96 bg-teal-blue-400 translate-y-3"></div>
        </div>
        <h4 className="text-slate-400 font-semibold">
          Hello my name is Johannes Bekele. I am a computer science student at
          Fordham University in my Junior Year. I currently reside in New York
          City and aspires to be a software engineer. I was born in Arbaminch,
          Ethiopia. We moved to Pelham, New York in 2014 due to a change in
          occupation for my father and remained there for 4 years. During this
          time, I developed a deep appreciation for computer science when I
          built my first PC to play video games. After my short time in New
          York, I moved back to Ethiopia for the remainder of my high school
          career. Now, five years later, I moved back to New York to pursue an
          undergraduate degree in computer science.
        </h4>
        <h4 className="text-slate-400 font-semibold">
          I was born in Arbaminch, Ethiopia. We moved to Pelham, New York in
          2014 due to a change in occupation for my father and remained there
          for 4 years. During this time, I developed a deep appreciation for
          computer science when I built my first PC to play video games. After
          my short time in New York, I moved back to Ethiopia for the remainder
          of my high school career. Now, five years later, I moved back to New
          York to pursue an undergraduate degree in computer science.
        </h4>
      </div>
    </div>
  );
};

export default Page;
