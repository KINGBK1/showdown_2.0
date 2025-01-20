import { Button } from "@nextui-org/react";
import React from "react";

export const SecondaryButton = ({ children }) => {
  return (
    <div className=" relative">
      <div className="bg-black rounded-tr-sm   rounded-bl-sm before:ease relative overflow-hidden border border-pink-500 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 px-3 py-1 rounded-xl">
        <Button
          onClick={() => {
            window.open(
              "https://discord.gg/5nSsd6XADA",
              "_blank"
            );
          }}
          variant="primary"
          className=" w-full  text-white text-center uppercase font-bold px-4 py-5"
        >
          {children}
        </Button>
      </div>
      {/* <div
          className=" w-12 h-1 bg-black border-b border-x border-primaryPink top-[-0.2px] rounded-b-md left-2 z-30 absolute "
        ></div>
        <div
          className="w-12 h-1 bg-black border-t border-x border-primaryPink bottom-2 rounded-t-md right-3 z-30 absolute "
        ></div> */}
    </div>
  );
};
