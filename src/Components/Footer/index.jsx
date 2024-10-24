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
    <div className=" backdrop-blur-md w-full  h-[30vh] pt-10 flex relative">
      <div className=" flex w-full h-full">
        <img src={FooterImg} className="h-full" alt="" />
        <div className="flex flex-col  ">
          <p className="text-white text-xl font-bold mb-2">NIT Durgapur</p>
          <p>Mahatma Gandhi Rd, A-Zone, Durgapur,<br /> West Bengal, 713209</p>
        </div>
      </div>
      <div className=" flex w-full justify-end  gap-3">
        <div className=" mx-4 text-xl flex flex-col min-w-52 items-center  gap-4">
          <p className=" font-bold text-2xl">Hackathon 2024</p>
          <p className=" cursor-pointer text-xl">Resorces</p>
          <p className=" cursor-pointer text-xl">Sponsors</p>
          <p className=" cursor-pointer text-xl">Contact Us</p>
        </div>
        <div className="flex flex-col min-w-52 items-center  mx-5 gap-4">
          <p className=" font-bold text-2xl">Follow Us</p>
          <p className=" cursor-pointer text-xl flex items-center gap-2">
            <FaFacebook color="blue" size={20} /> Facebook
          </p>
          <p className=" cursor-pointer text-xl flex items-center gap-2">
            <FaLinkedin color="blue" size={20} /> Linkedin
          </p>
          <p className=" cursor-pointer text-xl flex items-center gap-2">
            <FaInstagram color="purple" size={20} /> Instagram
          </p>
          <p className=" cursor-pointer text-xl flex items-center gap-2">
            <FaYoutube color="red" size={20} /> Youtube
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center  gap-3 absolute bottom-0 mb-4">
        <p className=" text-white text-xl font-bold">
          Made with ❤️ by GNU/Linux Users' Group
        </p>
      </div>
    </div>
  );
}

export default Footer;
