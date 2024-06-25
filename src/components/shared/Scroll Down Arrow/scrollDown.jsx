import React from "react";
import "./style.css";

const ScrollDownArrow = ({ targetId }) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      onClick={handleClick}
      className="scroll-down arrows cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
    >
      <label className="mb-2 text-2xl">Scroll</label>
      <div className="arrow-container">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  );
};

export default ScrollDownArrow;
