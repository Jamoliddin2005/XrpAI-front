import React, { useState } from "react";
import Button from "../components/buttons/signButtons";
import AuthImage from "../assets/images/auth-image.png";
import imageBG from "../assets/images/Vector.png";
import SmallXIcon from "../assets/images/small-x.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpRootPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    setSuccess("");

    if (!email || !password || !confirmPassword) {
      setError("Заполните все поля!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпали!");
      return;
    }

    try {
      const response = await axios.post("https://xrp-ai-back.vercel.app/signup", {
        username: email,
        password,
      });

      setSuccess("Регистрация прошла успешно!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/signin");
      }, 300);
    } catch (err) {
      setError(
        err.response?.data?.error || "Произошла ошибка при регистрации!"
      );
    }
  };

  return (
    <div className="signin">
      <img className="top-img -z-10 " src={AuthImage} alt="" />
      <div className="flex justify-center items-center h-[100vh] -z-10 absolute">
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
        <h1 className="sign-in-page-text neu-trial">Sign Up</h1>
        <p className="sign-in-page-text-p mb-7 mt-4 neu-trial">
          Sign up to unlock new opportunities!
        </p>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div>
          <input
            className="sign-in-page-input mb-3"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="sign-in-page-input mb-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="sign-in-page-input"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex items-center text-white gap-1.5 ">
            <label
              htmlFor="customCheckbox"
              className="flex items-center cursor-pointer gap-1.5 mt-3 text-[#999C9E] relative"
            >
              <input type="checkbox" id="customCheckbox" className="hidden" />
              <div className="checkbox-label"></div>
              <p className="terms grotesk">
                <span>I accept </span>{" "}
                <span className="hover:underline hover:text-white terms-of-securitys">
                  Terms & Conditions
                </span>
              </p>
            </label>
          </div>
          <div className="mt-7 grotesk">
            <Button
              className={
                "border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent"
              }
              title={"SIGN UP"}
              handleSignIn={handleSignUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
