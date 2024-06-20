import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent36 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    header: "WELCOME TO TESTAPP",
    subHeader: "OUR FEATURES",
    description:
      "Connect effortlessly with tailored messages and transform interactions. Try TestApp today!",
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className="w-full flex flex-col items-start justify-start max-w-full text-left text-[24px] font-poppins"
    >
      <footer className="self-stretch bg-customColor-350 overflow-hidden flex flex-row items-start justify-start pt-16 pb-[99.4px] pr-[94px] pl-[185px] box-border min-h-[889px] [row-gap:20px] max-w-full z-[3] text-left text-[128px] text-white font-poppins mq450:pl-5 mq450:box-border mq900:pl-[46px] mq900:pr-[23px] mq900:box-border mq1300:pl-[92px] mq1300:pr-[47px] mq1300:box-border mq1700:flex-wrap">
        <div className="w-[1029px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[1029px] max-w-full mq1700:flex-1 mq1700:min-w-full">
          <div className="w-[1385px] flex flex-col items-start justify-start gap-[88px] shrink-0 max-w-[135%] mq450:gap-[22px] mq900:gap-[44px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-semibold font-inherit mq450:text-[32px] mq450:leading-[61px] mq900:text-[51px] mq900:leading-[92px]">
                {contentData.header}
              </h1>
              <i className="w-[727px] relative text-[100px] leading-[120%] inline-block italic font-light max-w-full mq450:text-[30px] mq450:leading-[48px] mq900:text-[50px] mq900:leading-[72px]">
                {contentData.subHeader}
              </i>
            </div>
            <div className="w-[672px] relative text-[24px] font-semibold text-white inline-block max-w-full mq450:text-[19px]">
              {contentData.description}
            </div>
          </div>
        </div>
        <div className="h-[626px] w-[464px] relative bg-customGray-400 overflow-hidden shrink-0 [transform:_rotate(15.2deg)] min-w-[464px] max-w-full mq900:min-w-full mq1700:flex-1" />
      </footer>
    </animated.section>
  );
};

export default FrameComponent36;
