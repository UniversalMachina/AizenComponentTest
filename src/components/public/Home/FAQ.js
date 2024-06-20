import React, { useState, useEffect } from "react";
import axios from "axios";

const contentData = [
  {
    title: "What Does TestApp Do?",
    body: "TestApp is a powerful SaaS platform that simplifies your tasks. Use our intuitive tools to generate messages, derive last names from first names, and convert PDFs to text effortlessly.",
  },
  {
    title: "How Does It Work?",
    body: "TestApp’s user-friendly interface requires minimal effort. Input a prompt or a name, and get instant results. Transform your PDFs to editable text in just a few clicks.",
  },
  {
    title: "Who Can Benefit?",
    body: "Whether a professional or a casual user, TestApp caters to all. Our solutions enhance productivity and are designed for seamless integration into any workflow.",
  },
  {
    title: "What Are The Advantages?",
    body: "Experience convenience and efficiency with TestApp. Save time by turning prompts into messages, extracting last names, and converting documents quickly.",
  },
  {
    title: "How To Get Started?",
    body: "Getting started with TestApp is easy. Sign up, and start using our features immediately. Enjoy the simplicity and effectiveness of our SaaS solutions.",
  },
];


const FAQ = () => {
  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-center pt-[149.3px] px-5 pb-[149.4px] box-border max-w-full shrink-0 text-left text-[51.2px] text-black font-roboto lg:pt-[97px] lg:pb-[97px] lg:box-border mq450:gap-[27px 106.7px] mq825:gap-[53px 106.7px] mq825:pt-[63px] mq825:pb-[63px] mq825:box-border">
      <div className="w-[1399.5px] flex flex-row items-start justify-start gap-[85.3px] max-w-full lg:flex-wrap mq450:gap-[85.3px 21px] mq825:gap-[85.3px 43px]">
        <div className="w-[533.3px] flex flex-col items-start justify-start gap-[34.1px] min-w-[533.3px] max-w-full lg:flex-1 mq825:gap-[17px_34.1px] mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[25.6px] shrink-0">
            <b className="self-stretch relative leading-[120%] mq450:text-12xl mq450:leading-[37px] mq825:text-22xl mq825:leading-[49px]">
              FAQs
            </b>
            <div className="self-stretch relative text-[20px] leading-[150%]">
              Find answers to the most common questions about SchemaAI and its
              applications.
            </div>
          </div>
          <button className="cursor-pointer py-[12.8px] pr-[25.5px] text-[20px] pl-[25.4px] bg-[transparent] h-[54px] box-border flex flex-row items-center justify-center border-[1.1px] border-solid border-border-primary hover:bg-darkslategray-200 hover:box-border hover:border-[1.1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-mid-1 leading-[26px] font-text-tiny-normal text-border-primary text-left inline-block min-w-[60px]">
              Contact
            </div>
          </button>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[51.2px] min-w-[508px] max-w-full text-lgi-2 mq450:gap-[26px_51.2px] mq825:min-w-full">
          {contentData.map((faq, index) => (
            <div
              key={index}
              className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[51.2px] min-w-[508px] max-w-full text-[18px] mq450:gap-[26px 51.2px] mq825:min-w-full"
            >
              <div className="self-stretch flex flex-col items-start justify-start gap-[17.1px] shrink-0">
                <b className="self-stretch relative leading-[29px]">
                  {faq.title}
                </b>
                <div className="self-stretch relative text-[17px] leading-[150%]">
                  {faq.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
