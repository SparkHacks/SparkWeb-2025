
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function useTimer(deadline, interval = SECOND) {
  const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan((_timespan) => _timespan - interval);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return {
    days: Math.max(Math.floor(timespan / DAY), 0),
    hours: Math.max(Math.floor((timespan / HOUR) % 24), 0),
    minutes: Math.max(Math.floor((timespan / MINUTE) % 60), 0),
    seconds: Math.max(Math.floor((timespan / SECOND) % 60), 0)
  };
}


export default function Information() {
  const { days, hours, minutes, seconds } = useTimer("2025-01-22UT14:00:00.000Z");

  return(

        <motion.div
        initial={{  opacity: 0, y:20 }}
        whileInView={{ opacity: 100, y:0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: .5  }}
        className="w-full flex flex-wrap items-center justify-center gap-4 mt-0 text-white">
          <div className="rounded-[26.812px] backdrop-blur h-[80px] w-[80px] border-white  flex justify-center items-center border-4 flex-col">
            <h1 className="text-2xl font-poppin">{days}</h1>
            <span className="text-md font-poppin">Days</span>
          </div>
          
          <div className="rounded-[26.812px] backdrop-blur border-white h-[80px] w-[80px]  flex justify-center items-center border-4 flex-col">
            <h1 className=" text-2xl font-poppin">{hours}</h1>
            <span className="text-md font-poppin">Hours</span>
          </div>
          <div className="rounded-[26.812px] backdrop-blur border-white  h-[80px] w-[80px]  flex justify-center items-center border-4 flex-col">
            <h1 className=" text-2xl font-poppin">{minutes}</h1>
            <span className=" text-md font-poppin">Minutes</span>
          </div>
          <div className="rounded-[26.812px] backdrop-blur h-[80px] w-[80px]  border-white flex justify-center items-center border-4 flex-col">
            <h1 className=" text-2xl font-poppin">{seconds}</h1>
            <span className="text-md font-poppin">Seconds</span>
          </div>
        </motion.div>
      
  )
}