import React from 'react'
import CheckIcon from '../../assets/images/check.svg'
import Button from '../buttons/signButtons'

export default function Successfully () {
  return (
    <div className='flex items-center fixed w-full z-50 bacground-some-blacc text-white justify-center h-[100vh]'>
      <div className='bg-[#141414] py-4 px-3 rounded-[20px] max-w-[350px] w-full'>
        <div className='bg-[#43AFFF] w-[90px] h-[90px] flex items-center justify-center rounded-full transform-element marginAuto'>
          <img className='w-[45px] h-[45px]' src={CheckIcon} alt='' />
        </div>
        <div className='neu-trial'>
          <h2 className='text-lg text-center mt-4 neu-trial'>
            You have been added to the waiting list. The greater your
            investment, the faster you move toward your turn!
          </h2>
          <p className='text-center neu-trial text-[#999C9E] text-xs mt-4'>Your farming has been successfully <br /> launched and activated!</p>
          <Button
            className={'rounded-[12px] neu-trial mt-7'}
            title={'Go to Waiting List'}
          ></Button>
        </div>
      </div>
    </div>
  )
}
