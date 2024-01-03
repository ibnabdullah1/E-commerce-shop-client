import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("January 10, 2024 00:00:00 GMT+00:00");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateCountdown = () => {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor(
        (timeDifference % (60 * 60 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
    }
  };

  useEffect(() => {
    calculateCountdown();
    const intervalId = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" flex text-white uppercase justify-center items-center gap-4">
      <div>
        <p className="text-2xl">{countdown.days}</p>
        <p className="text-xs">Days</p>
      </div>
      <div>
        <p className="text-2xl">{countdown.hours}</p>
        <p className="text-xs">Hours</p>
      </div>
      <div>
        {" "}
        <p className="text-2xl">{countdown.minutes}</p>
        <p className="text-xs">Mins</p>
      </div>
      <div>
        <p className="text-2xl">{countdown.seconds}</p>
        <p className="text-xs">Secs </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
