import React from "react";

const Button = () => (
  <button type="button" className={`bttn py-4 px-5 font-poppins font-medium text-[16px] text-white`}>
    <span className="flex items-center gap-2">
      Get Started
      <i className="fa-solid fa-arrow-right"></i>
    </span>
  </button>
);

export default Button;
