import { Button } from "@nextui-org/react";
import React from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <div className=" relative">
      <div className="bg-primaryPink w-36  rounded-tr-sm rounded-bl-sm before:ease relative overflow-hidden border border-pink-500 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
        <Button
          onClick={() => {
            window.open(
              "https://unstop.com/p/showdownn-gnulinux-users-group-nit-durgapur-1225647",
              "_blank"
            );
          }}
          variant="primary"
          className=" w-full my-1  text-white text-lg text-center uppercase font-bold"
        >
          {children}
        </Button>
      </div>
      <div className="w-12 h-1.5 bg-black border-b border-x border-primaryPink top-[-0.2px] rounded-b-md left-2 z-30 absolute "></div>
      <div className=" w-12 h-1.5 bg-black border-t border-x border-primaryPink bottom-[-0.2px] rounded-t-md right-3 z-30 absolute "></div>
    </div>
  );
};
