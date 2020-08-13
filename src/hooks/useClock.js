import React, { useState, useEffect } from "react";

function formatDate(date) {
  if (!date) return "";
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}
function useClock(props) {
  const i = props;
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
      //   console.log(newTimeString);
    }, 1000);
    return () => {
      console.log("clean up clock");
      clearInterval(clockInterval);
    };
  }, []); //[] - chay dung 1 lan; null - chay moi lan render
  return { timeString: timeString, clock: "Clock time" };
}
export default useClock;
