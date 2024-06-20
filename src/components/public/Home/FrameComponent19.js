import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent19 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    heading:
      "Effortless Payment Options for Your Convenience",
    description:
      "Experience the flexibility of paying over time with our monthly financing plans tailored to suit your needs. Manage your finances easily and ensure seamless accessibility. Transform the way you handle payments with our user-friendly options.",
    buttonText: "Learn More",
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className="bg-customGray-200 w-full overflow-hidden flex flex-col items-start justify-start pt-[93px] px-[156px] pb-[152px] box-border gap-[52px] max-w-full text-left text-[40.1px] text-customGray-1300 font-fira-sans-condensed mq900:gap-[26px] mq900:pl-[39px] mq900:pr-[39px] mq900:box-border mq1300:pl-[78px] mq1300:pr-[78px] mq1300:box-border"
    >
      <div className="w-[693px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[38px] max-w-full mq900:gap-[19px]">
          <b className="self-stretch relative leading-[60.09px] mq450:text-[24px] mq450:leading-[36px] mq900:text-[32px] mq900:leading-[48px]">
            {contentData.heading}
          </b>
          <p className="m-0 self-stretch relative text-[14px] leading-[32px] font-bold">
            {contentData.description}
          </p>
        </div>
      </div>
      <button className="bg-customColor-300 hover:bg-customColor-200 cursor-pointer [border:none] pt-5 px-[51px] pb-[17px] w-[236px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[73px] flex flex-row items-start justify-start box-border whitespace-nowrap">
        <b className="flex-1 relative text-[20px] leading-[32px] font-bold font-poppins text-white text-center">
          {contentData.buttonText}
        </b>
      </button>
    </animated.section>
  );
};

export default FrameComponent19;
