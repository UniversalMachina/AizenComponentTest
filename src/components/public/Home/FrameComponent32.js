import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import GroupComponent from "./GroupComponent";

const FrameComponent32 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = [
    {
      header: "This Is a header 1",
      description:
        "Connect with prospects using tailored, interactive messages. Personalized engagement is key to success.",
    },
    {
      header: "This Is a header 2",
      description:
        "Engage with your audience uniquely. Personalized outreach drives better connections and results.",
    },
    {
      header: "This Is a header 3",
      description:
        "Interactive conversations foster better relationships. Customize your communication effectively.",
    },
    {
      header: "This Is a header 4",
      description:
        "Personalize your outreach to enhance interaction. Building meaningful connections has never been so easy.",
    },
];

  return (
    <animated.section
      ref={ref}
      style={springs}
      className="w-full flex flex-col items-start justify-start gap-[35px] py-[80px] max-w-full text-left text-[40px] text-white font-poppins mq900:gap-[17px]"
    >
      <div className="self-stretch bg-customColor-300 overflow-hidden flex flex-row items-start justify-between pt-[105.7px] pb-[50.7px] pr-[270px] pl-[296px] box-border max-w-full gap-[20px] text-center text-[28.5px] mq900:pl-[74px] mq900:pr-[67px] mq900:box-border mq1300:pl-[148px] mq1300:pr-[135px] mq1300:box-border mq1700:flex-wrap mq1700:justify-center">
        <div className="w-[523px] flex flex-col items-start justify-start gap-[78px] max-w-full mq450:gap-[19px] mq900:gap-[39px]">
          <GroupComponent
            header={contentData[0].header}
            description={contentData[0].description}
          />
          <GroupComponent
            header={contentData[1].header}
            description={contentData[1].description}
          />
        </div>
        <div className="w-[523px] flex flex-col items-start justify-start gap-[78px] max-w-full mq450:gap-[19px] mq900:gap-[39px]">
          <GroupComponent
            header={contentData[2].header}
            description={contentData[2].description}
          />
          <GroupComponent
            header={contentData[3].header}
            description={contentData[3].description}
          />
        </div>
      </div>
    </animated.section>
  );
};

export default FrameComponent32;
