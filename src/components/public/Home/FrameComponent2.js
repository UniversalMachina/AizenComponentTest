import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    subHeader: "Enhance your workflow seamlessly",
    header: "TestApp: Transforming Your Workflow",
    frameComponents: [
      {
        title: "Core Functionalities",
        description:
          "Automate tasks and simplify your processes with our tailored solutions",
        points: [
          "Custom message responses",
          "Name processing",
          "PDF to text conversion",
        ],
      },
      {
        title: "Technologies We Utilize",
        description:
          "Leverage cutting-edge technologies to streamline your operations",
        points: [
          "Custom message responses",
          "Name processing",
          "PDF to text conversion",
        ],
      },
      {
        title: "Success Stories",
        description:
          "Discover how our clients have benefited from our innovative solutions",
        points: [
          "Custom message responses",
          "Name processing",
          "PDF to text conversion",
        ],
      },
    ],
  };

  return (
    <div className="flex justify-center py-[40px] w-full">
      <animated.section
        ref={ref}
        style={springs}
        className={`w-[1480px] flex flex-col items-start justify-start gap-[98px] max-w-full text-left text-[14px] text-customColor-300 font-poppins ${className}`}
      >
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center">
          <div className="w-[884px] flex flex-col items-start justify-start gap-[26px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
              <div className="w-[459px] relative leading-[17px] font-semibold inline-block shrink-0 max-w-full">
                {contentData.subHeader}
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-[58px] leading-[120%] font-semibold font-inherit mq450:text-[35px] mq450:leading-[42px] mq900:text-[46px] mq900:leading-[56px]">
              {contentData.header}
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[41px] box-border max-w-full gap-[20px] text-[28.5px] mq1300:flex-wrap mq1300:justify-center">
          {contentData.frameComponents.map((frame, index) => (
            <FrameComponent4
              key={index}
              title={frame.title}
              description={frame.description}
              points={frame.points}
            />
          ))}
        </div>
      </animated.section>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
