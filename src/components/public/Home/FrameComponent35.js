import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent35 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    title: "SERVICES",
    description:
      "Connect with new customers and interact with your leads personally. Make every interaction count.",
    stats: [
      { value: 33, label: "Clients" },
      { value: 33, label: "Projects" },
      { value: 33, label: "Awards" },
      { value: 33, label: "Years" },
    ],
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className="w-full flex flex-col items-start justify-start max-w-full text-left text-[24px] text-white font-poppins"
    >
      <div className="self-stretch bg-customColor-350 overflow-hidden flex flex-row items-start justify-start pt-[83px] pb-[190px] pr-[201px] pl-[185px] box-border gap-[156px] max-w-full z-[2] text-[128px] mq450:gap-[19px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-[39px] mq900:pl-[46px] mq900:pr-[50px] mq900:box-border mq1300:gap-[78px] mq1300:pl-[92px] mq1300:pr-[100px] mq1300:box-border mq1700:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[125px] min-w-[473px] max-w-full mq450:gap-[31px] mq900:gap-[62px] mq1300:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[38px] mq900:gap-[19px]">
            <b className="self-stretch relative leading-[154px] font-semibold mq450:text-[32px] mq450:leading-[61px] mq900:text-[51px] mq900:leading-[92px]">
              {contentData.title}
            </b>
            <i className="self-stretch relative text-[100px] leading-[120%] italic font-thin mq450:text-[30px] mq450:leading-[48px] mq900:text-[50px] mq900:leading-[72px]">
              {contentData.title}
            </i>
          </div>
          <div className="w-[672px] relative text-[24px] font-semibold text-white inline-block max-w-full mq450:text-[19px]">
            {contentData.description}
          </div>
        </div>
        <div className="w-[651px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[651px] max-w-full text-[105px] mq1300:min-w-full mq1700:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[69px] mq450:gap-[17px] mq900:gap-[34px]">
            {contentData.stats.slice(0, 2).map((stat, index) => (
              <div
                key={index}
                className="self-stretch flex flex-row items-start justify-start gap-[67px] mq450:gap-[17px] mq900:flex-wrap mq900:gap-[33px]"
              >
                <div className="flex-1 bg-customColor-300 overflow-hidden flex flex-col items-center justify-start pt-12 px-5 pb-[47px] box-border gap-[13px] min-w-[190px]">
                  <b className="w-[127.9px] relative leading-[120%] font-semibold inline-block mq450:text-[31px] mq450:leading-[50px] mq900:text-[52px] mq900:leading-[76px]">
                    {stat.value}
                  </b>
                  <div className="w-32 flex flex-row items-start justify-start py-0 px-3.5 box-border text-[24px]">
                    <b className="flex-1 relative leading-[29px] font-semibold mq450:text-[19px] mq450:leading-[23px]">
                      {stat.label}
                    </b>
                  </div>
                </div>
                <div className="flex-1 bg-customColor-300 overflow-hidden flex flex-col items-center justify-start pt-12 px-5 pb-[47px] box-border gap-[13px] min-w-[190px]">
                  <b className="w-[127.9px] relative leading-[120%] font-semibold inline-block mq450:text-[31px] mq450:leading-[50px] mq900:text-[52px] mq900:leading-[76px]">
                    {contentData.stats[index + 2].value}
                  </b>
                  <div className="w-32 flex flex-row items-start justify-start py-0 px-3.5 box-border text-[24px]">
                    <b className="flex-1 relative leading-[29px] font-semibold mq450:text-[19px] mq450:leading-[23px]">
                      {contentData.stats[index + 2].label}
                    </b>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default FrameComponent35;
