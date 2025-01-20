import React, { useEffect, useState } from "react";
import { getUnstopData } from "../../Routes/unstopData";
import { TiStopwatch } from "react-icons/ti";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoIosPeople, IoMdEye } from "react-icons/io";
import { MdNumbers } from "react-icons/md";

function Stats() {
  const [regCount, setRegCount] = useState(0);
  const [views, setViews] = useState(0);
  const [stats, setStats] = useState([
    {
      icon: <FaMoneyBillWave size={26} className="" />,
      title: "Prize Pool",
      number: "Rs. 20,000+",
    },
    {
      icon: <IoIosPeople size={35} className="" />,
      title: "Team Size",

      number: "1 - 4",
    },

    {
      icon: <TiStopwatch size={26} className="" />,
      title: "Duration",
      number: "12 Hours",
    },
  ]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = React.useCallback(async () => {
    const response = await getUnstopData();
    if (response.data.status === true) {
      console.log(response.data.competition);
      setRegCount(response.data.competition.registerCount);
      setViews(response.data.competition.viewsCount);
    }
  }, []);

  useEffect(() => {
    if (regCount !== 0 && views !== 0) {
      const newObj = [
        {
          icon: <MdNumbers size={35} className="" />,
          title: "Registrations",
          number: regCount + " +",
        },
        {
          icon: <IoMdEye size={35} className="" />,
          title: "Views",
          number: Math.floor(views / 1000) + "K +",
        },
      ];
      setStats((prev) => [...newObj, ...prev]);
    }
  }, [regCount, views]);

  return (
    <div className=" flex flex-col-reverse md:flex-row  gap-4 w-full min-h-[30vh] mx-auto  py-6 md:py-10 rounded-xl relative ">
      <div className=" w-full md:w-1/2 px-6  grid grid-cols-2   gap-4">
        {[...new Set(stats)].map((item, index) => (
          <div
            key={index}
            className={` flex flex-col glass-card w-full  py-5 px-4 ${
              index === 4 && " col-span-2"
            } `}
          >
            <p className=" text-white/80 text-center text-2xl my-2 flex items-center justify-center gap-2">
              {item.icon}
              {item.title}
            </p>
            <p className=" text-secondaryPink font-bold text-center text-3xl">
              {item.number}
            </p>
          </div>
        ))}
      </div>
      <div className=" w-full md:w-1/2 flex flex-col justify-center items-center gap-5 ">
        <p className=" text-5xl text-center font-bold">
          At a <span className=" text-primaryPink">Glance</span>
        </p>
        <p className=" text-white/70 text-xl text-center">
          Get a quick look at the impact and scale of Showdownn
        </p>
      </div>
    </div>
  );
}

export default Stats;
