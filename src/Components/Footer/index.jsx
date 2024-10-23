import React from "react";
import { FooterImg } from "../../Assets";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className=" backdrop-blur-md w-full  h-[40vh] flex">
      <div className=" flex w-full h-full">
        <img src={FooterImg} className="h-full" alt="" />
        <div className="flex flex-col justify-center ">
          <p className="text-white text-xl font-bold">
            Made with ❤️ by{" "}
            <span className=" underline cursor-pointer">
              GNU/Linux Users' Group
            </span>
          </p>
          <p className="text-white text-xl font-bold">NIT Durgapur</p>
        </div>
      </div>
      <div className=" flex w-full justify-end gap-3">
        <div className=" mx-4 text-xl flex flex-col justify-center  gap-4">
          <p className=" font-bold text-2xl">Hackathon 2024</p>
          <p className=" cursor-pointer text-xl">Resorces</p>
          <p className=" cursor-pointer text-xl">Sponsors</p>
          <p className=" cursor-pointer text-xl">Contact Us</p>
        </div>
        <div className="flex flex-col justify-center  mx-5 gap-4">
          <p className=" font-bold text-2xl">Follow Us</p>
          <p className=" cursor-pointer text-xl">Facebook</p>
          <p className=" cursor-pointer text-xl">Instagram</p>
          <p className=" cursor-pointer text-xl">Youtube</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
