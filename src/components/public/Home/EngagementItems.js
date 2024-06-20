import PropTypes from "prop-types";
import React from "react";

const EngagementItems = ({ className = "", title, description }) => {
  return (
    <div
      className={`shadow-[0px_4px_12px_rgba(0,_0,_0,_0.25)] rounded-[19.48px] bg-customColor-300 border-customColor-200 overflow-hidden flex flex-col items-start justify-start pt-[37px] px-5 pb-[42px] gap-[25.1px] text-left text-[18.7px] text-white font-poppins border-[2.3px] border-solid ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pr-4 pl-[17px]">
        <div className="flex flex-col items-start justify-start gap-[17px]">
          <div className="relative font-medium">{title}</div>
          <div className="w-[200.3px] flex flex-row items-start justify-start py-0 px-[3px] box-border text-[11.7px] text-customGray-300">
            <div className="flex-1 relative leading-[150%] font-medium">
              {description.split('\n').map((line, index) => (
                <p className="m-0" key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <b className="w-[152.9px] relative text-[18.3px] leading-[21.2px] font-semibold text-center inline-block whitespace-nowrap">
        Learn More
      </b>
    </div>
  );
};

EngagementItems.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EngagementItems;
