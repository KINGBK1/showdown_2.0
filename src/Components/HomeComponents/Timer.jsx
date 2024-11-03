import React, { useEffect, useState } from "react";

function Timer({ targetDate }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className=" md:min-h-[20vh] flex flex-col gap-5 justify-center items-center timer">
      <p className=" text-3xl font-bold  text-primaryPink mb-3
      ">Hackthon Starts in</p>
      {timeLeft.days !== undefined ? (
        <div className=" flex items-center gap-6 md:text-3xl timer-text">
          <span className=" flex flex-col gap-3">{timeLeft.days} <span className=" text-white/70">days</span> </span>
          <span className=" flex flex-col gap-3">{timeLeft.hours} <span className=" text-white/70">hours</span> </span>
          <span className=" flex flex-col gap-3">{timeLeft.minutes} <span className=" text-white/70">minutes</span> </span>
          <span className=" flex flex-col gap-3">{timeLeft.seconds} <span className=" text-white/70">seconds</span> </span>
        </div>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
}

export default Timer;
