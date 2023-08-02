import Image from "next/image";
import React from "react";
import { Flare } from "../Styles/Flare";
import Link from "next/link";
import Cards from "../Ui/Cards";

const CourseSection = () => {
  return (
    <div className="relative max-w-7xl w-full mx-auto my-12 py-6 px-8 flex flex-col items-center justify-evenly">
      <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  w-full gap-4">
        <h2 className="font-extrabold text-2xl text-gray-700 my-8">
          Learning Materials
        </h2>
      </section>
      {/* <Flare /> */}
      {/* cards for different courses */}
      {/* with grid of ( 1 - 2 - 3 ) */}
      {/* [repeat(auto-fill_70px)] */}
      <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  w-full gap-4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
    </div>
  );
};

export default CourseSection;
