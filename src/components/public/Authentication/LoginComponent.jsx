import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import { useNavigate } from "react-router-dom";
import useGoogleLogin from "../../../hooks/useGoogleLogin";
import { Link } from "react-router-dom";

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add this line for error handling
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const plan = "";
  const clientId =
    "375057981851-n2rb0fp5v5rh3fde74b8t3tl7lacqnvr.apps.googleusercontent.com";
  const { handleGoogleLogin } = useGoogleLogin(
    clientId,
    plan,
    username,
    onLogin
  );

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setUsername(inputEmail);

    // Validate email and set error message
    if (!validateEmail(inputEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(""); // Clear error message when valid
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        const { username, account_subscription } = response.data;
        console.log("Login response data:", response.data); // Debugging line

        onLogin(true, username);
        console.log(username);

        if (account_subscription) {
          console.log("Navigating to job dashboard"); // Debugging line
          navigate("/dashboard");
        } else {
          console.log("Navigating to subscriptions page"); // Debugging line
          navigate("/dashboard");
        }
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
      onLogin(false);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start p-0 gap-8 max-w-full text-left text-black">
      <div className="flex flex-row items-center justify-center p-0 max-w-full">
        <h1 className="font-sans font-bold m-0 h-16 relative text-[23px] font-medium">
          Welcome Back!
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="m-0 self-stretch h-[393px] flex flex-col items-start justify-start gap-[37px] max-w-full"
      >
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[25px]">
          {/* <SplitFrame /> */}

          <div className="flex-1 flex flex-col items-start justify-start text-left text-[17.5px] text-black font-poppins">
            <div className="flex flex-row items-start justify-start py-2">
              Email
            </div>
            <div className="self-stretch h-10 rounded-[15px] box-border overflow-hidden flex flex-row items-start justify-start py-[10px] pl-[12.500000953674316px] border-[1.3px] border-solid border- bg-white">
              <input
                className="flex-grow font-poppins outline-none font-medium text-[12.5px] bg-white"
                placeholder="Email"
                type="email"
                value={username}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && (
              <div className="font-medium text-[12.5px] text-red-600 pt-5">
                {emailError}
              </div>
            )}

            <div className="flex flex-row items-start justify-start pt-8 pb-2">
              Password
            </div>
            <div className="self-stretch h-10 w-[500px] outline-none rounded-[15px] box-border overflow-hidden flex flex-row items-start justify-start py-[10px] pl-[12.500000953674316px] border-[1.3px] border-solid border-muted bg-white">
              <input
                className="flex-grow font-poppins font-medium outline-none text-[12.5px]"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[8px]">
            <input
              className="m-0 h-[12.3px] w-[11.3px] relative rounded-10xs-5 box-border border-[1.3px] border-solid border-white"
              type="checkbox"
            />
            <div className="relative text-[11.3px] font-medium font-poppins text-black text-left">
              {`I agree to the `}
              <span className="[text-decoration:underline]">{`terms & policy`}</span>
            </div>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

        <button
          type="submit"
          className="cursor-pointer border-none p-0 rounded-[18px] bg-darkolivegreen self-stretch h-11 relative max-w-full flex items-center justify-center"
        >
          <span className="absolute top-2 left-58 text-[16px] font-poppins text-white text-left z-10 px-2 py-1">
            Sign In
          </span>
        </button>
      </form>

      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-1 box-border max-w-full text-[11.3px]">
        <div className="h-[19.2px] flex-1 relative max-w-full">
          <div className="absolute top-[11.5px] left-[-0.2px] box-border w-[502.5px] h-[2.5px] border-t-[2.5px]" />
          <div className="absolute top-[0.3px] left-[237.3px] w-[25px] overflow-hidden flex flex-row items-center justify-center z-[1]">
            <div className="relative font-semibold font-roboto">Or</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[28px] text-[17.5px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[29px] mq900:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-center pt-[3px] px-0 pb-0 box-border min-w-[155px]">
            <button
              onClick={handleGoogleLogin}
              className="cursor-pointer p-[5px] bg-[transparent] w-[50%] md:w-[50%] rounded-[12.5px] overflow-hidden flex flex-row items-center justify-center border-[1.3px] border-solid border-muted"
            >
              <div className="flex-1 flex flex-row items-center justify-center py-0 px-[19px] gap-[13px]">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/Register/icons8google-1.svg"
                />
                <div className="relative text-[15px] font-medium font-poppins text-black text-center">
                  Sign In with Google
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="h-[29px] flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border">
          <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-0.5">
            <div className="flex flex-row items-center justify-center">
              <div className="font-sans font-semibold relative whitespace-pre-wrap">
                <span>{`Don't have an account?  `}</span>
                <Link
                  to="/register"
                  className="text-[18px] text-mediumblue no-underline"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
