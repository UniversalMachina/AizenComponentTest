import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import FrameComponent6 from "./FrameComponent6";

const FrameComponent33 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    title: "WORK EXPERIENCE",
    experiences: [
      {
        header: "Prompt Handler",
        descriptionLines: [
          "Interact with users via personalized prompts.",
          "Tailor responses based on user input.",
          "Enhance user engagement effectively.",
        ],
      },
      {
        header: "Name Processor",
        descriptionLines: [
          "Input first names to retrieve last names.",
          "Provide accurate surname suggestions.",
          "Streamline name matching processes.",
        ],
      },
      {
        header: "PDF to Text Converter",
        descriptionLines: [
          "Upload PDFs to extract plain text.",
          "Ensure text accuracy and clarity.",
          "Facilitate easy document parsing.",
        ],
      },
    ],
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className="w-full flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-[40px] text-white font-poppins mq900:gap-[17px] pt-[60px]"
    >
      <div className="w-[1087px] flex flex-row items-start justify-center pt-0 px-5 pb-[107px] box-border max-w-full text-[128px] text-customColor-300">
        <h1 className="m-0 w-[833px] relative text-inherit leading-[90%] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-[32px] mq450:leading-[46px] mq900:text-[51px] mq900:leading-[69px]">
          {contentData.title}
        </h1>
      </div>
      <div className="w-[1395px] flex flex-row items-start justify-center pt-0 px-5 pb-[81px] box-border max-w-full text-[36px] text-customColor-300">
        <div className="w-[1141px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1300:flex-wrap mq1300:justify-center">
          <FrameComponent6 {...contentData.experiences[0]} />
          <FrameComponent6 {...contentData.experiences[1]} />
        </div>
      </div>
    </animated.section>
  );
};

export default FrameComponent33;
