import EngagementItems from "./EngagementItems";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full text-left text-[18.7px] text-white font-poppins ${className}`}
    >
      <div className="w-[1077.6px] flex flex-row flex-wrap items-start justify-start gap-[31.9px_63.4px] min-h-[658px] max-w-full mq450:gap-[16px] mq900:gap-[32px]">
        <EngagementItems />
        <EngagementItems />
        <EngagementItems />
        <EngagementItems />
        <EngagementItems />
        <EngagementItems />
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
