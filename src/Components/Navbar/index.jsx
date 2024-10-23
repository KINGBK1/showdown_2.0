import { useState } from "react";
import { Button } from "@nextui-org/react";
import { MdPerson } from "react-icons/md";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { SecondaryButton } from "../Buttons/SecondaryButton";

export default function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" flex justify-between items-center h-20 backdrop-blur-md shadow-xl py-5 px-4 z-50">
      {/* Left Icon */}
      <div className="flex items-center">
        <MdPerson size={24} className="text-white" />
      </div>

      {/* Desktop Menu Items */}
      <div className="hidden md:flex gap-4">
        {["About", "Rules", "Schedule", "Sponsors", "Team" , "Contact"].map((ele) => (
          <a
            href={`${ele}`}
            key={ele}
            className="text-white mx-4 cursor-pointer hover:underline text-xl"
          >
            {ele}
          </a>
        ))}
      </div>

      {/* Register Button */}
      <div className="hidden  md:flex">
        <PrimaryButton>Register</PrimaryButton>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-8 h-1 bg-white transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      {/* Mobile Menu (visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-3 py-4 z-50">
          {["About", "Rules", "Schedule", "Sponsors"].map((ele) => (
            <div
              key={ele}
              className="text-white cursor-pointer hover:underline"
            >
              {ele}
            </div>
          ))}
          {/* <Button variant="primary" className="w-1/2 text-white text-center mt-4">Register</Button> */}
          <PrimaryButton>Register</PrimaryButton>
        </div>
      )}
    </nav>
  );
}
