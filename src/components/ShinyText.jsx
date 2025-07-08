import React from "react";
import "./ShinyText.css";

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  highlightColor = "rgba(255,255,255,0.8)",
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{
        animationDuration,
        "--shiny-color": highlightColor,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
