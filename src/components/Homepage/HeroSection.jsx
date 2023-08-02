import React from "react";
import { Flare } from "../Styles/Flare";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 lg:px-8  z-0">
      <Flare />
      <div className="mx-auto max-w-2xl py-14 sm:py-20 lg:py-28">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Learn in the best way possible,{" "}
            <Link href="" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Learn with assistance
          </h1>
          <div className="flex items-center justify-between max-w-sm mx-auto mt-10">
            <h3 className="text-base font-light">
              We will guide your every click unit you learn what you actaully
              want to learn
            </h3>
          </div>
        </div>
      </div>
      {/* sm:top-[calc(100%-30rem)] top-[calc(100%-13rem)]*/}
      <Flare
        className={
          "sm:top-[calc(100%-30rem)] top-[calc(100%-13rem)] translate-x-3/4 translate-y-1/4"
        }
      />
    </div>
  );
};

export default HeroSection;
