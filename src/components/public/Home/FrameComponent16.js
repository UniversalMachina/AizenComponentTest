// /src/components/FrameComponent16.js
import { useMemo } from "react";
import PropTypes from "prop-types";
import React from "react";

const FrameComponent16 = ({
  className = "",
  learnMoreMargin,
  learnMoreTextDecoration,
  heading,
  description
}) => {
  const reachOutToStyle = useMemo(() => {
    return {
      margin: learnMoreMargin,
      textDecoration: learnMoreTextDecoration,
    };
  }, [learnMoreMargin, learnMoreTextDecoration]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[256px] max-w-[284px] text-left text-[28.5px] text-black font-poppins ${className}`}
    >
      <div className="self-stretch shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[146px] pb-[65px] pr-[7px] pl-[41px] relative gap-[31px]">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[18px] pl-0 gap-[20px]">
          <b className="relative inline-block min-w-[95px] mq450:text-[23px]">
            {heading}
          </b>
          <p
            className="m-0 self-stretch relative text-[12px] font-bold"
            style={reachOutToStyle}
          >
            {description}
          </p>
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
    </div>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
  learnMoreMargin: PropTypes.string,
  learnMoreTextDecoration: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FrameComponent16;
