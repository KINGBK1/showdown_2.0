import React from "react";
import PageContainer from "../Components/PageContainer";

import { timeline } from "../utils/helpers";
import { TimeLineCard } from "../Components/TimelineCard.jsx";

export const Schedule = () => {
  return (
    <PageContainer>
      <div>
        <div className="">
          <p className=" text-5xl text-center font-bold">
            Keep the <span className=" text-primaryPink">Dates</span>
          </p>
          <p className=" text-white/70 text-xl text-center">
            Get a quick look at the timeline of Showdown
          </p>
        </div>
        <div className=" flex h-[88vh] px-20 ">
          <div className="flex overflow-x-scroll relative mt-16">
            {timeline.map((obj, index) => (
              <div className="flex items-center">
                <TimeLineCard idx={index} obj={obj} />
                {index !== timeline.length - 1 && (
                  <div
                    className={`bg-zinc-300 h-[312px] w-[8px] ${
                      index % 2 !== 0
                        ? "rounded-br-md rounded-tl-md"
                        : " rounded-tr-md rounded-bl-md"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
