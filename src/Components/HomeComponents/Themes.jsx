import React from "react";
import { useNavigate } from "react-router-dom";
import { themes } from "../../utils/helpers";
import { MdArrowForwardIos } from "react-icons/md";

function Themes() {
  const navigate = useNavigate();

  const goToTheme = (theme) => {
    console.log(theme)
    navigate(`/problem-statements/${theme}`);
  };
  return (
    <div className=" flex flex-col gap-4 w-[90vw] mx-auto mt-5  min-h-[60vh] relative my-5">
      <p className=" text-5xl text-center font-bold">
        <span className=" text-primaryPink">Themes</span>
      </p>
      <p className=" text-white/70 text-xl text-center">
        Explore the diverse themes that await you at Showdownn
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        {themes.map((item, index) => (
          <div
            key={index}
            className="relative w-full md:w-3/5 mx-auto px-3 py-4 h-[20rem] z-10  bg-cover bg-center group  shadow-lg overflow-hidden rounded-xl "
            onClick={()=>{goToTheme(themes[index].title)}}
          >
            <div
              className=" w-full h-full bg-black/60 absolute top-0 left-0 z-0 rounded-xl"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className=" w-full h-full absolute top-0 left-0 z-20 bg-black/90 hover:bg-black/80 transition-all ease-linear duration-500 cursor-pointer rounded-xl">
              <div className=" w-4/5 mx-auto justify-center items-center h-full flex flex-col gap-4">
                <h2 className="text-4xl font-bold">{item.title}</h2>
                <p className="mt-2">{item.subtitle}</p>
                <div className=" w-full flex justify-end gap-3 text-primaryPink items-center mt-3">
                  EXPLORE <MdArrowForwardIos className=" text-lg" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Themes;
