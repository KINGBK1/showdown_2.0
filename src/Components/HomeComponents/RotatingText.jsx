import React from "react";
import Marquee from "react-fast-marquee";

function RotatingText() {
  return (
    <section className=" relative text-xl md:text-5xl flex bg-black">
      <Marquee autoFill={true} className=" py-5 rotating-text">
        SHOWDOWNN  ---- NIT DURGAPUR ---- GNU/LINUX USERS' GROUP ---- 
      </Marquee>
    </section>
  );
}

export default RotatingText;
