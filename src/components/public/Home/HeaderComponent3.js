import PropTypes from "prop-types";

const HeaderComponent3 = ({ className = "" }) => {
  const contentData = {
    header1: "Designed for Users",
    header2: "Optimized for Efficiency",
    description: "An intuitive platform is crucial for user engagement. Sleek design enhances navigation, boosting user experience.",
    footerText: "Try Slack for free, with no time limits.",
};

  return (
    <section
      className={`flex flex-row items-start justify-start pt-[60px] px-0 pb-[33px] box-border max-w-full text-left text-[80px] text-black font-poppins ${className}`}
    >
      <div className="w-[1920px] bg-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[109px] px-[187px] pb-[99px] box-border gap-[46px] max-w-full mq1350:pl-[93px] mq1350:pr-[93px] mq1350:box-border mq1825:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq925:gap-[23px] mq925:pt-[71px] mq925:px-[46px] mq925:pb-16 mq925:box-border">
        <div className="w-[833px] flex flex-col items-start justify-start gap-[45px] min-w-[833px] shrink-0 [debug_commit:0448091] max-w-full mq1350:min-w-full mq1825:flex-1 mq450:gap-[22px]">
          <div className="w-[1204px] flex flex-col items-start justify-start max-w-full">
            <h1 className="m-0 self-stretch relative text-customColor-300 text-[80px] font-semibold font-inherit mq450:text-[24px] mq925:text-[40px] ">
              {contentData.header1}
            </h1>
            <h1 className="m-0 w-[1688px] relative text-[64px] font-light font-inherit inline-block max-w-full mq450:text-[38px] mq925:text-[51px]">
              {contentData.header2}
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[41.3px] max-w-full text-[24px] mq450:gap-[21px]">
            <div className="self-stretch relative mq450:text-[19px]">
              {contentData.description}
            </div>
            <div className="w-[629px] flex flex-row items-start justify-start gap-[19px] max-w-full mq925:flex-wrap">
              <button className="cursor-pointer pt-[27px] px-[51px] pb-[26px] bg-customColor-300 flex-1 rounded-[4.71px] box-border overflow-hidden flex flex-row items-start justify-start min-w-[198px] whitespace-nowrap border-[0.9px] border-solid border-customColor-100 hover:bg-customColor-200 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-customColor-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 relative text-[22px] font-medium font-poppins text-white text-center">
                  Learn More
                </div>
              </button>
              <button className="cursor-pointer pt-[27px] px-[51px] pb-[26px] bg-[transparent] flex-1 rounded-[4.71px] box-border overflow-hidden flex flex-row items-start justify-start min-w-[198px] border-[0.9px] border-solid border-customGray-700 hover:bg-customGray-200 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-customGray-900 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 relative text-[22px] font-medium font-poppins text-black text-center whitespace-nowrap mq450:text-[18px]">
                  Sign Up
                </div>
              </button>
            </div>
            <div className="w-[544px] relative inline-block max-w-full mq450:text-[19px]">
              {contentData.footerText}
            </div>
          </div>
        </div>
        <div className="h-[538px] w-[1379.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[9.8px] box-border min-w-[1379.5px] max-w-full shrink-0 mq1825:flex-1 mq1825:min-w-full">
          <img
            className="self-stretch h-[880.2px] relative max-w-full overflow-hidden shrink-0 [debug_commit:0448091] mq1825:self-stretch mq1825:w-auto"
            loading="lazy"
            alt=""
            src="/vector-33.svg"
          />
        </div>
      </div>
    </section>
  );
};

HeaderComponent3.propTypes = {
  className: PropTypes.string,
};

export default HeaderComponent3;
