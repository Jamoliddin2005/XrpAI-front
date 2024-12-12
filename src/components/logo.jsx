import React from 'react'
import LogoIcon from "../assets/icons/logo.svg"

export default function Logo() {
  return (
    <div className='flex items-center gap-4 mb-4'>
        <div>
            <img src={LogoIcon} alt="" />
        </div>
        <div>
            <h2 className='neu-trial'>XrpAI</h2>
            <h5 className='text-[#616569] neu-trial'>Farming app</h5>
        </div>
    </div>
  )
}
