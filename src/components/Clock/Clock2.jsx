import React from "react";
import styles1 from "../../styles/styles.module.css";
import useClock from "../../hooks/useClock";

Clock2.propTypes = {};

function Clock2(props) {
  const time = useClock();
  return (
    <div className={styles1.error}>
      {time.clock}: {time.timeString}
    </div>
  );
}

export default Clock2;
