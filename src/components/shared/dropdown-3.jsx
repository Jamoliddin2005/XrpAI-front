import React, { useState } from "react";
import UpIcon from "../../assets/icons/up-icon.svg";
import DownIcon from "../../assets/icons/down-2.svg";
import { Link } from "react-router-dom";

const Dropdown3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navData = [
    { id: 1, name: "Farm" },
    { id: 2, name: "Assets" },
    { id: 3, name: "Analytics" },
    { id: 4, name: "Story" },
    { id: 5, name: "Community" },
    { id: 6, name: "Load Volumes" },
  ];

  return (
    <div className={`w-full neu-trial ${isOpen ? "relative w-full z-40 rounded-lg bg-[#141414]" : ''}`}>
      <div
        className={`w-full ${
          isOpen ? "bg-[#141414]  rounded-lg py-1.5 px-2.5" : ""
        } transition-all duration-300 `}
      >
        <button
          onClick={toggleDropdown}
          className="text-white rounded-md flex items-center justify-between w-full"
        >
          <p className={`grotesk ${isOpen ? "text-white" : "text-[#535353]"}`}>MINI: SUPPORT</p>
          {isOpen ? (
            <img src={UpIcon} alt="Up Icon" />
          ) : (
            <img src={DownIcon} alt="Down Icon" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className={`mt-2  w-full rounded-md transition-all duration-300 ease-in-out z-30`}
        >
          <ul className="py-1 rounded-md z-40">
            {navData.map((nav) => (
             <Link to={'/'} key={nav.id}>
             <div className='px-4 neu-trial py-2 transition-all duration-300 ease-in-out hover:bg-[#171717] z-40 cursor-pointer'>
               {nav.name}
             </div>
           </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown3;
