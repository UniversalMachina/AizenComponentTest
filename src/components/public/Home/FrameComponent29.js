import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent29 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    mainTitle: "TestApp Overview",
    secondaryTitle: "Discover TestApp",
    contactTitle: "Get in Touch",
    contactEmail: "hello@testapp.com",
  };

  return (
    <animated.div ref={ref} style={springs} className="p-8 text-[70px]">
      <div className="self-stretch flex flex-col font-poppins items-start justify-start gap-[20px]">
        <div className="m-0 self-stretch relative text-inherit leading-[80px] font-extralight mq450:text-[2rem] mq450:leading-[3rem] mq900:text-[5rem] mq900:leading-[6rem]">
          {contentData.mainTitle}
        </div>
        <div className="m-0 mb-[200px] self-stretch relative text-inherit leading-[80px] font-extralight font-inherit text-[4rem] mq450:text-[2rem] mq450:leading-[3rem] mq900:text-[5rem] mq900:leading-[6rem]">
          {contentData.secondaryTitle}
        </div>
      </div>

      <div className="pb-[200px]">
        <h2 className="m-0 pb-[40px] w-[281px] relative text-[40px] leading-[80px] font-extralight font-inherit inline-block mq450:text-[24px] mq450:leading-[48px] mq900:text-[32px] mq900:leading-[64px]">
          {contentData.contactTitle}
        </h2>

        <div className="w-[683px] bg-white box-border overflow-hidden flex flex-row items-start justify-start pt-[19px] px-9 pb-3 max-w-full text-[40px] border-[1px] border-solid border-black">
          <div className="w-[482px] relative leading-[80px] font-extralight inline-block shrink-0 whitespace-nowrap max-w-full mq450:text-[24px] mq450:leading-[48px] mq900:text-[32px] mq900:leading-[64px]">
            {contentData.contactEmail}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default FrameComponent29;
