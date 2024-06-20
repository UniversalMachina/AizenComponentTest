import React, { useState } from "react";

// Data structure for FAQs
const contentData = [
  {
    title: "Find answers to the most common questions about SchemaAI and its applications.",
    faq: [
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
    ],
  },
];

const FAQ1 = () => {
  // State to track which FAQ is currently expanded
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    // Toggle between show and hide
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start pt-[149.3px] px-5 pb-[149.4px] box-border gap-[106.7px] max-w-full text-left text-25xl-8 text-border-primary font-poppins lg:pt-[97px] lg:pb-[97px] lg:box-border mq450:gap-[27px_106.7px] mq750:gap-[53px_106.7px] mq750:pt-[63px] mq750:pb-[63px] mq750:box-border">
      <div className="w-[1234.7px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[47.4px] box-border gap-[22.4px] max-w-full">
          <b className="w-[716.8px] text-[40px] relative leading-[54px] inline-block shrink-0 mq450:text-8xl mq450:leading-[32px] mq1050:text-17xl mq1050:leading-[43px]">
            FAQs
          </b>
          <div className="w-[716.8px] relative text-base-8 leading-[150%] inline-block shrink-0">
            {contentData[0].title}
          </div>
        </div>
      </div>

      <div className="w-[1234.7px] flex flex-col items-start justify-start py-0 px-[5px] box-border max-w-full text-base-8">
        {contentData[0].faq.map((faq, index) => (
          <div key={index} className="flex-1 overflow-x-auto flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border max-w-full">
            <div className="w-[1224.5px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch h-[0.9px] relative bg-border-primary box-border shrink-0 border-[0.9px] border-solid border-border-primary" />
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[18.7px] px-0 pb-[18.6px] gap-[11.2px] shrink-0">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0 box-border min-w-[769px] max-w-full shrink-0 mq1050:min-w-full">
                    <b className="self-stretch relative leading-[150%] shrink-0 cursor-pointer" onClick={() => toggleFAQ(index)}>
                      {faq.title}
                    </b>
                  </div>
                  {activeIndex === index && (
                    <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[2.4px] px-0 pb-0 gap-[11.2px] shrink-0">
                      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-w-[769px] max-w-full">
                        <p className="self-stretch relative leading-[150%] shrink-0">
                          {faq.body}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[1234.7px] h-[146px] flex flex-col items-start justify-start pt-0 px-0 pb-[66.8px] box-border gap-[22.5px] max-w-full text-10xl-9">
        <div className="self-stretch h-[78.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[39.9px] box-border gap-[15px] shrink-0">
          <b className="self-stretch relative text-[30px] leading-[39px] shrink-0 mq450:text-5xl mq450:leading-[31px]">
            Still have questions?
          </b>
          <div className="self-stretch relative text-base-8 leading-[150%] shrink-0">
            Contact us for further assistance.
          </div>
        </div>
        <button className="cursor-pointer py-[11.2px] px-[22px] bg-[transparent] h-[] box-border flex flex-row items-start justify-start shrink-0 border-[0.9px] border-solid border-border-primary hover:bg-darkslategray-200 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-darkslategray-100">
          <div className="relative text-mini-9 leading-[150%] font-text-tiny-normal text-border-primary text-left inline-block min-w-[53px]">
            Contact
          </div>
        </button>
      </div>
    </section>
  );
};

export default FAQ1;
