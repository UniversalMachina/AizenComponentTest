import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import LearnMoreBox2 from "./LearnMoreBox2";
import PropTypes from "prop-types";

const FrameComponent14 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    box1: {
      title: "Prompt Insights",
      description:
        "Effortlessly generate personalized messages based on user prompts. Enhance engagement like never before!",
    },
    box2: {
      title: "Name Transformation",
      description:
        "Transform any name into a complete identity. Seamlessly convert first names to last names.",
    },
    box3: {
      title: "PDF to Text",
      description:
        "Convert your PDFs into editable text. Simplify data extraction and streamline your processes.",
    },
    box4: {
      title: "Prompt Insights",
      description:
        "Effortlessly generate personalized messages based on user prompts. Enhance engagement like never before!",
    },
    box5: {
      title: "Name Transformation",
      description:
        "Transform any name into a complete identity. Seamlessly convert first names to last names.",
    },
    box6: {
      title: "PDF to Text",
      description:
        "Convert your PDFs into editable text. Simplify data extraction and streamline your processes.",
    },
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className={`relative w-full flex flex-col items-center justify-start gap-[88px] max-w-full text-left text-[80px] text-customGray-1300 font-fira-sans-condensed mq900:gap-[22px] mq1300:gap-[44px] ${className}`}
    >
      <div className="w-full flex flex-row items-start justify-center py-[50px] pr-[23px] pl-5 box-border max-w-full text-[18.6px] text-black font-poppins">
        <div className="w-full max-w-[1169px] flex flex-col items-center justify-start gap-[33px] mq900:gap-[16px]">
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[43px] mq900:gap-[21px]">
            <LearnMoreBox2 {...contentData.box1} />
            <LearnMoreBox2 {...contentData.box2} />
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[43px] mq900:gap-[21px]">
            <LearnMoreBox2 {...contentData.box3} />
            <LearnMoreBox2 {...contentData.box4} />
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[43px] mq900:gap-[21px]">
            <LearnMoreBox2 {...contentData.box5} />
            <LearnMoreBox2 {...contentData.box6} />
          </div>
        </div>
      </div>
    </animated.section>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;
