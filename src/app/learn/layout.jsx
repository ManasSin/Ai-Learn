import MicrosoftNav from "@/components/LearnPage/MicrosoftNav";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <MicrosoftNav />
      {children}
    </>
  );
};

export default layout;
