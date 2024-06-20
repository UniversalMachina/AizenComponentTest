// GroupComponent1.js
import PropTypes from "prop-types";
import React from "react";

const GroupComponent1 = ({ className = "", heading, description }) => {
  return (
    <div
      className={`w-[417px] flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-[36px] text-customGray-1400 font-poppins mq450:gap-[30px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
          <b className="self-stretch relative mq450:text-[22px] mq900:text-[29px]">{heading}</b>
          <b className="w-[330px] relative text-[16px] leading-[261.6%] inline-block text-customGray-700 max-w-full">
            {description}
          </b>
        </div>
      </div>
      <button className="bg-customColor-300 hover:bg-customColor-200 cursor-pointer [border:none] pt-[22px] px-[39px] pb-[17.3px]  w-[244.8px] shadow-[0px_5.7px_5.74px_rgba(0,_0,_0,_0.25)] rounded-[104.72px] flex flex-row items-start justify-start box-border whitespace-nowrap ">
        {/* bg-customGray-700 hover:bg-customGray-800 */}
        <b className="flex-1 relative text-[25px] leading-[41px] font-poppins text-white text-center">
          Learn More
        </b>
      </button>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GroupComponent1;
