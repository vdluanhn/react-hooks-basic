import React from "react";
import useClock from "../../hooks/useClock";
import styles1 from "../../styles/styles.module.css";

// function formatDate(date) {
//   if (!date) return "";
//   const hours = `0${date.getHours()}`.slice(-2);
//   const minutes = `0${date.getMinutes()}`.slice(-2);
//   const seconds = `0${date.getSeconds()}`.slice(-2);
//   return `${hours}:${minutes}:${seconds}`;
// }
function Clock(props) {
  const time = useClock();
  //   const [timeString, setTimeString] = useState("");
  //   useEffect(() => {
  //     const clockInterval = setInterval(() => {
  //       const now = new Date();
  //       const newTimeString = formatDate(now);

  //       setTimeString(newTimeString);
  //       console.log(newTimeString);
  //     }, 1000);
  //     return () => {
  //       console.log("clean up clock");
  //       clearInterval(clockInterval);
  //     };
  //   }, []); //[] - chay dung 1 lan; null - chay moi lan render
  return (
    <div className={styles1.clockparent}>
      {time.clock}: {time.timeString}
    </div>
  );
}

Clock.propTypes = {};

export default Clock;
