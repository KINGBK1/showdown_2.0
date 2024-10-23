import React from "react";
import { BG } from "../../Assets";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PageContainer({ children }) {
  return (
    <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden main-bg">
      <div className="h-screen w-screen absolute top-0 left-0 z-[5] main-bg"></div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageContainer;
