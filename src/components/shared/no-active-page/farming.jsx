import React, { useState, useEffect } from "react";
import PlayIcon from "../../../assets/icons/play.svg";
import PrivacyIcon from "../../../assets/icons/privacy.svg";
import Button from "../../buttons/signButtons";
import copyIcon from "../../../assets/icons/copy-icon.svg";
import qrCode from "../../../assets/icons/qr-code.svg";
import CodeViewer from "../../hideCode";

export default function ActivePageFarming() {
  const [open, setOpen] = useState(true);
  const [clipboard, setClipboard] = useState(false);
  const [clipboard2, setClipboard2] = useState(false);
  const [clipboard3, setClipboard3] = useState(false);
  const [openCodeView, setOpenCodeView] = useState(false);
  const [copyText2, setCopyText2] = useState("");

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

  const handleClipboard2 = () => {
    setClipboard2(true);
    setTimeout(() => {
      setClipboard2(false);
    }, 3000);
    navigator.clipboard.writeText(copyText2).then(() => {
      setClipboard2(true);
      setTimeout(() => setClipboard2(false), 3000);
    });
  };

  const handleClipboard3 = () => {
    setClipboard3(true);
    setTimeout(() => {
      setClipboard3(false);
    }, 3000);
    navigator.clipboard.writeText(copyText3).then(() => {
      setClipboard3(true);
      setTimeout(() => setClipboard3(false), 3000);
    });
  };

  const copyText = "rnPNSonfEN1TWkPH4Kwvkk3693sCT4tsZv";
  const copyText3 = "C33B04D2E95A73D1CD0A82E93B199E";

  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  useEffect(() => {
    const randomString = generateRandomString(30);
    setCopyText2(randomString);
  }, []);

  return (
    <>
      <div
        data-aos="zoom-in"
        className="md:w-[30%] bg-[#141414] py-4 px-5 rounded-2xl text-center mb-2 lg:mb-0"
      >
        <p className="text-white text-lg neu-trial">Start Farming</p>
        <p className="hover:underline cursor-pointer neu-trial text-[#898989] text-xs">
          Check documentation
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
            <h4 className="text-[#FFFFFF] neu-trial">00:57:56</h4>
          </div>
          <div className="bg-[#1D1D1D] w-1/2 rounded-xl py-2">
            <p className="text-[#898989] neu-trial">Limits</p>
            <h4 className="text-[#FFFFFF] neu-trial">03:57:56</h4>
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
              className="flex items-center justify-center h-[1vh] z-40"
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
                      <p className="py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E]">
                        Creating an XRP Wallet
                      </p>
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
                    <div onClick={() => handleOpenModal("secondModal")}>
                      <Button
                        className={
                          "border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent"
                        }
                        title={"NEXT"}
                      />
                    </div>
                  </>
                )}
                {openCodeView ? (
                  <div className="rounded-xl border-2 border-[#1A1A1A] py-5 px-2 md:px-7 mt-3">
                    <>
                      <p className="underline text-[#999C9E] text-center">
                        Hash generator
                      </p>
                      <CodeViewer copyText={copyText2} />
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
            className="flex items-center justify-center h-[1vh] z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#141414] max-w-[500px] w-full  p-5 border-radiusss">
              <div className="flex flex-col items-center ">
                <div className=" flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5">
                  <div className="flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl">
                    <p className="bg-[#141414] md:px-5 px-3  py-2 text-[10px] md:text-sm text-white rounded-xl">
                      Creating an XRP Wallet
                    </p>
                    <p className="py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E]">
                      Creating an XRP Wallet
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4">
                <div
                  onClick={handleClipboard2}
                  className="flex gap-2 items-center"
                >
                  <img src={PrivacyIcon} alt="" />
                  <p className="hidden md:block">{copyText2}...</p>
                  <p className="md:hidden block">
                    {truncateText(copyText2, 20)}...
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
              <div onClick={() => handleOpenModal("thirdModal")}>
                <Button
                  className={
                    "border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent"
                  }
                  title={"Get Wallet"}
                />
              </div>
              <div className="mt-3">
                <p className="text-[#FFFFFF] text-base mt-4 mb-2.5">
                  Participation wallet
                </p>

                <div
                  onClick={handleClipboard}
                  className="flex items-center  gap-2 text-start justify-between border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4"
                >
                  <div className="flex gap-2 items-center justify-between">
                    <img src={qrCode} alt="" />
                    <p className="md:hidden block">rnPNSonfEN1TWkPH4Kw...</p>
                    <p className="hidden md:block">
                      rnPNSonfEN1TWkPH4Kwvkk3693sCT4tsZv
                    </p>
                  </div>
                  {clipboard ? (
                    <h1>
                      <i
                        onClick={handleClipboard}
                        className="fa-solid fa-check"
                        style={{ color: "white" }}
                      ></i>
                    </h1>
                  ) : (
                    <h1>
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
                      o
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
              </div>
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
                    <p className="py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E]">
                      Creating an XRP Wallet
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={handleClipboard2}
                className="flex items-center justify-between gap-2 text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4"
              >
                <div className="flex gap-2 items-center">
                  <img src={PrivacyIcon} alt="" />
                  <p className="md:hidden block">
                    {truncateText(copyText2, 20)}
                  </p>
                  <p className="md:block hidden">{copyText2}...</p>
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
              <div onClick={handleClipboard3}>
                {clipboard3 ? (
                  <button className="w-full transition-all duration-300 hover:bg-[#43AFFF] hover:text-white py-2.5 rounded-xl  border-2 border-[#43AFFF] text-[#43AFFF] text-sm">
                    Copied
                  </button>
                ) : (
                  <button className="w-full py-2.5 rounded-xl transition-all duration-300 hover:bg-[#43AFFF] hover:text-white border-2 border-[#43AFFF] text-[#43AFFF] text-sm">
                    Copy hash
                  </button>
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

                <div className="mt-3">
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
    </>
  );
}
