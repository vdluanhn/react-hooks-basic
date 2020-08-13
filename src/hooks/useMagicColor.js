import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function randomColor(current) {
  const COLOR_LIST = ["red", "green", "yellow", "pink", "blue", "black"];
  const curIndex = COLOR_LIST.indexOf(current);
  console.log(curIndex + "-Mau: " + COLOR_LIST[curIndex]);
  let newIndex = curIndex;
  while (curIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  }
  return COLOR_LIST[newIndex];
}
function useMagicColor(props) {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("red");
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 500);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return { color: color };
}

useMagicColor.propTypes = {};

export default useMagicColor;
