import React, { useState } from "react";
import NewFile from "../components/buttons/newFile";
import Logo from "../components/logo";
import CalendarIcon from "../assets/icons/calendar.svg";
import DiscoverIcon from "../assets/icons/discover.svg";
import PasswordIcon from "../assets/icons/password.svg";
import Farming from "../components/shared/no-active-page/farming";
import GetStarted from "../components/shared/no-active-page/getStarted";
import FeaturedPlugin from "../components/shared/no-active-page/featured-plugin";
import HomePageDiagram from "../components/shared/no-active-page/home-page-diagram";
import HomePageRight from "../components/shared/no-active-page/home-page-right";
import Diagram from "../components/shared/no-active-page/diagram";
import CloseIcon from "../assets/icons/Close.svg";
import chartIcon from "../assets/icons/chart.svg";
import DashboardIcon2 from "../assets/icons/dashboard-icon-2.svg";
import Dropdown from "../components/shared/dropdown";
import Dropdown2 from "../components/shared/dropdown-2";
import Dropdown3 from "../components/shared/dropdown-3";
import TooggleDropdown from "../components/accordion";
import Browsing from "../assets/icons/browsing.svg";
import Button from "../components/buttons/signButtons";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [navbar, setNavbar] = useState(false);
  const dropdownOptions = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const [failModalBoolean, setFailModalBoolean] = useState(false);

  const navbarData = [
    {
      icon: CalendarIcon,
      text: "File Expoler",
    },
    {
      icon: Browsing,
      text: "Solidity compiler",
    },
    {
      icon: DiscoverIcon,
      text: "Deploy & run transactions",
    },
    {
      icon: PasswordIcon,
      text: "Solhint Linter",
    },
  ];

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className="flex">
        <div data-aos="fade-right" className="hidden 2xl:block fixed">
          <div className="h-[100vh] main-page-sidebar fixed top-0">
            <div className="main-page-sidebar px-[50px] py-5">
              <Logo />
              <div className="flex items-center justify-between rounded pr-2  py-1">
                <input
                  placeholder="SEARCH"
                  className="text-[#898989] text-xs bg-transparent outline-none  py-3 px-2"
                  type="text"
                />
                <div className="flex items-center gap-1">
                  <button className="text-[#616569] bg-[#2B3236] p-1 rounded text-[10px]">
                    CTRL
                  </button>
                  <button className="text-[#616569] bg-[#2B3236] p-1 rounded text-[10px]">
                    K
                  </button>
                </div>
              </div>
              <NewFile />
              <div className="border-top-bottom">
                <ul>
                  {navbarData.map((nav, index) => (
                    <div key={index} className="mb-4"  onClick={() => setFailModalBoolean(true)}>
                      <div className="flex gap-2 items-center cursor-pointer sidebar-text trial">
                        <img src={nav.icon} alt="" className="w-6 h-6" />
                        <h1 className={`montreal`}>{nav.text}</h1>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="">
                <p className="text-[#535353] mb-4 mt-8 grotesk">3 PROJECTS</p>
                <div className="flex items-center justify-between mb-4 cursor-pointer dropdown">
                  <Dropdown />
                </div>
                <div className="flex items-center justify-between mb-4 cursor-pointer dropdown">
                  <Dropdown2 />
                </div>
                <div className="flex items-center justify-between cursor-pointer dropdown">
                  <Dropdown3 />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-[#565A5E] justify-center px-[50px] py-5 absolute bottom-0">
              <div className="flex gap-4 items-center">
                <p className="text-[10px] neu-trial">XrpAI</p>
                <p className="text-[10px] neu-trial">v0.7.3</p>
              </div>
              <p className="w-full text-[10px] neu-trial -z-1">
                © 2024 XrpAI - Rights reserved
              </p>
            </div>
          </div>
        </div>
        <div className="w-full 2xl:ml-[320px]">
          <div>
            <div
              data-aos="fade-down"
              className="text-white flex items-center justify-between py-5 px-3 md:py-10 md:px-8"
            >
              <div className="flex items-center gap-1">
                <div onClick={handleNavbar} className=" 2xl:hidden">
                  <i className="fa-classic fa-solid fa-bars fa-fw"></i>
                </div>
                <p className="grotesk text-[#616569] uppercase">Home</p>
              </div>
              <div className="flex gap-3 items-center ">
                <Link to={"/signin"}>
                  <button className="neu-trial transition duration-300 hover:bg-transparent hover:border-[#43AFFF] hover:text-white border border-transparent bg-[#43AFFF] py-1.5  md:py-4 px-5 md:px-10 rounded-[9px] text-[14px] text-black cursor-pointer">
                    Sign in
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="neu-trial transition duration-300 hover:border-[#999C9E] bg-[#141414] border border-transparent py-1.5 md:py-4 px-5 md:px-10 rounded-[9px] text-[14px] text-[#999C9E] cursor-pointer">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:flex border-t  border-t-[#1A1A1A] w-full">
              <div className=" w-full">
                <div className="md:flex w-full justify-between gap-3.5 px-0 md:py-3 md:px-8">
                  <Farming />
                  <GetStarted />
                  <FeaturedPlugin />
                </div>
                <div className=" border-t border-[#1A1A1A]">
                  <div
                    data-aos="fade-up"
                    className="w-full justify-between md:flex gap-16 py-4 px-3 md:py-9 md:px-8"
                  >
                    <div className="md:w-[40%]">
                      <HomePageDiagram />
                    </div>
                    <div className="md:w-[60%]">
                      <div className="text-white flex justify-between items-center mt-10 lg:mt-0 mb-6">
                        <h2 className="text-xl neu-trial">Historical Value</h2>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-4">
                            <img
                              className="size-6 cursor-pointer"
                              src={chartIcon}
                              alt=""
                            />
                            <img
                              className="size-6 cursor-pointer"
                              src={DashboardIcon2}
                              alt=""
                            />
                          </div>
                          <TooggleDropdown
                            options={dropdownOptions}
                            placeholder="Week"
                          />
                        </div>
                      </div>
                      <Diagram />
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className=" border-l border-l-[#1A1A1A] "
              >
                <HomePageRight />
              </div>
            </div>
          </div>
          <div className="w-full border-t border-t-[#1A1A1A] py-2 px-4 md:py-5 md:px-7 ">
            <div className="flex justify-between items-start">
              <div className="flex gap-6 text-white">
                <p className="underline-text cursor-pointer grotesk">
                  Terminal
                </p>
                <p className="text-[#616569] cursor-pointer grotesk">Output</p>
              </div>
              <div className="cursor-pointer">
                <img src={CloseIcon} alt="" />
              </div>
            </div>
            <div className="grotesk">
              <h1 className="text-[#898989]">▀▄░▄▀ ░█▀▀█ ░█▀▀█ ─█▀▀█ ▀█▀</h1>
              <h1 className="text-[#898989]">─░█── ░█▄▄▀ ░█▄▄█ ░█▄▄█ ░█─</h1>
              <h1 className="text-[#898989]">▄▀░▀▄ ░█─░█ ░█─── ░█─░█ ▄█▄</h1>
              <p className="text-[#898989] text-sm mt-4 mb-4">
                Welcome to XrpAI 0.33.0
              </p>
              <p className="text-[#898989] text-sm">
                Your files are stored in indexedDB, 292.09 KB / 279.09 GB used{" "}
                <br />
              </p>{" "}
              <br />
              <p className="text-[#898989] text-sm">
                You can use this terminal to: <br />
                <li>Check transactions details and start debugging.</li>
                <li>
                  Execute JavaScript scripts: <br />
                       - Input a script directly in the command line interface  {" "}
                  <br />      - Select a Javascript file in the file explorer
                  and then run `remix.execute{"()"}` or `remix.exeCurrent{"()"}`
                  in the command line interface   <br />
                       - Right click on a JavaScript file in the file explorer
                  and then click `Run`
                </li>
                The following libra{"}"}ies are accessible: web3 version 1.5.2
                hers.js remix Type the library name to see available commands.
                {">"}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {failModalBoolean && (
        <div
          onClick={() => setFailModalBoolean(false)}
          className="bg-some-black overlay  z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            className="flex items-center bg-red-100 justify-center h-[1vh] z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white">
              <div className="bg-[#141414] py-4 px-3 rounded-[20px] max-w-[350px] w-full">
                <div className="bg-[#43AFFF] w-[90px] h-[90px] flex items-center justify-center rounded-full transform-element marginAuto">
                  <svg
                    viewBox="0 0 50 50"
                    fill="none"
                    className="w-[45px] h-[45px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.5005 25C47.5005 12.5736 37.4269 2.5 25.0005 2.5C12.5741 2.5 2.50049 12.5736 2.50049 25C2.50049 37.4264 12.5741 47.5 25.0005 47.5C37.4269 47.5 47.5005 37.4264 47.5005 25Z"
                      stroke="white"
                      strokeWidth="3.375"
                    />
                    <path
                      d="M25.5449 36.25V25C25.5449 23.9393 25.5449 23.409 25.2154 23.0795C24.8859 22.75 24.3556 22.75 23.2949 22.75"
                      stroke="white"
                      strokeWidth="3.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.982 16H25.0022"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="neu-trial">
                  <h2 className="text-lg text-center mt-4 ">
                    Opening a section requires you to <br /> start the farming
                    process!
                  </h2>
                  <p className="text-center text-[#999C9E] text-xs mt-4">
                    Please register to continue
                  </p>
                  <div onClick={() => setFailModalBoolean(false)}>
                    <Button
                      className={"rounded-[12px] mt-7"}
                      title={"Start the farming process"}
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {navbar ? (
        <div className="bg-[#141414] sidebar z-30">
          <div className="sidebar-div w-full h-[100vh] absolute top-0 left-0 z-50">
            <div
              onClick={handleNavbar}
              className="  sidebar-new-div  w-[20%] h-[100vh] absolute top-0 right-0 z-50"
            ></div>
            <div className="h-[100vh] fixed w-[80%] overflow-scroll text-white">
              <div className="px-[20px] py-5">
                <div className="flex items-center justify-between">
                  <Logo />
                </div>
                <div className="flex items-center justify-between rounded pr-2  py-1">
                  <input
                    placeholder="SEARCH"
                    className="text-[#898989] text-xs bg-transparent outline-none  py-3 px-2"
                    type="text"
                  />
                  <div className="flex items-center gap-1">
                    <button className="text-[#616569] bg-[#2B3236] p-1 rounded text-[10px]">
                      CTRL
                    </button>
                    <button className="text-[#616569] bg-[#2B3236] p-1 rounded text-[10px]">
                      K
                    </button>
                  </div>
                </div>
                <NewFile />
                <div className="border-top-bottom">
                  <ul>
                    {navbarData.map((nav, index) => (
                      <div key={index} className="mb-4"  onClick={() => setFailModalBoolean(true)}>
                        <div className="flex gap-2 items-center cursor-pointer sidebar-text trial">
                          <img src={nav.icon} alt="" className="w-6 h-6" />
                          <h1 className={`montreal`}>{nav.text}</h1>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="">
                  <p className="text-[#535353] mt-4 mb-2 md:mb-4 md:mt-8 grotesk">
                    3 PROJECTS
                  </p>
                  <div className="flex items-center justify-between mb-4 cursor-pointer dropdown">
                    <Dropdown />
                  </div>
                  <div className="flex items-center justify-between mb-4 cursor-pointer dropdown">
                    <Dropdown2 />
                  </div>
                  <div className="flex items-center justify-between cursor-pointer dropdown">
                    <Dropdown3 />
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-[#565A5E] justify-center px-[20px] py-5 absolute bottom-0">
                <div className="flex gap-4 items-center">
                  <p className="text-[10px]">XrpAI</p>
                  <p className="text-[10px]">v0.7.3</p>
                </div>
                <p className="w-full text-[10px] -z-1">
                  © 2024 XrpAI - Rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
