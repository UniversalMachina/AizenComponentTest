import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Adjusting the contentData for the new testimonial structure
const contentData = {
  testimonial:
    "TestApp has revolutionized our workflow with its intuitive solutions. The efficiency and ease of use are unparalleled.",
  person: {
    name: "John Smith",
    title: "CTO, Tech Innovators",
    imageSrc: "/avatar-image@2x.png",
  },
  companyLogo: "/logo2-colordark1.svg",
  ratingImages: [
    "/vector.svg",
    "/vector-1.svg",
    "/vector-2.svg",
    "/vector-3.svg",
    "/vector-4.svg",
  ],
};


const Testimonial1 = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-center pt-[149.4px] px-5 pb-[149.2px] shrink-0 [debug_commit:f6aba90] text-center text-[28.8px] text-black font-Roboto mq925:gap-[106.7px_27px] mq925:pt-[97px] mq925:pb-[97px] mq925:box-border mq1350:gap-[106.7px_53px]">
      <div className="w-[921.6px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[38.4px] max-w-full mq450:gap-[19px_38.4px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="h-[22.7px] overflow-hidden flex flex-row items-start justify-start gap-[4.8px]">
            {contentData.ratingImages.map((src, index) => (
              <img
                key={index}
                className="h-[22.7px] w-6 relative min-h-[23px]"
                loading="lazy"
                alt=""
                src={src}
              />
            ))}
          </div>
        </div>
        <b className="self-stretch relative leading-[140%] mq450:text-[23px] mq450:leading-[32px]">
          {contentData.testimonial}
        </b>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-[18px]i-2">
          <div className="w-[477.2px] flex flex-row flex-wrap items-start justify-center gap-[23.6px] max-w-full">
            <div className="h-[70.2px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <img
                className="w-[67.2px] h-[67.2px] relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src={contentData.person.imageSrc}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[7.6px] px-0 pb-0 box-border min-w-[110px] shrink-0">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[29px] font-semibold inline-block min-w-[82px]">
                  {contentData.person.name}
                </div>
                <div className="relative leading-[29px]">
                  {contentData.person.title}
                </div>
              </div>
            </div>
            <div className="h-[74.4px] w-[1.2px] relative box-border border-r-[1.2px] border-solid border-black mq450:w-full mq450:h-[1.2px]" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[109px] shrink-0">
              <img
                className="self-stretch h-[67.2px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={contentData.companyLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;
