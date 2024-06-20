import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RegisterComponent from "../../components/public/Authentication/RegisterComponent";




const Register = ({ onLogin }) => {
  const location = useLocation();
  const [paymentInfo, setPaymentInfo] = useState({ username: "", plan: "" });

  useEffect(() => {
    // Only proceed if location.state is available
    if (location.state) {
      // Directly set paymentInfo with location.state
      setPaymentInfo(location.state);
    }
  }, [location, location.state]); // Depend on location and location.state


  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-between pl-[257px] box-border gap-[20px] tracking-[normal] mq900:pl-16 mq900:box-border mq1275:pl-32 mq1275:box-border mq1600:flex-wrap">
    <div className="w-[505px] flex flex-col items-start justify-start pt-[141px] px-0 pb-0 box-border min-w-[505px] max-w-full mq900:pt-[60px] mq900:box-border mq900:min-w-full mq1275:pt-[92px] mq1275:box-border mq1600:flex-1">
      <div className="self-stretch flex flex-row items-center justify-center max-w-full">
        <RegisterComponent plan={paymentInfo.plan} onLogin={onLogin}/>
      </div>
    </div>
    <img
      className="h-screen w-[717px] relative rounded-tl-[26.25px] rounded-tr-none rounded-br-none rounded-bl-[26.25px] object-cover max-w-full"
      loading="eager"
      alt=""
      src="/Group 13602.png"
    />
  </div>
  );
};

export default Register;
