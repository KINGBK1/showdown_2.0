import React from "react";
import { dgplogo, FooterImg, glug, robot } from "../../Assets";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className=" backdrop-blur-md w-full  min-h-[35vh] pt-10 pb-5  relative mb-20 md:mb-0 border-t-1 border-white/20">
      <div className=" flex flex-col md:flex-row justify-between w-[90%] mx-auto relative   my-5">
        <div className=" flex flex-col gap-5 py-2 px-2 md:w-[30%]   h-full">
          <div className="flex gap-2  ">
            <img
              src={dgplogo}
              alt="NITDurgapur"
              className="w-16 h-16"
            />
            <div className=" flex flex-col">
              <p className="text-white text-xl font-bold mb-2">NIT Durgapur</p>
              <p className=" text-white/70 text-md ">
                Mahatma Gandhi Rd, A-Zone, Durgapur,
                 West Bengal, 713209
              </p>
            </div>
          </div>
          <div className="flex gap-2  ">
            <img
              src={glug}
              alt="GLUG"
              className="w-16 h-16"
            />
            <div className=" flex flex-col w-max">
              <p className="text-white text-xl font-bold mb-2">
                GNU/Linux Users' Group
              </p>
              <p className=" text-white/70 text-md text-wrap ">
                An Opensource Community based in NIT Durgapur, focused on
                promoting Opensource culture and providing resources to
                students.
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" flex   h-full">
          <div className="flex flex-col  ">
            <p className="text-white text-xl font-bold mb-2">Contacts</p>
            <p>
              <p>Suman Karmakar</p>
              <p>+91 9999999999</p>
            </p>
          </div>
        </div> */}
        <div className="w-[15%] only-show-on-large-screen">
          <img src={FooterImg} alt="robot" className=" " />
        </div>
        <div className=" flex flex-col md:flex-row md:justify-end  md:gap-3">
          <div className=" mx-4 text-lg md:text-xl flex flex-col min-w-52 md:items-center gap-2 my-4 md:my-0  md:gap-4">
            <p className=" font-bold text-2xl">Hackathon 2024</p>
            <a href="/problem-statements" className=" cursor-pointer text-lg md:text-xl">Problem Statements</a>
            <a href="/rules" className=" cursor-pointer text-lg md:text-xl">Rules</a>
            <a href="/schedule" className=" cursor-pointer text-lg md:text-xl">Schedule</a>
            <a href="/contact" className=" cursor-pointer text-lg md:text-xl">Contact Us</a>
          </div>
          <div className="flex flex-col min-w-52 md:items-center  my-4 md:my-0 mx-5 gap-4">
            <p className=" font-bold text-2xl">Follow Us</p>
            <a target="_blank" href="https://discord.gg/5nSsd6XADA" className=" cursor-pointer text-lg md:text-xl min-w-28 flex items-center gap-2">
              <FaDiscord color="blue" size={20} /> Discord
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/lugnitdgp/posts/?feedView=all" className=" cursor-pointer text-lg md:text-xl min-w-28 flex items-center gap-2">
              <FaLinkedin color="blue" size={20} /> Linkedin
            </a>
            <a target="_blank" href="https://www.instagram.com/nitdgplug/" className=" cursor-pointer text-lg md:text-xl min-w-28 flex items-center gap-2">
              <FaInstagram color="purple" size={20} /> Instagram
            </a>
            <a target="_blank" href="https://www.youtube.com/@GNULinuxUsersGroupNITDurgapur" className=" cursor-pointer text-lg md:text-xl min-w-28 flex items-center gap-2">
              <FaYoutube color="red" size={20} /> Youtube
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center  border-t-1 border-white/50 pt-4 mt-4">
        <p className=" text-white text-lg md:text-xl font-bold">
          Made with ❤️ by GNU/Linux Users' Group
        </p>
        {/* <p className=" text-white/50 text-md md:text-base font-bold">
          Copyright © {new Date().getFullYear()} GNU/Linux Users' Group
        </p> */}
      </div>
    </div>
  );
}

export default Footer;
