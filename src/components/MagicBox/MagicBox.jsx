import React from "react";
import useMagicColor from "../../hooks/useMagicColor";
import "../../styles/style.css";

function MagicBox() {
  const color = useMagicColor();
  return (
    <div className="magicbox" style={{ backgroundColor: color.color }}></div>
  );
}

MagicBox.propTypes = {};

export default MagicBox;
