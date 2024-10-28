import React, { useState } from "react";
import PageContainer from "../Components/PageContainer";
import StatementCard from "../Components/StatementCard/StatementCard";
import { problemStatements } from "../utils/statements";

const ProblemStatements = () => {
  const themes = ["Healthcare", "Finance"];
  const [isActive, setIsActive] = useState(themes[0]);

//   console.log(problemStatements[isActive]);
  return (
    <PageContainer>
      <div className="flex flex-col mt-10">
        <div className="text-center mb-8">
          <p className="text-3xl md:text-5xl font-bold">
            Look at the <span className="text-primaryPink">Statements</span>
          </p>
          <p className="text-white/70 text-lg md:text-xl">
            Solve one of these problems of Showdown
          </p>
        </div>
        <div className=" p-10">
          <div className="w-full flex justify-center md:px-0">
            <div className="flex items-center justify-center backdrop-blur-sm border border-pink-900 border-b-0 bg-gray-200/5 h-16 md:h-24 w-full md:w-6/12 lg:w-2/12 rounded-t-3xl pt-2 px-2">
              {themes.map((theme, idx) => (
                <button
                  key={idx}
                  onClick={() => setIsActive(theme)}
                  className={`rounded-full text-sm md:text-xl h-10 md:h-full w-full flex justify-center items-center transition-colors duration-300 ease-in-out
          ${
            isActive === theme
              ? "bg-zinc-800 text-white"
              : "hover:text-gray-300"
          }`}
                >
                  <div>{theme}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-full">
            <div className="bg-gray-200/5 w-5/12 backdrop-blur-sm rounded-tl-xl border border-b-0 border-r-0 border-t-pink-900 border-l-pink-900 "></div>
            <div className="w-2/12  bg-gray-200/5 backdrop-blur-sm border border-b-0 border-l-0 border-r-0 border-t-pink-900 md:border-0"></div>

            <div className="bg-gray-200/5 w-5/12 backdrop-blur-sm border border-b-0 border-l-0 border-t-pink-900 border-r-pink-900"></div>
          </div>
          <div className="bg-gray-200/5 backdrop-blur-sm border border-t-0 border-pink-900">
            <div className="p-2 rounded-xl ">
              {problemStatements[isActive]?.map((statement, index) => (
                <StatementCard key={index} statement={statement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProblemStatements;
