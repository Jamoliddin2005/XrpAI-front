import React from 'react'
import DownIcon from "../../../assets/icons/down-2.svg"
import xIcon from "../../../assets/icons/x-icon.svg"
import TooggleDropdown from '../../accordion'

export default function HomePageDiagram() {
    const dropdownOptions = ['Network 1', 'Network 2', 'Network 3', 'Network 4']
    return (
        <div className='text-white'>
           <div className='flex items-center justify-between mt-5 md:mt-0 mb-3 md:mb-6'>
        <h2 className='text-xl neu-trial'>Details</h2>
          <TooggleDropdown
            options={dropdownOptions}
            placeholder='By Network'
          />
      </div>
            <div className='bg-[#141414] px-5 pt-5 pb-7  rounded-[14px]'>
                <h2 className='text-center text-[#898989] text-sm mb-5 neu-trial'>Ripple XRP Testnet Faucet</h2>
                <div className='w-48 h-48 rounded-full border-5 flex items-center justify-center marginAuto'>
                    <div className='text-center'>
                        <img className='ml-1 size-9' src={xIcon} alt="" />
                        <p className='text-xl neu-trial'>0.0%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
