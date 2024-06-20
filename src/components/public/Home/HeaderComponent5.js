import React from "react";


const ReviewColumns = ({ className = "", review }) => {
  return (
    <div
      className={`w-[330px] rounded-[10px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[17px] px-[41px] pb-4 box-border gap-[12.5px] max-w-full text-center text-[12px] text-customGray-1100 font-poppins ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pr-[61px] pl-[60px]">
        <img
          className="h-[15.5px] w-[127px] relative"
          loading="lazy"
          alt=""
          src="/group-268.svg"
        />
      </div>
      <blockquote className="m-0 self-stretch relative">
        {review}
      </blockquote>
    </div>
  );
};



const HeaderComponent5 = () => {
  const contentData = {
    mainTitle1: "Features",
    description1: "Intuitive tools for prompt messaging, name processing, and seamless PDF to text conversion.",
    mainTitle2: "Ease of Use",
    description2: "Effortless navigation guarantees a superb user experience.",
    footerText: "+ Unmatched value",
    reviews: [
      "“Review 1 raves about excellence”",
      "“Review 2 praises awesomeness”",
      "“Review 3 appreciates the fantastic experience”"
    ]
};

  return (
    <div className="pb-[60px] pt-[100px] justify-center flex flex-col w-full">

<section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[54px] box-border max-w-full text-center text-[12px] text-customGray-1100 font-poppins`}
    >
      <div className="w-[1160px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
        {contentData.reviews.map((review, index) => (
          <ReviewColumns key={index} review={review} />
        ))}
      </div>
    </section>


      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-11 pr-[60px] pl-5 box-border max-w-full text-center text-[96px] text-black font-poppins mq1350:pr-[30px] mq1350:box-border">
        <h1 className="m-0 w-[1002px] relative  font-bold font-inherit text-customColor-300 text-[96px] inline-block shrink-0 max-w-full mq450:text-[29px] mq925:text-[48px]">
          {contentData.mainTitle1}
        </h1>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[93px] pr-[38px] pl-5 box-border max-w-full text-center text-[24px] text-customGray-1100 font-poppins">
        <div className="w-[756px] relative leading-[189.16%] inline-block  shrink-0 max-w-full mq450:text-[19px] mq450:leading-[36px] ">
          {contentData.description1}
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[221px] pr-[21px] pl-5 box-border max-w-full text-center text-[40px] text-customGray-1100 font-poppins">
        <div className="w-[719px] flex flex-row items-start justify-center gap-[37.3px] max-w-full mq925:flex-wrap mq925:gap-[19px]">
          <button className="cursor-pointer py-[22px] pr-[41px] pl-[45px] bg-customColor-300 flex-[0.7407] rounded-[13.08px] box-border overflow-hidden flex flex-row items-start justify-start min-w-[222px] whitespace-nowrap max-w-full border-[1.3px] border-solid border-customColor-150 hover:bg-customColor-200 hover:box-border hover:border-[1.3px] hover:border-solid mq450:pl-5 mq450:box-border mq925:flex-1">
            <div className="flex-1 relative text-[28px] font-medium font-poppins text-white text-center">
              Book A Call
            </div>
          </button>
          <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[221px] max-w-full mq925:flex-1">
            <h1 className="m-0 self-stretch relative text-inherit font-light font-inherit mq450:text-[24px] mq925:text-[32px]">
              {contentData.footerText}
            </h1>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HeaderComponent5;
