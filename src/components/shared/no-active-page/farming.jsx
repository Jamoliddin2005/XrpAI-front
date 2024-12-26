import React, { useState, useEffect } from "react";
import PlayIcon from "../../../assets/icons/play.svg";
import PrivacyIcon from "../../../assets/icons/privacy.svg";
import Button from "../../buttons/signButtons";
import copyIcon from "../../../assets/icons/copy-icon.svg";
import qrCode from "../../../assets/icons/qr-code.svg";
import CodeViewer from "../../hideCode";
import CodeViewer2 from "../../hideCode-notRegistered";
import Calculator from "../calculator";
import InformationIcon from "../../../assets/images/information-circle.svg";
import CheckIcon from "../../../assets/images/check.svg";
import userCircle from "../../../assets/images/user-circle.svg";
import { Link } from "react-router-dom";

export default function ActivePageFarming() {
  const [open, setOpen] = useState(true);
  const [clipboard, setClipboard] = useState(false);
  const [clipboard2, setClipboard2] = useState(false);
  const [openCodeView, setOpenCodeView] = useState(false);
  const [copyText2, setCopyText2] = useState("");
  const [calculator, setCalculator] = useState(false);
  const [isCodeComplete, setIsCodeComplete] = useState(false);
  const [isCodeComplete2, setIsCodeComplete2] = useState(false);
  const [secondClipboard, setSecondClipboard] = useState(false);
  const [consoleBoolean, setConsoleBoolean] = useState(false);
  const [randomCash, setRandomCash] = useState("");
  const [activeModal, setActiveModal] = useState(null);
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
      expextedTime: "12 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "22 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "13 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "25 minutes",
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
      expextedTime: "21 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "31 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "22 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "11 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "3 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "34 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "36 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "27 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "18 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "29 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "31 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "9 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "7 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "5 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "34 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "22 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "12 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "21 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "11 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "UserPayed",
      icon: userCircle,
      expextedTime: "19 minutes",
      dateAndTime: "15/10/2024, 14:32",
      status: "Completed",
    },
    {
      name: "User789",
      icon: userCircle,
      expextedTime: "21 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User101",
      icon: userCircle,
      expextedTime: "6 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Process",
    },
    {
      name: "User202",
      icon: userCircle,
      expextedTime: "53 minutes",
      dateAndTime: "15/10/2024, 14:30",
      status: "Completed",
    },
    {
      name: "User123",
      icon: userCircle,
      expextedTime: "22 minutes",
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
      expextedTime: "29 minutes",
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
      expextedTime: "31 minutes",
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
      dateAndTime: "15.10.2024 14:30",
      status: "Process",
    },
  ];

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

  const handleCalculator = () => {
    setCalculator(!calculator);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const handleCloseAll = () => {
    setActiveModal(null);
    setOpenCodeView(false);
    setOpen(true);
    setIsCodeComplete(false);
    setIsCodeComplete2(false);
    setConsoleBoolean(false);
  };

  const handleClipboard = () => {
    setClipboard(true);
    setTimeout(() => {
      setClipboard(false);
    }, 3000);
    navigator.clipboard.writeText(randomCash).then(() => {
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

  function generateRandomText(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const copyText = generateRandomText(65);

  useEffect(() => {
    const randomString = copyText;
    setCopyText2(randomString);
  }, []);

  const handleMakeDeposit = () => {
    setOpenCodeView(false);
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

  const availableTokens = [
    "rwkKmLEpfx6BVDrs6bhiwncsFgPntLaY7i",
    "rfqRff8Jp8ponq1Rq1nRy5HYDvGGNLHo4m",
    "rLKPyAGWd5ZJMsPnfLR9rSu9JUiMokGxVm",
    "rfrStx3zLYQpyz1nAav9SHn1WoNoQrhaKw",
    "rB1bY7rSdzT3NVGYJNJ4FonroGi1MTLopF",
    "rsPwMrK9B8kXaw1aMum1yVs7qbhjTHSDRW",
    "rnCUjUQMZCMYD1Vb5XLHQ5qgFhwerSmznp",
    "rEDrAdvtmiD1dgpzewYBLWhRhwApor4Rjy",
    "rBzTCwM1rMdi4zoUr4HyY1s1TJ9wf9KZz",
    "rn3TgmvkjSiek51moYKJ4Hds6KfaAD5cJR",
    "rBupSWiAmDJxX25DaCkpWMik4Xg2K4Y5eb",
    "rwaBdkg5KSn7F7BqtyheXJhDuC38Es35eY",
    "rDmZSqHLghomDhjMi6KuM5CoyKcaRjbF3z",
    "rH6za3AF4nA8DBgLs7DcWsguqWrb2Hocok",
    "rsvCv3gAHQbCzYpmcrj3vpP6UH4FvAgtkZ",
    "r3Aua39NqzmjwtjBXVNYX12rr1yH35dRX",
    "rhpyaVSsXWhsoxEeSkPDk5eXFsAcPCbd9P",
    "rNMZuPd7eXZkktinGYJmUSA5YmS5bUNhLk",
    "rnL1Ni5FPLwGWD5F6E8MkcneqYxZPpnJP3",
    "rDGwKw7qJqrWWe2unLaxLehZedWv8SDBxf",
    "rP6DocMtScPXYiYtv8hwupRRJpAtA1fuVp",
    "r3kSg4zwEMWLwLBPFPDfuK9ja9yrShhboa",
    "rG6khTY8q2SbfiDAaXabBLGwSxjQfwZzi6",
    "rsbYWYXFw2dzTh1RGEso7jR5FyYQ86qvZV",
    "r9Jx3fPG2rXhVZY96z2mCvifMa3izSZQ4e",
    "rsYr37jCgMbTksxJnq7924xkhDpxaYdYfL",
    "rpjeVBSuYWH2xzHXD4cCKPvrybE2qb75RD",
    "rZBSqrXkEyRuU1WfVZpVn4LUWfWcxxoa8",
    "rwz1bBRhJnEhuSfDj5tQHaYd6wncCt23sY",
    "r9kKzzUQpsMLgCvC1uGysC78ZkzbZd4ReM",
    "rHTW8woW82Ydprb3KBsYGF7bzQQppMQxD8",
    "rfsXLSfbptuA6Jc7KyKtCvLnqxPFL7NMkh",
    "rwycD6NrmJSdZFwCeipG3FGNrBJaH2kXGY",
    "r9NY1gYCDUtNjYHXAAPLC32TXXMsZGZojN",
    "rKsQePEWEuf8j7DRx3oW6tuqSPqnF4Gku5",
    "r3w4YRD7VqQL9tedKmV5qxJdNt1envoJRg",
    "rNx9DDMSnPB7PK66PNsfDKY81CtyEYvySd",
    "rM8VApRhWh3ddc1dEsy4JjCWAtAPoF6sds",
    "rfv3Ymf8LkEZsNdPJ4RGjWqmAi1ar1z3Qd",
    "rfs6jkofjofDUzL32tZ3Xmx7LuNtTmZFH2",
    "rRzJmJpv3qvsw6KQV52fUpfi2SxfhAQo1",
    "rDst4HyExXRNbMPoWdV3XDjYMBAPYGLKCr",
    "rDzgHLjWPvJ7dh2sRPqP3sQSNWPNCoz8Qy",
    "rfL1mrEAnKMd1FruFv92VkNCEzUgQ1Vjr1",
    "rMgBWzcUPApVfVq2GLaYd9JDMr4aS3zmiJ",
    "rDsbXyu1EHJQqsoUSrkGMCDMn93ss6RD7b",
    "rEkUv3ZozVrfMogSkUG4pAMzhpvhw9saWw",
    "rH6A4GfkwtS4TXoSaCrk1i2B6dc8tmQB3k",
    "rUeXH5AhqMntwSqy3xB3Kh3e8diyGGqjmJ",
    "rwkKmLEpfx6BVDrs6bhiwncsFgPntLaY7i",
    "rfqRff8Jp8ponq1Rq1nRy5HYDvGGNLHo4m",
    "rLKPyAGWd5ZJMsPnfLR9rSu9JUiMokGxVm",
    "rfrStx3zLYQpyz1nAav9SHn1WoNoQrhaKw",
    "rB1bY7rSdzT3NVGYJNJ4FonroGi1MTLopF",
    "rsPwMrK9B8kXaw1aMum1yVs7qbhjTHSDRW",
    "rnCUjUQMZCMYD1Vb5XLHQ5qgFhwerSmznp",
    "rEDrAdvtmiD1dgpzewYBLWhRhwApor4Rjy",
    "rBzTCwM1rMdi4zoUr4HyY1s1TJ9wf9KZz",
    "rn3TgmvkjSiek51moYKJ4Hds6KfaAD5cJR",
    "rBupSWiAmDJxX25DaCkpWMik4Xg2K4Y5eb",
    "rwaBdkg5KSn7F7BqtyheXJhDuC38Es35eY",
    "rDmZSqHLghomDhjMi6KuM5CoyKcaRjbF3z",
    "rH6za3AF4nA8DBgLs7DcWsguqWrb2Hocok",
    "rsvCv3gAHQbCzYpmcrj3vpP6UH4FvAgtkZ",
    "r3Aua39NqzmjwtjBXVNYX12rr1yH35dRX",
    "rhpyaVSsXWhsoxEeSkPDk5eXFsAcPCbd9P",
    "rNMZuPd7eXZkktinGYJmUSA5YmS5bUNhLk",
    "rnL1Ni5FPLwGWD5F6E8MkcneqYxZPpnJP3",
    "rDGwKw7qJqrWWe2unLaxLehZedWv8SDBxf",
    "rP6DocMtScPXYiYtv8hwupRRJpAtA1fuVp",
    "r3kSg4zwEMWLwLBPFPDfuK9ja9yrShhboa",
    "rG6khTY8q2SbfiDAaXabBLGwSxjQfwZzi6",
    "rsbYWYXFw2dzTh1RGEso7jR5FyYQ86qvZV",
    "r9Jx3fPG2rXhVZY96z2mCvifMa3izSZQ4e",
    "rsYr37jCgMbTksxJnq7924xkhDpxaYdYfL",
    "rpjeVBSuYWH2xzHXD4cCKPvrybE2qb75RD",
    "rZBSqrXkEyRuU1WfVZpVn4LUWfWcxxoa8",
    "rwz1bBRhJnEhuSfDj5tQHaYd6wncCt23sY",
    "r9kKzzUQpsMLgCvC1uGysC78ZkzbZd4ReM",
    "rHTW8woW82Ydprb3KBsYGF7bzQQppMQxD8",
    "rfsXLSfbptuA6Jc7KyKtCvLnqxPFL7NMkh",
    "rwycD6NrmJSdZFwCeipG3FGNrBJaH2kXGY",
    "r9NY1gYCDUtNjYHXAAPLC32TXXMsZGZojN",
    "rKsQePEWEuf8j7DRx3oW6tuqSPqnF4Gku5",
  ];

  function getRandomToken() {
    const randomIndex = Math.floor(Math.random() * availableTokens.length);
    return availableTokens[randomIndex];
  }

  useEffect(() => {
    setRandomCash(getRandomToken());
  }, []);

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
                        copyText={copyText2}
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
                      className="py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E] m-auto"
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
                  <p className="hidden md:block">
                    {truncateText(copyText2, 32)}
                  </p>
                  <p className="md:hidden block">
                    {truncateText(copyText2, 20)}
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
                        copyText={copyText2}
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
                      className="py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E] m-auto"
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
                  <p className="md:block hidden">
                    {truncateText(copyText2, 32)}
                  </p>
                  <p className="md:hidden block">
                    {truncateText(copyText2, 20)}
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
                    <p className="hidden md:block">{randomCash}</p>
                    <p className="md:hidden block">
                      {truncateText(randomCash, 20)}
                    </p>
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
              className="flex items-center justify-center h-[1vh] z-40  width-media-100"
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
                    <table className="w-full">
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
                              <p>{u.expextedTime}</p>
                            </td>
                            <td className="text-sm">{u.dateAndTime}</td>
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
