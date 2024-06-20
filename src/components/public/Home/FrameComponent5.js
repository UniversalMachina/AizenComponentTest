import React from "react";
import PropTypes from "prop-types";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent5 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    subTitle: "Empowering Your Business with Intelligent Solutions",
    mainTitle: "Welcome to TestApp Home",
};

  return (
    <animated.section
      ref={ref}
      style={springs}
      className={`w-full flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-[40px] text-white font-poppins mq900:gap-[17px] ${className}`}
    >
      <div className="self-stretch bg-customColor-300 overflow-hidden flex flex-row items-start justify-end pt-[89px] px-[91px] pb-0 box-border relative max-w-full mq900:pl-[22px] mq900:pr-[22px] mq900:box-border mq1300:pl-[45px] mq1300:pr-[45px] mq1300:box-border">
        <div className="w-[1060px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-14 pb-[563px] pr-5 pl-20 gap-[50px] max-w-full z-[1] border-[1px] border-solid border-white mq900:gap-[25px] mq1300:pl-10 mq1300:box-border">
          <h2 className="m-0 w-[482px] relative text-inherit leading-[80px] font-light font-inherit inline-block max-w-full mq450:text-[24px] mq450:leading-[48px] mq900:text-[32px] mq900:leading-[64px]">
            {contentData.subTitle}
          </h2>
          <h1 className="m-0 w-[857px] relative text-[128px] leading-[117px] font-light font-roboto-slab inline-block max-w-full mq450:text-[32px] mq450:leading-[47px] mq900:text-[51px] mq900:leading-[70px]">
            {contentData.mainTitle}
          </h1>
        </div>
      </div>
    </animated.section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
