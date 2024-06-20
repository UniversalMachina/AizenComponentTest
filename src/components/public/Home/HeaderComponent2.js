import PropTypes from "prop-types";

const HeaderComponent2 = ({ className = "" }) => {
  const contentData = {
    introText: "A user-friendly platform for your business",
    mainTitle: "Your Ultimate SaaS Solution",
    description: "Offer seamless interactions to enhance user engagement. Enjoy intuitive design and efficient navigation, making it simple for customers to use.",
  };

  return (
    <section
      className={`self-stretch bg-customGray-1600 overflow-hidden flex flex-col items-start justify-start pt-[193px] px-[194px] pb-[151px] box-border gap-[47px] max-w-full text-center text-[12px] text-white font-poppins mq1350:pl-[97px] mq1350:pr-[97px] mq1350:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq925:gap-[23px] mq925:pt-[125px] mq925:px-12 mq925:pb-[98px] mq925:box-border ${className}`}
    >
      <div className="w-[868px] flex flex-col items-start justify-start gap-[21px] max-w-full">
        <div className="w-[247px] relative inline-block">
          {contentData.introText}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-4 box-border max-w-full text-left text-[48px] font-oswald">
          <h1 className="m-0 flex-1 relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-[29px] mq925:text-[38px]">
            {contentData.mainTitle}
          </h1>
        </div>
      </div>
      <div className="w-[551px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[41px] max-w-full mq925:gap-[20px]">
          <div className="self-stretch relative mq450:text-[16px]">
            {contentData.description}
          </div>
          <div className="w-[376px] flex flex-row items-start justify-start gap-[30px] max-w-full mq450:flex-wrap">
            <button className="cursor-pointer pt-[19px] pb-5 pr-[17px] pl-5 bg-white flex-1 rounded-[110px] box-border overflow-hidden flex flex-row items-start justify-start min-w-[112px] whitespace-nowrap border-[0.9px] border-solid border-customGray-700 hover:bg-customGray-200 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-customGray-900 mq450:flex-1">
              <div className="flex-1 relative text-[16px] font-medium font-poppins text-black text-center">
                Book A Call
              </div>
            </button>
            <button className="cursor-pointer pt-[19px] pb-5 pr-6 pl-[26px] bg-[transparent] flex-[0.9031] rounded-[110px] box-border overflow-hidden flex flex-row items-start justify-start min-w-[112px] border-[0.9px] border-solid border-customGray-700 hover:bg-customGray-500 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-customGray-900 mq450:flex-1">
              <div className="flex-1 relative text-[16px] font-medium font-poppins text-white text-center">
                View Services
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

HeaderComponent2.propTypes = {
  className: PropTypes.string,
};

export default HeaderComponent2;
