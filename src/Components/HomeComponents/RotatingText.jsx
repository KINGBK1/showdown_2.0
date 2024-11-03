import React from "react";
import Marquee from "react-fast-marquee";

function RotatingText() {
  return (
    <section className=" relative text-xl md:text-5xl flex bg-black">
      <Marquee autoFill={true} className=" py-5 rotating-text">
        SHOWDOWN 2024 ---- NIT DURGAPUR ---- GNU/LINUX USERS GROUP ----
      </Marquee>
    </section>
  );
}

export default RotatingText;
