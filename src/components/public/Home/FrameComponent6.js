import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" ,header, descriptionLines}) => {
  return (
    <div
      className={`w-[511px] flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-[36px] text-customColor-300 font-poppins ${className}`}
    >
      <h3 className="m-0 w-[256px] relative text-inherit font-bold font-inherit inline-block mq450:text-[22px] mq900:text-[29px]">
        <p className="m-0">{header}</p>
        <p className="m-0">&nbsp;</p>
      </h3>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full text-[24.8px] text-customColor-200">
        <b className="h-[231px] flex-1 relative inline-block max-w-full mq450:text-[20px]">
          <p className="m-0">{descriptionLines[0]}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{descriptionLines[1]} </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{descriptionLines[2]}</p>
        </b>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
