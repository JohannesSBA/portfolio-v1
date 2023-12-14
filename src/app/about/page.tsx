import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-1/4 flex justify-center">
        <Image
          src={"/johannes.jpeg"}
          alt={"johannes"}
          width={250}
          height={75}
        />
      </div>
      <div className=" w-1/4">
        <h1 className="py-4 font-semibold">The Short</h1>
        <h4>
          Johannes Bekele is a computer science student at Fordham University in
          his Junior Year. He currently resides in New York City and aspires to
          be a software engineer
        </h4>
      </div>
      <div className="w-1/4 items-start">
        <h1 className="py-4 font-semibold">The Long</h1>
        <h4>
          I was born in Arbaminch, Ethiopia. We moved to Pelham, New York in
          2014 due to change in occupation for my father and remained there for
          4 years. In this time I gained my deep found appreciation for computer
          science, when I build my first PC to play video games with. After my
          short time in New York, I moved back to Ethiopia for the remainder of
          my highschool carreer. Now, five years later, I moved back to New York
          in order to pursue an undergraduate degree in computer science.
        </h4>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};

export default page;
