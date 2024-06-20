import React from "react";
import { Link } from "react-router-dom";

const CustomContact = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[149.3px] pr-[85px] pl-[85.3px] shrink-0 text-center text-[14.9px] text-black font-poppins mq825:pt-[97px] mq825:pb-[97px] mq825:box-border mq450:gap-[27px_106.7px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:gap-[53px_106.7px] mq1275:pl-[42px] mq1275:pr-[42px] mq1275:box-border">
      <div className="w-[716.8px] flex flex-col items-start justify-start gap-[22.4px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[14.9px]">
          <div className="w-[63px] relative leading-[150%] font-semibold inline-block min-w-[63px] shrink-0">
            Welcome
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22.4px] shrink-0 text-left text-[52.3px]">
            <b className="self-stretch relative leading-[63px] mq825:text-[42px] mq825:leading-[50px] mq450:text-[31px] mq450:leading-[38px]">
              Contact Us Now
            </b>
            <div className="self-stretch relative text-[16px] leading-[150%]">
              We're here to assist you. Reach out to us for any inquiries or support.
            </div>
          </div>
        </div>
        <div className="w-[233.5px] flex flex-row items-start justify-start pt-[14.9px] pb-0 px-0 box-border gap-[14.9px]">
          <button className="cursor-pointer py-[11.2px] px-[21px] bg-black w-[97.8px] box-border flex flex-row items-center justify-center border-[0.9px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-[14.9px] leading-[150%] font-poppins text-white text-left inline-block min-w-[53px]">
              Contact
            </div>
          </button>
          <Link to="/about-us" className="no-underline">
            <button className="cursor-pointer py-[11.2px] px-[21px] bg-[transparent] flex-1 flex flex-row items-center justify-center border-[0.9px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-[14.9px] leading-[150%] font-poppins text-black text-left inline-block min-w-[76px] whitespace-nowrap">
                Learn More
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomContact;
