import React from "react";

const sponsers = [
  { name: "Microsoft" },
  { name: "AWS" },
  { name: "Lamda" },
  { name: "Kubernetis" },
];

const SponserSection = () => {
  return (
    <div className="relative xl:max-w-6xl lg:max-w-3xl sm:max-w-lg max-w-full w-full mx-auto h-32 py-6 px-8 flex items-center justify-evenly bg-indigo-950 rounded-lg">
      {/* // <div className="w-full mx-[10vw] h-32 py-6 px-8 flex items-center justify-evenly bg-indigo-950 rounded-lg"> */}
      {sponsers.map((comps) => (
        <div key={comps} className="aspect-video flex items-center">
          <span className="text-xl font-bold text-gray-200">{comps.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SponserSection;
