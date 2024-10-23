import React from "react";
import { HomeLeft, HomeLeft2, HomeLeft3 } from "../../Assets";

const Card = ({ title, imgSrc, rotation, zIndex, extraClasses }) => {
  return (
    <div
      className={`relative p-4 w-64 h-80 rounded-xl bg-gray-800 shadow-2xl transform ${rotation} z-${zIndex} ${extraClasses} 
                  transition-transform hover:scale-105 hover:rotate-0 shadow-2xl`}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Whitish Blur Effect */}
      {/* <div className="absolute inset-0 bg-white opacity-20 blur-2xl rounded-xl"></div> */}
      
      {/* Card Content */}
      <div className="absolute bottom-4 left-4 text-white bg-opacity-70 bg-black p-2 rounded">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </div>
  );
};

const CardStack = () => {
  return (
    <div className="relative flex items-center justify-center mt-16">
      {/* Card 1 */}
      <Card
        title="Cloud Computing Economy"
        imgSrc={HomeLeft}
        rotation="-rotate-6"
        zIndex="10"
        extraClasses="-ml-8"
      />
      {/* Card 2 */}
      <Card
        title="Gaming Revolution"
        imgSrc={HomeLeft2}
        rotation="-rotate-3"
        zIndex="20"
        extraClasses="-ml-24"
      />
      {/* Card 3 */}
      <Card
        title="Future of Experiences"
        imgSrc={HomeLeft3}
        rotation="rotate-3"
        zIndex="30"
        extraClasses="-ml-16"
      />
    </div>
  );
};

export default CardStack;
