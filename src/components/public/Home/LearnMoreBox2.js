import PropTypes from "prop-types";

const LearnMoreBox2 = ({ className = "", title, description }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[39px] pb-16 box-border gap-[14.2px] min-w-[366px] max-w-full text-left text-[18.6px] text-black font-poppins mq450:min-w-full ${className}`}
    >
      <img
        className="w-[32.6px] h-[25.6px] relative"
        loading="lazy"
        alt=""
        src="/vector-8.svg"
      />
      <div className="w-[333.7px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full shrink-0">
        <b className="flex-1 text-customColor-300 relative inline-block max-w-full">
          {title}
        </b>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border max-w-full shrink-0 text-[12px] text-customGray-700">
        <p className="m-0 flex-1 relative font-bold inline-block max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

LearnMoreBox2.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LearnMoreBox2;
