import React from "react";
import checkIcon from "../../../assets/icons/check.svg";
import RightIconBlue from "../../../assets/icons/right-blue.svg";
import Solidity from "../../../assets/icons/solidity.svg";
import Sourcify from "../../../assets/icons/soursify.svg";
import Dgit from "../../../assets/icons/dgit.svg";
import LastIcon from "../../../assets/icons/lst.svg";

export default function FeaturedPluginActive() {
  const criptoCard = [
    {
      icon: checkIcon,
      language: "Language",
      name: "SUT",
      content: "Unit testing of smart contracts on Solidi...",
      status: true,
    },
    {
      icon: Solidity,
      language: "Language",
      name: "Solidity",
      content: "Unit testing of smart contracts on Solidi...",
      status: false,
    },
    {
      icon: Sourcify,
      language: "Language",
      name: "Sourcify",
      content: "Verification of smart contract source co...",
      status: false,
    },
    {
      icon: Dgit,
      language: "Language",
      name: "Dgit",
      content: "Versioning of smart contracts on Soli...",
      status: true,
    },
    {
      icon: LastIcon,
      language: "Language",
      name: "Solhint",
      content: "Static code analysis of smart contracts...",
      status: true,
      last:true
    },
  ];

  return (
    <div
      data-aos="zoom-in"
      className="md:w-[35%] bg-[#141414] py-5 px-4 rounded-2xl"
    >
      <div className="">
        <div className="text-white flex justify-between items-center pr-4  mb-3">
          <div className="flex gap-2 items-center">
            <h2 className="text-[#FFF] text-base">Featured Plugins</h2>
            <p className="text-[#898989] border-2 border-[#2E2E2E] w-5 h-5 flex items-center justify-center rounded-md text-xs">
              6
            </p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-[#43AFFF] text-xs">View all</p>
            <img src={RightIconBlue} alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 text-white gap-1.5 scrol-element-22 pr-2 ">
          {criptoCard.map((cripto, index) => {
            return (
              <div
                key={index}
                className={`py-4 px-3 rounded-2xl  ${
                  cripto.status === true
                    ? "bg-[#1A2A35] rounded-radius border-2 border-[#224159]"
                    : "bg-[#1B1B1B] py-4 px-3 rounded-2xl"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p
                      className={`text-[9px] ${
                        cripto.status === true
                          ? "text-[#898989]"
                          : "text-[#898989]"
                      }`}
                    >
                      {cripto.language}
                    </p>
                    <h1
                      className={`${
                        cripto.status === true
                          ? "text-[#43AFFF] text-sm"
                          : "text-[#FFFFFF] text-sm"
                      }`}
                    >
                      {cripto.name}
                    </h1>
                  </div>
                  <div
                    className={`${
                      cripto.status === true
                        ? "bg-[#1F3A4F] w-7 h-7 flex items-center justify-center rounded-full"
                        : "bg-[#373737] w-7 h-7 flex items-center justify-center rounded-full"
                    }`}
                  >
                    <img src={cripto.icon} alt={cripto.name} />
                  </div>
                </div>
                <div>
                  <p
                    className={`${
                      cripto.status === true
                        ? "text-[10px] text-[#898989]"
                        : "text-[10px] text-[#898989]"
                    }`}
                  >
                    {cripto.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
