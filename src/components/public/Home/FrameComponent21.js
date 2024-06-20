// FrameComponent21.js
import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import GroupComponent1 from "./GroupComponent1";

const FrameComponent21 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = [
    {
      heading: "Engage with New Contacts",
      description:
        "Effortlessly reach out to new contacts whenever you need. Build connections with a simple interaction.",
    },
    {
      heading: "Expand Your Network",
      description:
        "Growing your network unlocks new opportunities and boosts professional growth. Connect to succeed.",
    },
    {
      heading: "Stay In Touch",
      description:
        "Keep close connections with important people. Stay updated and maintain key relationships.",
    },
  ];

  return (
    <animated.section
      ref={ref}
      style={springs}
      className="left-[0px] w-full overflow-hidden flex flex-row items-start justify-between pt-[141px] pb-[140.7px] pr-[165px] pl-[164px] box-border max-w-full gap-[20px] mq900:pl-[41px] mq900:pr-[41px] mq900:box-border mq1300:pl-[82px] mq1300:pr-[82px] mq1300:box-border mq1700:flex-wrap"
    >
      {contentData.map((data, index) => (
        <GroupComponent1
          key={index}
          heading={data.heading}
          description={data.description}
        />
      ))}
    </animated.section>
  );
};

export default FrameComponent21;
