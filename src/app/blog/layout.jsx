import Header from "@/components/Homepage/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default layout;
