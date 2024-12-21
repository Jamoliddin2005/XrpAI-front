import React from "react";
import RightIcon from "../../../assets/icons/right.svg";
import TeachIcon from "../../../assets/icons/teach.svg";
import Star from "../../../assets/icons/star.svg";
import SmallIcon from "../../../assets/images/play-list (1).svg";
import { Link } from "react-router-dom";

export default function GetStarted() {
  const messagesData = [
    {
      icon: SmallIcon,
      headText: "Video intruction",
      content: "Investing becomes easier with...",
      videoUrl: "https://www.youtube.com/",
    },
    {
      icon: TeachIcon,
      headText: "0xProject ERC20",
      content: "Create an ERC20 token by imp...",
    },
    {
      icon: TeachIcon,
      headText: "OpenZeppelin ERC20",
      content: "Create an ERC20 token by imp...",
    },
    {
      icon: TeachIcon,
      headText: "Gnosis Safe MultiSig",
      content: "Create Multi-Signature wallets...",
    },
    {
      icon: TeachIcon,
      headText: "Gnosis Safe MultiSig",
      content: "Create Multi-Signature wallets...",
    },
    {
      icon: TeachIcon,
      headText: "Gnosis Safe MultiSig",
      content: "Create Multi-Signature wallets...",
    },
  ];
  return (
    <div
      data-aos="zoom-in"
      className="text-white bg-[#141414] py-5 px-4 rounded-2xl md:w-[35%] mb-2 lg:mb-0"
    >
      <div className="px-2">
        <div className="flex justify-between items-center mb-3 pr-4">
          <div className="flex gap-2 items-center">
            <h2 className="text-[#898989] text-base neu-trial">Get Started</h2>
            <p className="text-[#898989] border-2 border-[#2E2E2E] w-5 h-5 flex items-center justify-center rounded-md text-xs">
              7
            </p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-[#898989] text-xs neu-trial">View all</p>
            <img src={RightIcon} alt="" />
          </div>
        </div>
        <div className="scrol-element pr-2">
          <div className="flex mb-1.5 justify-between neu-trial bg-[#1D1D1D] py-2.5 px-2.5 rounded-xl card cursor-pointer card-hover">
            <Link to={`${messagesData[0].videoUrl}`}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center card-image bg-transparent  rounded-full">
                  <img src={messagesData[0].icon} alt="" />
                </div>
                <div>
                  <h3 className="text-[#fff] text-xs hover-text">
                    {messagesData[0].headText}
                  </h3>
                  <p className="text-[#2E2E2E] text-[10px]">
                    {messagesData[0].content}
                  </p>
                </div>
              </div>
            </Link>
            <div className="cursor-pointer star">
              <img src={Star} alt="" />
            </div>
          </div>
          {messagesData.slice(1).map((message, index) => {
            return (
              <div
                key={index}
                className="flex mb-1.5 justify-between neu-trial bg-[#1D1D1D] py-2.5 px-2.5 rounded-xl card cursor-pointer"
              >
                <div className="flex items-center gap-2 ">
                  <div className="w-10 h-10 flex items-center justify-center card-image bg-transparent  rounded-full">
                    <img src={message.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[#fff] text-xs hover-text">
                      {message.headText}
                    </h3>
                    <p className="text-[#2E2E2E] text-[10px]">
                      {message.content}
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer star">
                  <img src={Star} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
