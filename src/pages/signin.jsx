import React, { useState } from "react";
import Button from "../components/buttons/signButtons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SmallXIcon from "../assets/images/small-x.png";
import AuthImage from "../assets/images/auth-image.png";
import imageBG from "../assets/images/Vector.png";

export default function SignInRootPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      setError("Заполните все поля!");
      return;
    }

    try {
      const response = await axios.post("https://xrp-ai-back.vercel.app/signin", {
        username: email,
        password,
      });

      alert("Вход успешен!");
      localStorage.setItem("register", "true");
      setTimeout(() => {
        navigate("/main-active");
        window.location.reload()
      }, 1000);
    } catch (err) {
      localStorage.setItem("register", "false");
      setError(err.response?.data?.error || "Произошла ошибка при входе!");
    }
  };

  return (
    <div className="signin">
      <img className="top-img -z-10 " src={AuthImage} alt="" />
      <div className="flex justify-center items-center -z-10 absolute">
        <img className="center-image " src={imageBG} alt="" />
      </div>
      <div className="stars1"></div>
      <div className="stars2"></div>
      <img
        className="absolute top-[15%] -z-10 left-[10%] smallXIcon"
        src={SmallXIcon}
        alt=""
      />
      <div data-aos="flip-left" className="sign-in-page">
        <h1 className="sign-in-page-text neu-trial">Sign In</h1>
        <p className="sign-in-page-text-p neu-trial mb-7 mt-4">
          Sign in to unlock new opportunities!
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <div>
            <input
              className="sign-in-page-input"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sign-in-page-input-main">
            <input
              className="sign-in-page-input-2"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              className="grotesk cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </p>
          </div>
          <p className="mt-3 grotesk text-[#898989] cursor-pointer grotesk">
            Forgot Password
          </p>
          <div className="mt-7 grotesk">
            <Button
              className="rounded-md grotesk"
              title="SIGN IN"
              handleSignIn={handleSignIn}
            />
          </div>
        </div>
      </div>
      <div data-aos="flip-left" className="signin-page-bottom-text grotesk">
        <p>
          New to XrpAI{" "}
          <span>
            <Link to={"/signup"}>Join Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
