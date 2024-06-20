import React, { useState } from "react";

const contentData = {
  "ctaDescription": "Unlock exclusive features with TestApp and streamline your workflows."
};

const CTA = () => {
  const [email, setEmail] = useState(''); // State to hold the email input
  const [message, setMessage] = useState(''); // State to hold the message displayed after submit

  const handleInputChange = (event) => {
    setEmail(event.target.value); // Update the email state on every input change
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    if (email) { // Check if email is not empty
      setMessage('Thank you for signing up!'); // Set the thank you message
      setTimeout(() => setMessage(''), 3000); // Remove the message after 3 seconds
    } else {
      setMessage('Please enter a valid email address.'); // Set the error message if email is empty
      setTimeout(() => setMessage(''), 3000); // Remove the message after 3 seconds
    }
  };

  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start pt-[149.4px] px-5 pb-[149.2px] box-border max-w-full shrink-0 z-[2] lg:pt-[97px] lg:pb-[97px] lg:box-border mq450:gap-[27px_106.7px] mq450:pt-[63px] mq450:pb-[63px] mq450:box-border mq825:gap-[53px_106.7px]">
      <footer className="w-[1749.3px] box-border overflow-hidden flex flex-row items-center justify-start max-w-full shrink-0 [row-gap:20px] text-left text-[48px] text-black font-Roboto border-[1.3px] border-solid border-black mq1450:flex-wrap">
        <div className="flex-[0.8537] flex flex-col items-start justify-center p-16 box-border gap-[21.3px] min-w-[569px] max-w-full lg:pl-8 lg:pr-8 lg:box-border mq825:pt-[42px] mq825:pb-[42px] mq825:box-border mq825:min-w-full mq1450:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] shrink-0 mq825:gap-[16px_32px]">
            <h1 className="m-0 self-stretch h-[154px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-[29px] mq450:leading-[35px] mq825:text-[38px] mq825:leading-[46px]">
              Join our Early Access Program
            </h1>
            <div className="self-stretch h-9 relative text-[18px] leading-[150%] inline-block">
              {contentData.ctaDescription}
            </div>
          </div>
          <form className="w-[684px] flex flex-col items-start justify-start pt-[21.4px] px-0 pb-0 box-border gap-[21.3px] max-w-full shrink-0 text-[21.3px] text-color-neutral-neutral" onSubmit={handleSubmit}>
            <div className="self-stretch h-16 flex flex-row items-start justify-start gap-[21.3px] max-w-full">
              <input 
                type="email" 
                className="flex-1 bg-white box-border flex flex-row items-center justify-start py-4 pr-[13px] pl-4 max-w-[calc(100%_-_161px)] shrink-0 border-[1.3px] border-solid border-black" 
                placeholder="Enter your email" 
                value={email} 
                onChange={handleInputChange}
              />
              <button type="submit" className="cursor-pointer py-4 pr-[33.1px] pl-[33.2px] bg-black h-[67px] box-border flex flex-row items-center justify-center whitespace-nowrap border-[1.3px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-darkslategray-100">
                <div className="relative text-[21.3px] leading-[32px] font-Roboto text-white text-left inline-block min-w-[71px]">
                  Sign up
                </div>
              </button>
            </div>
            <div className="self-stretch h-6 relative text-[12px] leading-[150%] text-black inline-block">
              By signing up, you agree to our Terms and Conditions.
            </div>
            {message && <div className="text-red-500">{message}</div>}
          </form>
        </div>
        <img
          className="h-[582.7px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[569px] mq825:min-w-full mq1450:flex-1"
          loading="lazy"
          alt=""
          src="/placeholder-image-4@2x.png"
        />
      </footer>
    </section>
  );
};

export default CTA;
