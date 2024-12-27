import React from "react";
import RightIcon from "../../../assets/icons/right-icon.svg";
import checkIcon from "../../../assets/icons/check.svg";
import LastIcon from "../../../assets/icons/lst.svg";
import Solidity from "../../../assets/icons/solidity.svg";
import Sourcify from "../../../assets/icons/soursify.svg";
import Dgit from "../../../assets/icons/dgit.svg";

export default function FeaturedPlugin() {
  const criptoCard = [
    {
      icon: checkIcon,
      language: "Language",
      name: "SUT",
      content: "To unit test a Solidity smart contract using Hardhat",
      status: true,
    },
    {
      icon: Solidity,
      language: "Language",
      name: "Solidity",
      content: "To unit test a Solidity smart contract using Hardhat",
      status: false,
    },
    {
      icon: Sourcify,
      language: "Language",
      name: "Sourcify",
      content: "To unit test a Solidity smart contract using Hardhat",
      status: false,
    },
    {
      icon: Dgit,
      language: "Language",
      name: "Dgit",
      content: "To unit test a Solidity smart contract using Hardhat",
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
            <h2 className="text-[#898989] text-base">Featured Plugins</h2>
            <p className="text-[#898989] border-2 border-[#2E2E2E] w-5 h-5 flex items-center justify-center rounded-md text-xs">
              6
            </p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-[#898989] text-xs">View all</p>
            <img src={RightIcon} alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 text-white gap-1.5 scrol-element pr-2 ">
          {criptoCard.map((cripto, index) => {
            return (
              <div key={index} className="bg-[#1B1B1B] py-4 px-3 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#2E2E2E] text-[9px]">
                      {cripto.language}
                    </p>
                    <h1 className="text-[#898989] text-sm">{cripto.name}</h1>
                  </div>
                  <div
                    className="bg-[#373737] w-7 h-7 flex items-center justify-center rounded-full"
                   
                  >
                    <img src={cripto.icon} alt={cripto.name}  style={cripto.last && { filter: "brightness(0.5)" }}/>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-[#2E2E2E]">{cripto.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
