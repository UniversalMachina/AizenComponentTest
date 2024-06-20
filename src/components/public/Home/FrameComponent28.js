import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import Container1 from "./Container1";

const FrameComponent28 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    title: "TestApp: Your Smart SaaS Solution",
    mainDescription: "Harnessing AI for seamless tasks",
    subDescriptions: [
      "Convert prompts into insights",
      "Transform names into identities",
      "Extract text from PDFs effortlessly",
    ],
};

  return (
    <animated.div ref={ref} style={springs} className="py-[80px]">
      <div
        className={`w-[1920px] flex flex-row items-start justify-center px-[120px] py-[80px] box-border max-w-full text-left text-[21.3px] text-white font-body-base-regular`}
      >
<div className="w-full flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1300:flex-wrap">
  <div className="h-[519px] flex-1 relative rounded-tl-[20px] rounded-tr-none rounded-br-none rounded-bl-[20px] bg-customGray-300 min-w-[563px] max-w-full z-[1] mq900:min-w-full" />
  <div className="w-[617px] rounded-tl-none rounded-tr-[19px] rounded-br-[115px] rounded-bl-none bg-customColor-300 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[83px] px-[85px] pb-9 box-border gap-[39px] min-w-[617px] max-w-full mq900:min-w-full mq1300:flex-1">
    {/* bg-customGray-1400 */}
    <div className="w-[736px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[11px] max-w-[165%] shrink-0">
      <div className="self-stretch relative leading-[160%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq450:text-[17px] mq450:leading-[27px]">
        {contentData.mainDescription}
      </div>
      <div className="w-[447px] relative text-[28px] font-semibold font-poppins inline-block max-w-full mq450:text-[22px]">
        {contentData.title}
      </div>
    </div>
    <div className="w-[377px] flex flex-row items-start justify-start py-0 px-[33px] box-border max-w-full">
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
        <div className="w-[478px] relative leading-[160%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq450:text-[17px] mq450:leading-[27px]">
          {contentData.subDescriptions[0]}
        </div>
        <div className="w-[458px] flex flex-row items-start justify-start gap-[13.3px]">
          <div className="hidden flex-row items-center justify-start pt-[5.3px] px-0 pb-0">
            <img
              className="h-[26.7px] w-[26.7px] relative object-cover"
              alt=""
              src="/iconai@2x.png"
            />
          </div>
          <div className="flex-1 relative leading-[160%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq450:text-[17px] mq450:leading-[27px]">
            {contentData.subDescriptions[1]}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[13.3px]">
          <div className="hidden flex-row items-center justify-start pt-[5.3px] px-0 pb-0">
            <img
              className="h-[26.7px] w-[26.7px] relative object-cover"
              alt=""
              src="/iconai@2x.png"
              />
          </div>
          <div className="flex-1 relative leading-[160%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq450:text-[17px] mq450:leading-[27px]">
            {contentData.subDescriptions[2]}
          </div>
        </div>
      </div>
    </div>
    <button className="cursor-pointer bg-customColor-200 hover:bg-customColor-150 [border:none] pt-[18px] pb-[15px] pr-[31px] pl-[33px] w-[201px] shadow-[0px_4.7px_4.71px_rgba(0,_0,_0,_0.25)] rounded-[85.99px] flex flex-row items-start justify-center box-border whitespace-nowrap">
      {/* bg-customGray-700 hover:bg-customGray-800 */}
      <b className="flex-1 relative text-[20.5px] leading-[33px] font-poppins text-white text-center">
        Learn More
      </b>
    </button>
  </div>
</div>

                    
      </div>
    </animated.div>
  );
};

export default FrameComponent28;
