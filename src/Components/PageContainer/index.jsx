import React, { useEffect } from "react";
import { BG } from "../../Assets";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PageContainer({ children }) {
  useEffect(() => {
    function spark(event) {
      let i = document.createElement("i");
      i.style.left = event.pageX + "px";
      i.className = "i";
      i.style.top = event.pageY + "px";
      i.style.zIndex = "1000";
      i.style.transform = `scale(${Math.random() * 2 + 1})`;
      i.style.setProperty("--x", getRandomTransitionValue());
      i.style.setProperty("--y", getRandomTransitionValue());
      document.body.appendChild(i);
      setTimeout(() => {
        document.body.removeChild(i);
      }, 2000);
    }

    function getRandomTransitionValue() {
      return `${Math.random() * 400 - 200}px`;
    }

    document.addEventListener("mousemove", spark);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousemove", spark);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden ">
      {/* <div className="h-screen w-screen absolute top-0 left-0 z-[5] main-bg backdrop-blur-sm"></div> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageContainer;