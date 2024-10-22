// import { Button } from "@nextui-org/react";

// import { MdPerson } from "react-icons/md";

// export default function Navbar({className}) {
//   return (
//     <nav className={`${className}  flex justify-between items-center h-20 bg-black p-3 z-50`}>
//       <MdPerson size={24} />
//       <div className=" flex gap-3">
//       {["About", "Rules", "Schedule", "Sponsors", ].map((ele) => (
//         <div key={ele} className=" text-white mx-8 cursor-pointer hover:underline">{ele}</div>
//       ))}
//       </div>
//       <div className="bg-pink-600 w-28 rounded-tr-lg rounded-bl-lg transition duration-300 ease-in-out hover:bg-blue-700">

//       <div className="bg-black w-8 h-1.5 mx-4 my-0"></div>
//       <Button variant="primary" className=" w-full  text-white text-center" >Register</Button>
//       <div className="bg-black w-8 h-1.5 ml-16 my-0"></div>
//       </div>
//     </nav>
//   );
// }
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { MdPerson } from "react-icons/md";

export default function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" flex justify-between items-center h-20 bg-black p-3 z-50">
      {/* Left Icon */}
      <div className="flex items-center">
        <MdPerson size={24} className="text-white" />
      </div>

      {/* Desktop Menu Items */}
      <div className="hidden md:flex gap-3">
        {["About", "Rules", "Schedule", "Sponsors"].map((ele) => (
          <div key={ele} className="text-white mx-8 cursor-pointer hover:underline">
            {ele}
          </div>
        ))}
      </div>

      {/* Register Button */}
      <div className="hidden  md:flex">
        
      <div className="bg-pink-600 w-28 rounded-tr-lg rounded-bl-lg before:ease relative overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">

       <div className="bg-black w-8 h-1.5 mx-4 my-0"></div>
       <Button variant="primary" className=" w-full  text-white text-center" >Register</Button>
       <div className="bg-black w-8 h-1.5 ml-16 my-0"></div>
      </div>
     </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
        <div className={`w-8 h-1 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-8 h-1 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-1 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>

      {/* Mobile Menu (visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-3 py-4 z-50">
          {["About", "Rules", "Schedule", "Sponsors"].map((ele) => (
            <div key={ele} className="text-white cursor-pointer hover:underline">
              {ele}
            </div>
          ))}
          {/* <Button variant="primary" className="w-1/2 text-white text-center mt-4">Register</Button> */}
          <div className="bg-pink-600 w-28 rounded-tr-lg rounded-bl-lg before:ease relative overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">

       <div className="bg-black w-8 h-1.5 mx-4 my-0"></div>
       <Button variant="primary" className=" w-full  text-white text-center" >Register</Button>
       <div className="bg-black w-8 h-1.5 ml-16 my-0"></div>
      </div>
        </div>
      )}
    </nav>
  );
}
