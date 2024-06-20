import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import FrameComponent9 from "./FrameComponent9";
import EngagementItems from "./EngagementItems";

const FrameComponent27 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = [
    {
      title: "Reach Out",
      description:
        "Connect to new customers effortlessly. Connect to new customers effortlessly.",
    },
    {
      title: "Engage",
      description:
        "Send customized messages to captivate your audience. Send customized messages to captivate your audience.",
    },
    {
      title: "Build",
      description:
        "Forge lasting connections with regular interaction. Forge lasting connections with regular interaction.",
    },
    {
      title: "Expand",
      description:
        "Broaden your network using smart communication tools. Broaden your network using smart communication tools.",
    },
    {
      title: "Increase",
      description:
        "Boost your audience reach with precise strategies. Boost your audience reach with precise strategies.",
    },
    {
      title: "Improve",
      description:
        "Enhance user engagement with insightful content. Enhance user engagement with insightful content.",
    },
  ];
  return (
    <animated.div ref={ref} style={springs} className="py-[80px] w-full">
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[87px] pr-5 pl-[22px] box-border max-w-full text-[57.8px] text-customGray-1300">
        <div className="w-[686px] relative font-semibold inline-block shrink-0 max-w-full mq450:text-[35px] mq900:text-[46px] text-center">{`What Benefit Will You Get for this amazing `}</div>
      </div>
      <div
        className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full text-left text-[18.7px] text-white font-poppins`}
      >
        <div className="w-[1077.6px] flex flex-row flex-wrap items-start justify-start gap-[31.9px_63.4px] min-h-[658px] max-w-full mq450:gap-[16px] mq900:gap-[32px]">
          <EngagementItems
            title={contentData[0].title}
            description={contentData[0].description}
          />
          <EngagementItems
            title={contentData[1].title}
            description={contentData[1].description}
          />
          <EngagementItems
            title={contentData[2].title}
            description={contentData[2].description}
          />
          <EngagementItems
            title={contentData[3].title}
            description={contentData[3].description}
          />
          <EngagementItems
            title={contentData[4].title}
            description={contentData[4].description}
          />
          <EngagementItems
            title={contentData[5].title}
            description={contentData[5].description}
          />
        </div>
      </div>
    </animated.div>
  );
};

export default FrameComponent27;
