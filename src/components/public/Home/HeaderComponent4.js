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

const HeaderComponent4 = ({ className = "" }) => {
  const contentData = {
    reviews: [
      "“TestApp makes our tasks so easy and efficient!”",
      "“It's a brilliant tool for managing daily operations!”",
      "“Seamless experience with incredible features!”"
    ]
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[54px] box-border max-w-full text-center text-[12px] text-customGray-1100 font-poppins ${className}`}
    >
      <div className="w-[1160px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
        {contentData.reviews.map((review, index) => (
          <ReviewColumns key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

export default HeaderComponent4;
