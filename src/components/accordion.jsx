import React, { useState, useRef, useEffect } from 'react'
import DownIcon from '../assets/icons/down-2.svg'
import UpIcon from '../assets/icons/up-icon.svg'

const TooggleDropdown = ({ options, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = option => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className='relative inline-block' ref={dropdownRef}>
      <div
        className='flex gap-3 items-center py-4 px-5 border border-[#1A1A1A] rounded-full cursor-pointer'
        onClick={toggleDropdown}
      >
        <span className='neu-trial'>{selectedOption || placeholder}</span>
        {isOpen ? <img className='w-3.5 opacity-40' src={UpIcon} alt='' /> : <img  src={DownIcon} alt='' />}
      </div>
      <div className='bg-[#1A1A1A]'>
        {isOpen && (
          <ul className='absolute rounded-3xl w-full mt-1 shadow-md  z-40 bg-[#1A1A1A]'>
            {options.map((option, index) => (
              <li
                key={index}
                className='flex neu-trial gap-3 items-center py-4 px-5 border border-[#1A1A1A] rounded-full cursor-pointer'
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TooggleDropdown
