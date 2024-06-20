import PropTypes from "prop-types";

const GroupComponent = ({ className = "", header, description }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[33.7px] shrink-0 text-center text-[28.5px] text-white font-poppins mq900:gap-[17px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
        <img
          className="h-[66.6px] w-[59.1px] relative shrink-0"
          loading="lazy"
          alt=""
          src="/vector-20.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[22px] shrink-0">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <div className="w-[308px] relative font-semibold inline-block shrink-0 mq450:text-[23px]">
            {header}
          </div>
        </div>
        <p className="m-0 self-stretch h-[149px] relative text-[18px] font-semibold text-white inline-block shrink-0">
          {description}
        </p>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GroupComponent;
