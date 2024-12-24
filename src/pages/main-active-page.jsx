import React, { useState } from "react";
import NewFile from "../components/buttons/newFile";
import Logo from "../components/logo";
import CalendarIcon from "../assets/icons/calendar.svg";
import DiscoverIcon from "../assets/icons/discover.svg";
import PasswordIcon from "../assets/icons/password.svg";
import Diagram from "../components/shared/no-active-page/diagram";
import CloseIcon from "../assets/icons/Close.svg";
import chartIcon from "../assets/icons/chart.svg";
import DashboardIcon2 from "../assets/icons/dashboard-icon-2.svg";
import RightIcon from "../assets/icons/right-icon.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import BellIcon from "../assets/icons/bell.svg";
import ActivePageFarming from "../components/shared/active-page/active-page-farming";
import GetStartedActive from "../components/shared/active-page/getStarted";
import FeaturedPluginActive from "../components/shared/active-page/featured-plugin";
import HomePageDiagramActive from "../components/shared/active-page/diagram";
import HomePageRightActive from "../components/shared/active-page/home-page-right";
import Dropdown from "../components/shared/dropdown";
import Dropdown2 from "../components/shared/dropdown-2";
import Dropdown3 from "../components/shared/dropdown-3";
import TooggleDropdown from "../components/accordion";
import Browsing from "../assets/icons/browsing.svg";
import { Link, useNavigate } from "react-router-dom";
import Calculator from "../components/shared/calculator";

export default function MainActivePage({ user }) {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("token", "");
    navigate("/");
    window.location.reload();
  };

  const navbarData = [
    {
      icon: CalendarIcon,
      text: "File Expoler",
      submenu: [
        "Farm",
        "Assets",
        "Analytics",
        "Story",
        "Community",
        "Load Volumes",
      ],
    },
    {
      icon: Browsing,
      text: "Solidity compiler",
      submenu: [
        "Farm",
        "Assets",
        "Analytics",
        "Story",
        "Community",
        "Load Volumes",
      ],
    },
    {
      icon: DiscoverIcon,
      text: "Deploy & run transactions",
      submenu: [
        "Farm",
        "Assets",
        "Analytics",
        "Story",
        "Community",
        "Load Volumes",
      ],
    },
    {
      icon: PasswordIcon,
      text: "Solhint Linter",
      submenu: [
        "Farm",
        "Assets",
        "Analytics",
        "Story",
        "Community",
        "Load Volumes",
      ],
    },
  ];

  const dropdownOptions = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Calculator />

      <div className="flex">
        <div data-aos="fade-right" className="hidden 2xl:block  fixed">
          <div className="h-[100vh] main-page-sidebar fixed">
            <div className="main-page-sidebar px-[50px] py-5 z-40">
              <Logo />
              <div className="flex items-center justify-between border border-[#2B3236] pr-2 rounded py-1">
                <input
                  placeholder="SEARCH"
                  className="text-[#898989] text-xs bg-transparent w-[95%] outline-none  py-3 px-2 grotesk"
                  type="text"
                />
                <div className="flex items-center gap-1 ">
                  <button className="text-[#616569] bg-[#2B3236] p-1 rounded text-[10px] grotesk">
                    CTRL
                  </button>
                  <button className="text-[#616569] bg-[#2B3236] p-1 rounded text-[10px] grotesk">
                    K
                  </button>
                </div>
              </div>
              <NewFile />
              <div className="border-top-bottom">
                <ul>
                  {navbarData.map((nav, index) => (
                    <div key={index} className="mb-4">
                      <div
                        className="flex gap-2 items-center cursor-pointer sidebar-text trial"
                        onClick={() => toggleAccordion(index)}
                      >
                        <img
                          src={nav.icon}
                          alt=""
                          className="w-6 h-6"
                          style={
                            activeIndex === index ? { filter: "invert(1)" } : {}
                          }
                        />
                        <h1
                          className={`montreal ${
                            activeIndex === index && "text-[#fff]"
                          }`}
                        >
                          {nav.text}
                        </h1>
                      </div>
                      {activeIndex === index && (
                        <ul className="ml-8 mt-2 space-y-2">
                          {nav.submenu.map((item, subIndex) => (
                            <li key={subIndex} className="mt-2">
                              <Link
                                to={`/main-active/${item
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                                className="text-[#fff] hover:text-blue-500 transition-all duration-300 "
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[#535353] mb-4 mt-8">3 PROJECTS</p>
                <div className="flex items-center justify-between mb-4 cursor-pointer dropdown ">
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
            <div className="flex flex-col text-[#565A5E] justify-center px-[50px] py-5 absolute bottom-0 ">
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
            <div className="text-white flex items-center justify-between py-5 px-3 md:py-10 md:px-8">
              <div
                data-aos="fade-down"
                className="flex items-center gap-2 md:gap-4"
              >
                <div onClick={handleNavbar} className="block 2xl:hidden">
                  <i className="fa-classic fa-solid fa-bars fa-fw"></i>
                </div>
                <p className="text-[#616569] text-xs grotesk">HOME</p>
                <img src={RightIcon} alt="" />
                <p className="text-[#616569] text-xs grotesk">NEW FILE</p>
                <img src={RightIcon} alt="" />
                <p className="text-[#43AFFF] text-xs grotesk">RIPPLE</p>
              </div>

              <div className="flex gap-1.5 md:gap-3 items-center ">
                <div className="hidden md:flex gap-2">
                  <div className="bg-[#141414] size-10 flex items-center justify-center rounded-lg cursor-pointer bellDiv">
                    <img className="bellIcon" src={BellIcon} alt="" />
                  </div>
                  <div className="bg-[#141414] size-10 flex items-center justify-center rounded-lg cursor-pointer settingsDiv">
                    <img className="settingsIcon" src={SettingsIcon} alt="" />
                  </div>
                </div>
                <Link onClick={handleLogOut} to={"/"}>
                  <button className="bg-[#141414] button px-4 montreal py-2.5 md:px-10 rounded-[9px] text-[14px] text-[#999C9E] cursor-pointer">
                    Log out
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:flex border-t  border-t-[#1A1A1A] w-full">
              <div className=" w-full">
                <div className="md:flex w-full justify-between gap-3.5 px-0 md:py-3 md:px-8">
                  <ActivePageFarming user={user} />
                  <GetStartedActive />
                  <FeaturedPluginActive />
                </div>
                <div className=" border-t border-[#1A1A1A]">
                  <div className="w-full justify-between md:flex gap-16 py-4 px-3 md:py-9 md:px-8">
                    <div className="md:w-[40%]">
                      <HomePageDiagramActive />
                    </div>
                    <div data-aos="fade-up" className="md:w-[60%]">
                      <div className="text-white flex justify-between items-center mt-10 md:mt-0 mb-6">
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
                <HomePageRightActive />
              </div>
            </div>
          </div>
          <div className="w-full border-t border-t-[#1A1A1A] py-2 px-4 md:py-5 md:px-7 ">
            <div className="flex justify-between items-start">
              <div className="flex gap-6 text-white">
                <p className="underline-text grotesk cursor-pointer ">
                  Terminal
                </p>
                <p className="grotesk cursor-pointer text-[#616569]">Output</p>
              </div>
              <div>
                <img src={CloseIcon} alt="" />
              </div>
            </div>
            <div className="grotesk">
              <h1 className="text-[#898989] none-text">
                ▀▄░▄▀ ░█▀▀█ ░█▀▀█ ─█▀▀█ ▀█▀
              </h1>
              <h1 className="text-[#898989] none-text">
                ─░█── ░█▄▄▀ ░█▄▄█ ░█▄▄█ ░█─
              </h1>
              <h1 className="text-[#898989] none-text">
                ▄▀░▀▄ ░█─░█ ░█─── ░█─░█ ▄█▄
              </h1>
              <br className="hidden md:block" />
              <p className="text-[#898989] text-sm mb-4">
                Welcome to XrpAI 0.33.0
              </p>
              <p className="text-[#898989] text-sm">
                Your files are stored in indexedDB, 292.09 KB / 279.09 GB used
              </p>{" "}
              <br />
              <p className="text-[#898989] text-sm">
                You can use this terminal to: <br />
                <li>Check transactions details and start debugging.</li>
                <li>
                  Execute JavaScript scripts: <br />
                  - Input a script directly in the command line interface <br />{" "}
                  - Select a Javascript file in the file explorer and then run
                  `remix.execute{"()"}` or `remix.exeCurrent{"()"}` in the
                  command line interface <br /> - Right click on a JavaScript
                  file in the file explorer and then click `Run`
                </li>
                The following libraries are accessible: web3 version 1.5.2
                hers.js remix Type the library name to see available commands.
              </p>
            </div>
          </div>
        </div>
      </div>
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
                  <div className="md:hidden flex gap-1.5 md:gap-3 items-center">
                    <div className="flex gap-2">
                      <div className="bg-[#0E0F11] size-10 flex items-center justify-center rounded-lg cursor-pointer bellDiv">
                        <img className="bellIcon" src={BellIcon} alt="" />
                      </div>
                      <div className="bg-[#0E0F11] size-10 flex items-center justify-center rounded-lg cursor-pointer settingsDiv">
                        <img
                          className="settingsIcon"
                          src={SettingsIcon}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded pr-2 border border-[#2B3236] py-1">
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
                    <div key={index} className="mb-4">
                      <div
                        className="flex gap-2 items-center cursor-pointer sidebar-text trial"
                        onClick={() => toggleAccordion(index)}
                      >
                        <img
                          src={nav.icon}
                          alt=""
                          className="w-6 h-6"
                          style={
                            activeIndex === index ? { filter: "invert(1)" } : {}
                          }
                        />
                        <h1
                          className={`montreal ${
                            activeIndex === index && "text-[#fff]"
                          }`}
                        >
                          {nav.text}
                        </h1>
                      </div>
                      {activeIndex === index && (
                        <ul className="ml-8 mt-2 space-y-2">
                          {nav.submenu.map((item, subIndex) => (
                            <li key={subIndex} className="mt-2">
                              <Link
                                to={`/main-active/${item
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                                className="text-[#fff] hover:text-blue-500 transition-all duration-300 "
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
