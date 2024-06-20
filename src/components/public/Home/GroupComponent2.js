// /src/components/GroupComponent2.js
import React from "react";
import PropTypes from "prop-types";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
  useRotateInEffect,
} from "../../../hooks/useTransition";
import FrameComponent16 from "./FrameComponent16";
import LearnMoreBox3 from "./LearnMoreBox3";
import styles from "./GroupComponent2.module.css"; // Import the CSS module

const GroupComponent2 = ({ className = "" }) => {
  const { ref, springs } = useSlideInFromLeftEffect();

  const contentData = [
    {
      heading: "Heading 1",
      description:
        "Generate tailored messages effortlessly with our intuitive interface",
    },
    {
      heading: "Heading 2",
      description: "Enhance your connections and explore new avenues for success",
    },
    {
      heading: "Heading 3",
      description:
        "Engage with your audience seamlessly and stay ahead of the curve",
    },
    {
      heading: "Heading 4",
      description:
        "Acquire expertise from industry leaders and boost your business acumen",
    },
  ];

  return (
    <animated.section
      ref={ref}
      style={springs}
      className={`relative w-full flex flex-row items-start justify-center gap-[46px] py-[40px] max-w-full text-left text-[28.5px] text-black font-poppins mq1300:flex-wrap ${className}`}
    >
      {contentData.map((data, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? styles.bob : styles["bob-offset"]}
        >
          {index % 2 === 0 ? (
            <FrameComponent16
              heading={data.heading}
              description={data.description}
            />
          ) : (
            <LearnMoreBox3
              heading={data.heading}
              description={data.description}
            />
          )}
        </div>
      ))}
    </animated.section>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  contentData: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GroupComponent2;
