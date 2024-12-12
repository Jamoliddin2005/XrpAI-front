import React from 'react'
import DownIcon from '../../../assets/icons/down-2.svg'
import xIcon from '../../../assets/icons/x-white.svg'
import Accordion from '../../accordion'
import TooggleDropdown from '../../accordion'

export default function HomePageDiagramActive () {
  const dropdownOptions = ['Network 1', 'Network 2', 'Network 3', 'Network 4']

  return (
    <div data-aos="fade-up" className='text-white'>
      <div className='flex items-center justify-between mt-5 md:mt-0 mb-3 md:mb-6'>
        <h2 className='text-xl neu-trial'>Details</h2>
          <TooggleDropdown
            options={dropdownOptions}
            placeholder='By Network'
          />
      </div>
      <div className='bg-[#141414] rounded-[14px]  pb-10'>
        <h2 className='text-center text-white text-sm mb-5 md:mb-2 pt-5 neu-trial'>
          Ripple XRP Testnet Faucet
        </h2>
        <div className='md:mt-5 w-48 h-48 rounded-full blue-board border-t-blue-500 border-5 flex items-center justify-center marginAuto'>
          <div className='text-center'>
            <img className='size-9 marginAuto' src={xIcon} alt='' />
            <p className='text-xl text-white neu-trial'>99.99%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
