import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useGoogleLogin from "../../../hooks/useGoogleLogin";
import { Link } from "react-router-dom";

const RegisterComponent = ({ plan, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

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
    console.log(username);
    console.log(password);

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        onLogin(true, username); // Assuming onLogin updates some state or context to reflect the user's logged-in status
        setError(""); // Clear any existing errors on successful login

        // Conditional navigation based on plan
        if (plan === "") {
          // If no plan is specified, redirect to subscriptions page
          navigate("/dashboard");
        } else {
          // If a plan is specified, navigate to Payment Page with plan details
          navigate("/dashboard", { state: { plan, username } });
        }
        return; // Prevent further execution to ensure navigation occurs as expected
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
    // Consider placing any logic here that should occur after all other conditions have been checked
  };

  return (
    <div className="flex flex-col items-start justify-start p-0 gap-8 max-w-full text-left text-black">
      <div className="flex flex-row items-center justify-center p-0 max-w-full">
        <h1 className="font-sans font-bold m-0 h-16 relative text-[23px]">
          Get Started Now
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
            <div className="self-stretch h-10 rounded-[15px] box-border overflow-hidden flex flex-row items-start justify-start py-[10px] pl-[12.500000953674316px] border-[1.3px] border-solid border-muted bg-white">
              <input
                className="flex-grow font-poppins outline-none font-medium text-[12.5px]"
                placeholder="Email"
                type="email" // Changed to email
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
              className="m-0 h-[12.3px] w-[11.3px] relative rounded-10xs-5 box-border border-[1.3px] border-solid border-black"
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
            Sign Up
          </span>
        </button>
      </form>

      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-1 box-border max-w-full text-[11.3px]">
        <div className="h-[19.2px] flex-1 relative max-w-full">
          <div className="absolute top-[11.5px] left-[-0.2px] box-border w-[502.5px] h-[2.5px] border-t-[2.5px] " />
          <div className="absolute top-[0.3px] left-[237.3px] bg-white w-[25px] overflow-hidden flex flex-row items-center justify-center z-[1]">
            <div className="relative font-roboto">Or</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[28px] text-[17.5px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[29px] mq900:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-center pt-[3px] px-0 pb-0 box-border min-w-[155px]">
            <button
              onClick={handleGoogleLogin}
              className="cursor-pointer p-[5px] bg-[transparent] w-[50%] rounded-[12.5px] overflow-hidden flex flex-row items-center justify-center border-[1.3px] border-solid border-muted"
            >
              <div className="flex flex-row items-center justify-center py-0 px-[19px] gap-[13px]">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/Register/icons8google-1.svg"
                />
                <div className="relative text-[15px] font-medium font-poppins text-black text-center">
                  Signup with Google
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="h-[29px] flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border">
          <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-0.5">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-sans font-semibold whitespace-pre-wrap">
                <span>{`Have an account?  `}</span>
                <Link
                  to="/login"
                  className="text-[18px] text-mediumblue no-underline"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
