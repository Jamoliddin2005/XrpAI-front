import React, { useEffect, useState } from "react";
import PlayIcon from "../../../assets/icons/play.svg";
import PrivacyIcon from "../../../assets/icons/privacy.svg";
import Button from "../../buttons/signButtons";
import copyIcon from "../../../assets/icons/copy-icon.svg";
import qrCode from "../../../assets/icons/qr-code.svg";
import CodeViewer from "../../hideCode";
import Calculator from "../calculator";
import CheckIcon from "../../../assets/images/check.svg";
import CodeViewer2 from "../../hideCode-notRegistered";
import userCircle from "../../../assets/images/user-circle.svg";
import InformationIcon from "../../../assets/images/information-circle.svg";
import { Link } from "react-router-dom";

export default function ActivePageFarming({ user }) {
  const [open, setOpen] = useState(true);
  const [clipboard, setClipboard] = useState(false);
  const [clipboard2, setClipboard2] = useState(false);
  const [openCodeView, setOpenCodeView] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const [secondClipboard, setSecondClipboard] = useState(false);
  const [isCodeComplete, setIsCodeComplete] = useState(false);
  const [isCodeComplete2, setIsCodeComplete2] = useState(false);
  const [consoleBoolean, setConsoleBoolean] = useState(false);
  const [codeMemo, setCodeMemo] = useState("");

  const userData = [
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "15 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "20 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "25 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "30 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "35 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: user.username,
      icon: userCircle,
      expextedTime: "40 minutes",
      dateAndTime: "15/10/2024, 14:35",
      status: "Process",
      active: true,
    },
  ];
  const handleCalculator = () => {
    setCalculator(!calculator);
  };

  const [activeModal, setActiveModal] = useState(null);

  const handleSecondButton = () => {
    setOpen(!open);
    handleOpenCodeViewer();
  };

  const handleOpenCodeViewer = () => {
    setOpenCodeView(!openCodeView);
    setOpen(false);
  };
  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const handleCloseAll = () => {
    setActiveModal(null);
    setOpenCodeView(false);
    setOpen(true);
    setIsCodeComplete(false);
  };

  const handleMakeDeposit = () => {
    setOpenCodeView(false);
  };

  const handleClipboard = () => {
    setClipboard(true);
    setTimeout(() => {
      setClipboard(false);
    }, 3000);
    navigator.clipboard.writeText(copyText).then(() => {
      setClipboard(true);
      setTimeout(() => setClipboard(false), 3000);
    });
  };
  const handleClipboardSecond = () => {
    setSecondClipboard(true);
    setTimeout(() => {
      setSecondClipboard(false);
    }, 3000);
    navigator.clipboard.writeText(codeMemo).then(() => {
      setSecondClipboard(true);
      setTimeout(() => setSecondClipboard(false), 3000);
    });
  };

  useEffect(() => {
    const hashMEMO = Math.floor(Math.random() * 10000000).toString();
    setCodeMemo(hashMEMO);
  }, []);

  const handleClipboard2 = () => {
    setClipboard2(true);
    setTimeout(() => {
      setClipboard2(false);
    }, 3000);
    navigator.clipboard.writeText(user.token).then(() => {
      setClipboard2(true);
      setTimeout(() => setClipboard2(false), 3000);
    });
  };

  const copyText = "rnPNSonfEN1TWkPH4Kwvkk3693sCT4tsZv";

  return (
    <>
      {calculator && (
        <>
          <Calculator
            status={calculator}
            onClose={() => setCalculator(false)}
          />
        </>
      )}
      <div
        data-aos="zoom-in"
        className="md:w-[30%] bg-[#141414] py-4 px-5 rounded-2xl text-center mb-2 lg:mb-0"
      >
        <p className="text-white text-lg neu-trial">Start Farming</p>
        <p
          onClick={handleCalculator}
          className="hover:underline cursor-pointer neu-trial text-[#43AFFF] text-xs neu-trial"
        >
          Calculate Profit
        </p>
        <div className=" flex items-center justify-center ">
          <div
            onClick={() => handleOpenModal("firstModal")}
            className="w-20 h-20 hover:bg-[#43aeff86] transition-all duration-300 bg-[#43AFFF] flex items-center justify-center rounded-full cursor-pointer mt-5 mb-4"
          >
            <img src={PlayIcon} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-1.5">
          <div className="bg-[#1D1D1D] w-1/2 rounded-xl py-2">
            <p className="text-[#898989] neu-trial">Today</p>
            <h4 className="text-[#FFFFFF] neu-trial">00:00:00</h4>
          </div>
          <div className="bg-[#1D1D1D] w-1/2 rounded-xl py-2">
            <p className="text-[#898989] neu-trial">Limits</p>
            <h4 className="text-[#FFFFFF] neu-trial">00:00:00</h4>
          </div>
        </div>
      </div>

      {activeModal === "firstModal" && (
        <>
          <div
            onClick={handleCloseAll}
            className="bg-some-black active-page- overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div
              className="flex items-center justify-center h-[1vh] z-40 width100"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`${
                  openCodeView
                    ? "bg-[#141414] active-page-hash-generator code-generator max-w-[500px] p-3 md:p-5 border-radiusss"
                    : " max-w-[500px] w-full  p-5 border-radiusss bg-[#141414]"
                }`}
              >
                <div className="flex flex-col items-center ">
                  <div className=" flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5">
                    <div className="flex items-center justify-between marginAutoo bg-[#191919] w-full p-0.5 rounded-xl">
                      <p className="bg-[#141414] md:px-5  py-2 px-3  text-[10px] md:text-sm text-white rounded-xl">
                        Creating an XRP Wallet
                      </p>
                      <Link
                        to={"https://youtube.com/"}
                        className="py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E] m-auto"
                      >
                        Check video instructions
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-2 text-start justify-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4">
                  <img src={PrivacyIcon} alt="" />
                  <p onClick={handleOpenCodeViewer}>Get Transaction Hash</p>
                </div>
                {open ? (
                  <div onClick={handleSecondButton}>
                    <Button
                      className={
                        "border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent"
                      }
                      title={"Get Hash"}
                    />
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => handleOpenModal("secondModal")}
                      className={`cursor-pointer border !border-[#43AFFF] hover:bg-transparent hover:border bg-[#43AFFF] rounded-xl !text-white w-full py-3 ${
                        isCodeComplete ? (
                          <p>1 </p>
                        ) : (
                          " cursor-not-allowed border !border-[#43AFFF] rounded-xl !text-white w-full py-3 opacity-30"
                        )
                      }`}
                      title={"NEXT"}
                      disabled={!isCodeComplete}
                    >
                      NEXT
                    </button>
                  </>
                )}
                {openCodeView ? (
                  <div className="rounded-xl border-2 border-[#1A1A1A] py-5 px-2 md:px-7 mt-3">
                    <>
                      <p className="underline text-[#999C9E] text-center">
                        Hash generator
                      </p>
                      <CodeViewer
                        onAnimationComplete={() => setIsCodeComplete(true)}
                        copyText={user.token}
                      />
                    </>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}
      {activeModal === "secondModal" && (
        <div
          onClick={handleCloseAll}
          className="bg-some-black overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            className="flex items-center justify-center h-[1vh] z-40 width100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#141414] max-w-[500px] w-full  p-5 border-radiusss">
              <div className="flex flex-col items-center ">
                <div className=" flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5">
                  <div className="flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl">
                    <p className="bg-[#141414] md:px-5 px-3  py-2 text-[10px] md:text-sm text-white rounded-xl">
                      Creating an XRP Wallet
                    </p>
                    <Link
                      to={"https://youtube.com/"}
                      className="py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E]  m-auto"
                    >
                      Check video instructions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4">
                <div
                  onClick={handleClipboard2}
                  className="flex gap-2 items-center"
                >
                  <img src={PrivacyIcon} alt="" />
                  <p className="hidden md:block">{user.token}</p>
                  <p className="md:hidden block">
                    {truncateText(user.token, 20)}
                  </p>
                </div>
                {clipboard2 ? (
                  <h1>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "white" }}
                    ></i>
                  </h1>
                ) : (
                  <h1>
                    <img
                      onClick={handleClipboard2}
                      src={copyIcon}
                      alt="Copy"
                      style={{ cursor: "pointer", width: "15px" }}
                    />
                  </h1>
                )}
              </div>
              {consoleBoolean ? (
                <>
                  <button
                    onClick={() => handleOpenModal("thirdModal")}
                    className={`cursor-pointer border !border-[#43AFFF] hover:bg-transparent hover:border bg-[#43AFFF] rounded-xl !text-white w-full py-3 ${
                      isCodeComplete2 ? (
                        <p>1 </p>
                      ) : (
                        " cursor-not-allowed border !border-[#43AFFF] rounded-xl !text-white w-full py-3 opacity-30"
                      )
                    }`}
                    title={"Get Wallet"}
                    disabled={!isCodeComplete2}
                  >
                    Get Wallet
                  </button>
                  <div className="rounded-xl border-2 border-[#1A1A1A] py-5 px-2 md:px-7 mt-3">
                    <>
                      <CodeViewer2
                        onAnimationComplete={() => setIsCodeComplete2(true)}
                        copyText={user.token}
                        memoCode={codeMemo}
                      />
                    </>
                  </div>
                </>
              ) : (
                <div onClick={() => setConsoleBoolean(true)}>
                  <Button
                    className={
                      "border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent"
                    }
                    title={"Get Wallet"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {activeModal === "thirdModal" && (
        <div
          onClick={handleCloseAll}
          className="bg-some-black overlay  z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            className="flex items-center bg-red-100 justify-center h-[1vh] z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#141414] max-w-[500px] w-full  p-5 border-radiusss">
              <div className="flex flex-col items-center ">
                <div className=" flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5">
                  <div className="flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl">
                    <p className="bg-[#141414] md:px-5 px-3  py-2 text-[10px] md:text-sm text-white rounded-xl">
                      Creating an XRP Wallet
                    </p>
                    <Link
                      to={"https://youtube.com/"}
                      className="py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E]  m-auto"
                    >
                      Check video instructions
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={handleClipboard2}
                className="flex items-center justify-between gap-2 text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4"
              >
                <div className="flex gap-2 items-center">
                  <img src={PrivacyIcon} alt="" />
                  <p className="md:hidden block">{user?.token}</p>
                  <p className="md:block hidden">{user?.token}</p>
                </div>
                {clipboard2 ? (
                  <h1>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "white" }}
                    ></i>
                  </h1>
                ) : (
                  <h1>
                    <img
                      onClick={handleClipboard2}
                      src={copyIcon}
                      alt="Copy"
                      style={{ cursor: "pointer", width: "15px" }}
                    />
                  </h1>
                )}
              </div>
              <div onClick={handleClipboard2}>
                {clipboard2 ? (
                  <Button
                    className={
                      "!bg-transparent border-2 border-[#43AFFF] rounded-xl !text-white"
                    }
                    title={"Copied"}
                  ></Button>
                ) : (
                  <Button
                    className={
                      "border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent"
                    }
                    title={"Copy hash"}
                  ></Button>
                )}
              </div>

              <div className="mt-3">
                <p className="text-[#FFFFFF] text-base mt-4 mb-2.5">
                  Participation wallet
                </p>

                <div
                  onClick={handleClipboard}
                  className="flex items-center  gap-2  justify-between text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4"
                >
                  <div className="flex gap-2 items-center">
                    <img src={qrCode} alt="" />
                    <p className="hidden md:block">
                      rnPNSonfEN1TWkPH4Kwvkk3693sCT4tsZv
                    </p>
                    <p className="md:hidden block">rnPNSonfEN1TWkPH4K...</p>
                  </div>
                  {clipboard ? (
                    <i
                      onClick={handleClipboard}
                      className="fa-solid fa-check"
                      style={{ color: "white" }}
                    ></i>
                  ) : (
                    <img
                      src={copyIcon}
                      alt="Copy"
                      style={{ cursor: "pointer", width: "15px" }}
                    />
                  )}
                </div>
                <p className="text-[#FFFFFF] text-base mt-4 mb-2.5">
                  Unique memo
                </p>
                <div
                  onClick={handleClipboardSecond}
                  className="flex items-center  gap-2 text-start justify-between border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4"
                >
                  <div className="flex gap-2 items-center justify-between">
                    <p className="">{codeMemo}</p>
                  </div>
                  {secondClipboard ? (
                    <h1 className="flex gap-2 items-center cursor-pointer">
                      <img src={InformationIcon} alt="" />
                      <i
                        onClick={handleClipboardSecond}
                        className="fa-solid fa-check"
                        style={{ color: "white" }}
                      ></i>
                    </h1>
                  ) : (
                    <h1 className="flex gap-2 items-center">
                      <img src={InformationIcon} alt="" />
                      <img
                        src={copyIcon}
                        alt="Copy"
                        style={{ cursor: "pointer", width: "15px" }}
                      />
                    </h1>
                  )}
                </div>
                <div className="flex items-center text-white gap-1.5 relative">
                  <label
                    htmlFor="customCheckbox"
                    className="flex items-center cursor-pointer gap-1.5"
                  >
                    <input
                      type="checkbox"
                      id="customCheckbox"
                      className="hidden"
                    />
                    <div className="checkbox-label"></div>
                    <p>
                      <span>Minimum: 119 XRP.</span>{" "}
                      <span className="text-[#999C9E]">No maximum limit.</span>
                    </p>
                  </label>
                </div>

                <div
                  className="mt-3"
                  onClick={() => handleOpenModal("fourthModal")}
                >
                  <Button
                    className={
                      "border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent"
                    }
                    title={"I sent funds"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeModal === "fourthModal" && (
        <div
          onClick={handleCloseAll}
          className="bg-some-black overlay  z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            className="flex items-center bg-red-100 justify-center h-[1vh] z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white">
              <div className="bg-[#141414] py-4 px-3 rounded-[20px] max-w-[350px] w-full">
                <div className="bg-[#43AFFF] w-[90px] h-[90px] flex items-center justify-center rounded-full transform-element marginAuto">
                  <img className="w-[45px] h-[45px]" src={CheckIcon} alt="" />
                </div>
                <div className="neu-trial">
                  <h2 className="text-lg text-center mt-4 ">
                    You have been added to the waiting list. The greater your
                    investment, the faster you move toward your turn!
                  </h2>
                  <p className="text-center text-[#999C9E] text-xs mt-4">
                    Your farming has been successfully <br /> launched and
                    activated!
                  </p>
                  <div onClick={() => handleOpenModal("fivesModal")}>
                    <Button
                      className={"rounded-[12px] mt-7"}
                      title={"Go to Waiting List"}
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    
      {activeModal === "fivesModal" && (
        <>
          <div
            onClick={handleCloseAll}
            className="bg-some-black active-page- overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div
              className="flex items-center justify-center h-[1vh] z-40 width-media-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center w-[900px] table-element-max-w text-white justify-center">
                <div className="bg-[#141414] py-2 md:py-4 px-3 rounded-[20px] max-w-[900px] w-full !relative table-element-responsice pt-[20px]">
                  <div className="!relative w-full h-[4vh]">
                    <div className="flex items-center justify-between mb-1 md:px-5 scrol-element-table">
                      <div>
                        <h2 className="text-sm waiting-list">Waiting List</h2>
                      </div>
                      <div
                        className="w-[60%] md:w-[30%]"
                        onClick={handleMakeDeposit}
                      >
                        <div onClick={() => handleOpenModal("firstModal")}>
                          <Button
                            className={"rounded-[12px] neu-trial w-[30%]"}
                            title={"Make a deposit"}
                          ></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 bg-[#191919] w-full h-[3px] my-4"></div>

                  <div className="w-full table-element table-element-res !mt-8">
                    <table className=" w-full">
                      <thead className="thead ">
                        <tr className="bg-[#191919] ">
                          <th className="flex gap-2 items-center py-4 px-3">
                            <span className="text-[#999C9E] neu-trial">#</span>
                            <p className="neu-trial">Nickname</p>
                          </th>
                          <th className="neu-trial">Expected time</th>
                          <th className="neu-trial">Date and time</th>
                          <th className="neu-trial">Status</th>
                        </tr>
                      </thead>
                      {userData?.map((u, index) => (
                        <tbody className="" key={index}>
                          <tr
                            className={`cursor-pointer neu-trial  text-center ${
                              u.active && "bg-[#404040]"
                            }`}
                          >
                            <td className="flex items-center gap-3  py-4 px-2 rounded-full">
                              <p className="text-[#999C9E] text-sm neu-trial ">
                                {index + 1}
                              </p>
                              <div className="h-[26px] bg-[#2C2C2C] flex items-center justify-center !rounded-full !w-[26px]">
                                <img className="" src={userCircle} alt="" />
                              </div>
                              <p className="text-sm neu-trial">{u.name}</p>
                            </td>
                            <td className="text-sm neu-trial">
                              <p>15 minute</p>
                            </td>
                            <td className="text-sm">
                              {u.active
                                ? new Date().toLocaleString("en-GB", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                : u.dateAndTime}
                            </td>
                            {u.status === "Completed" ? (
                              <td classNa me="neu-trial">
                                <div className="bg-[#172518] !w-fit marginAuto p-2 text-sm rounded-md text-[#28A745]">
                                  <div className="flex items-center !w-fit justify-center gap-2">
                                    <div className="!w-2 rounded-full h-2 bg-[#28A745]"></div>
                                    <div className="!w-fit">Completed</div>
                                  </div>
                                </div>
                              </td>
                            ) : (
                              <td className="neu-trial">
                                <div className="bg-[#251B17] !w-fit marginAuto p-2 text-sm rounded-md text-[#ED5C1C]">
                                  <div className="flex items-center !w-fit justify-center gap-2">
                                    <div className="!w-2 rounded-full h-2 bg-[#ED5C1C]"></div>
                                    <div className="!w-fit">Process</div>
                                  </div>
                                </div>
                              </td>
                            )}
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
