import Link from "next/link";
import React from "react";

const Cards = () => {
  return (
    <Link href={"/learn"}>
      <article className="inline-grid h-fit grid-rows-[auto_1fr_auto]">
        <div className="inline-block">Title of Course</div>
        <div>
          <div className="w-full aspect-video bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col gap-2 my-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-light">Devops</p>
            </div>
            <div>
              <p className="text-sm font-light">100 mins</p>
            </div>
          </div>
          <p className="text-md font-bold">lession 1</p>
          <p className="font-light text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
            alias minus ullam beatae saepe nihil corporis numquam ex consequatur
            tenetur explicabo vel pariatur.
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Cards;
