// /src/components/LearnMoreBox3.js
import PropTypes from "prop-types";
import React from "react";

const LearnMoreBox3 = ({ className = "", heading, description }) => {
  return (
    <div
      className={`flex-[0.831] shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[146px] pb-[65px] pr-[7px] pl-[41px] box-border relative gap-[31px] min-w-[253px] max-w-[284px] text-left text-[28.5px] text-black font-poppins mq450:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[18px] pl-0 gap-[20px]">
        <b className="relative inline-block min-w-[95px] mq450:text-[23px]">
          {heading}
        </b>
        <a className="[text-decoration:none] self-stretch relative text-[12px] font-bold text-[inherit]">
          {description}
        </a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 text-[15px] font-dm-sans">
        <b className="flex-1 relative text-customColor-300">{`Learn More >`}</b>
      </div>
      <img
        className="w-[59.1px] h-[63px] absolute !m-[0] top-[60px] left-[53px]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

LearnMoreBox3.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LearnMoreBox3;
