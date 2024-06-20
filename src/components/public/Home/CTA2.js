import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const contentData = {
  title: "Get Started Today",
  description:
    "Streamline your processes",
};

const CTA2 = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-end pt-[109px] pb-[108.7px] pr-[85.4px] pl-[85.3px] box-border min-h-[390px] shrink-0 [debug_commit:f6aba90] text-left text-[40px] text-black font-Roboto mq925:gap-[27px_106.7px] mq925:pl-[21px] mq925:pr-[21px] mq925:box-border mq1350:gap-[53px_106.7px] mq1350:pl-[42px] mq1350:pr-[42px] mq1350:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-between max-w-full gap-[20px] mq1825:justify-center">
        <div className="w-[1280.3px] flex flex-col items-start justify-start max-w-full mq925:gap-[16px_32px]">
          <div className="w-[1024px] flex flex-col items-start justify-start gap-[32px] max-w-full mq925:gap-[16px_32px]">
            <h1 className="m-0 self-stretch h-16 relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-[24px] mq450:leading-[29px] mq925:text-[32px] mq925:leading-[38px]">
              {contentData.title}
            </h1>
            <div className="self-stretch h-9 relative text-[18px] leading-[150%] inline-block">
              {contentData.description}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-5 px-0 box-border gap-[21.3px] max-w-full mq450:flex-wrap">
          <Link to="/about-us">
            <button className="cursor-pointer py-4 px-[31px] bg-black flex flex-row items-center justify-center whitespace-nowrap border-[1.3px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-[21.3px] leading-[32px] font-Roboto text-white text-left inline-block min-w-[108px]">
                Learn More
              </div>
            </button>
          </Link>

          <button className="cursor-pointer py-4 px-[31px] bg-[transparent] flex flex-row items-center justify-center border-[1.3px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-[21.3px] leading-[32px] font-Roboto text-black text-left inline-block min-w-[105px] mq450:text-[17px] mq450:leading-[26px]">
              Contact Us
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA2;
