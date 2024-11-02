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
    <div className=" md:min-h-[25vh] flex flex-col gap-5 justify-center items-center">
      <p className=" text-3xl md:text-5xl font-bold text-primaryPink">Hackthon Starts in</p>
      {timeLeft.days !== undefined ? (
        <div className=" flex items-center gap-5 md:text-3xl timer-text">
          <span>{timeLeft.days} <span className=" text-white/70">days</span> </span>
          <span>{timeLeft.hours} <span className=" text-white/70">hours</span> </span>
          <span>{timeLeft.minutes} <span className=" text-white/70">minutes</span> </span>
          <span>{timeLeft.seconds} <span className=" text-white/70">seconds</span> </span>
        </div>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
}

export default Timer;
