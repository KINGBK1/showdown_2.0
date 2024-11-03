import { useState } from "react";
import { Button } from "@nextui-org/react";
import { MdPerson } from "react-icons/md";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import { dgplogo, glug, Logo } from "../../Assets";
import { useNavigate } from "react-router-dom";

export default function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarItems =[
    "rules",
    "schedule",
    "problem-statements",
    "leaderboard",
    "contact",
  ]
  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  return (
    <nav className=" flex justify-between items-center h-20 backdrop-blur-md py-5 px-4 z-50 sticky top-0">
      <div className=" flex items-center px-4">
        <div className=" flex items-center border-r-1 border-white px-4 gap-4">
          <img
            src={dgplogo}
            alt="NITDurgapur"
            className="w-12 h-12 cursor-pointer "
            onClick={() => window.open("https://www.nitdgp.ac.in/", "_blank")}
          />
          <img
            src={glug}
            alt="GLUG"
            className="w-12 h-12 cursor-pointer "
            onClick={() => window.open("https://nitdgplug.org/", "_blank")}
          />
        </div>
        <img
          src={Logo}
          alt="Logo"
          className="w-20 h-20 cursor-pointer "
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Menu Items */}
      <div className="hidden md:flex gap-4">
        {navbarItems.map((ele) => (
          <div
            onClick={() => {
              navigate(`/${ele}`);
            }}
            key={ele}
            className="text-white mx-4 cursor-pointer hover:underline text-xl uppercase"
          >
            {ele.replace("-", " ")}
          </div>
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
          {navbarItems.map((ele) => (
            <div
              key={ele}
              className="text-white cursor-pointer capitalize hover:underline"
              onClick={() => {
                navigate(`/${ele}`);
              }}
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
