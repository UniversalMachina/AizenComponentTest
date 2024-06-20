import React from "react";
import PropTypes from "prop-types";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const LearnMoreBox1 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();
  const contentData = {
    sectionTitle: "Connect with Ease",
    sectionSubtitle: "Effortlessly engage with others when you need to",
    boxTitle: "Streamlined Interaction",
    boxDetails: [
      {
        title: "Connect with Ease",
        subtitle: "Effortlessly engage with others when you need to",
      },
      {
        title: "Seamless Integration",
        subtitle: "Smoothly combine various services",
      },
      {
        title: "Enhanced Functionality",
        subtitle: "Boost productivity and efficiency",
      },
    ],
  };

  return (
    <animated.div
      ref={ref}
      style={springs}
      className="py-10 px-5 flex justify-center w-full"
    >
      {/* This div adds padding around the section */}
      <section
        className={`relative shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-white w-full max-w-[1156px] overflow-hidden flex flex-row items-end justify-between pt-[33px] pb-[94px] pr-[113px] pl-[114px] box-border gap-[20px] text-center text-[21.2px] text-customGray-1400 font-poppins mq1300:flex-wrap ${className}`}
      >
        <div className="w-[188px] flex flex-col items-start justify-start py-0 pr-[29px] pl-0 box-border gap-[10.5px]">
          <b className="self-stretch relative shrink-0 [debug_commit:69da668] mq450:text-[17px] text-customColor-300 ">
            {contentData.sectionTitle}
          </b>
          <b className="self-stretch relative text-[10.6px] text-customGray-700 shrink-0 [debug_commit:69da668]">
            {contentData.sectionSubtitle}
          </b>
        </div>
        <div className="w-[329px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.9px] box-border max-w-full text-left text-[18.6px]">
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
            <div className="h-[101.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.1px] box-border">
              <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-customGray-500" />
            </div>
            <div className="w-[272px] flex flex-col items-start justify-start gap-[39px]">
              <b className="relative ">{contentData.boxTitle}</b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-14 pl-[57px] text-center text-[21.2px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[10.5px]">
                  <b className="self-stretch relative shrink-0 [debug_commit:69da668] mq450:text-[17px] text-customColor-300 ">
                    {contentData.boxDetails[0].title}
                  </b>
                  <b className="self-stretch relative text-[10.6px] text-customGray-700 shrink-0 [debug_commit:69da668]">
                    {contentData.boxDetails[0].subtitle}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[108px] flex flex-col items-start justify-end pt-0 pb-2 pr-[3px] pl-0 box-border">
          <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-customGray-500" />
        </div>
        <div className="w-[158.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.9px] box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
            <b className="self-stretch relative shrink-0 [debug_commit:69da668] mq450:text-[17px] text-customColor-300 ">
              {contentData.boxDetails[1].title}
            </b>
            <b className="self-stretch relative text-[10.6px] text-customGray-700 shrink-0 [debug_commit:69da668]">
              {contentData.boxDetails[1].subtitle}
            </b>
          </div>
        </div>
      </section>
    </animated.div>
  );
};

LearnMoreBox1.propTypes = {
  className: PropTypes.string,
};

export default LearnMoreBox1;
