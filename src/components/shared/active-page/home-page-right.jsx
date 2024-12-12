import React from 'react'
import RightIcon from '../../../assets/icons/right-icon.svg'
import ThreeDotIcon from '../../../assets/icons/three-dot.svg'
import UpIcon from '../../../assets/icons/up.svg'
import ThreeDotIcon2 from '../../../assets/icons/three-dot-2.svg'
import RightIconBlue from '../../../assets//icons/right-blue.svg'

export default function HomePageRightActive () {
  const percentData = [
    {
      date: 'Mon',
      percent: '92%'
    },
    {
      date: 'Tue',
      percent: '100%'
    },
    {
      date: 'Wed',
      percent: '92%'
    },
    {
      date: 'Thu',
      percent: '0%'
    },
    {
      date: 'Fri',
      percent: '14%'
    }
  ]

  const criptoData = [
    {
      id: 1,
      name: 'Ripple',
      percent: '0%',
      color: '#2E2E2E'
    },
    {
      id: 2,
      name: 'Ethereum',
      percent: '0%',
      color: '#4743FF'
    },
    {
      id: 3,
      name: 'Solana',
      percent: '0%',
      color: '#F043FF'
    },
    {
      id: 4,
      name: 'Cardano',
      percent: '0%',
      color: '#43FFFF'
    }
  ]

  const farmStatusData = [
    {
      time: '00:00',
      format: 'AM',
      info: 'No information'
    },
    {
      time: '00:00',
      format: 'AM',
      info: 'No information'
    },
    {
      time: '00:00',
      format: 'AM',
      info: 'No information'
    }
  ]

  return (
    <div className='py-6 pl-5 pr-10'>
      <div className=''>
        <div className=''>
          <div className='flex justify-between items-start'>
            <div className='flex items-start gap-0.5'>
              <div>
                <p className='text-white text-sm neu-trial'>Activity</p>
                <h1 className='text-white text-[27px] neu-trial'>80%</h1>
              </div>
              <div className='bg-[#20310f] text-[#4CAF50] w-fit flex items-center gap-0.5 p-1 rounded'>
                <p className='text-[11px] neu-trial'>+80%</p>
                <img src={UpIcon} alt='' />
              </div>
            </div>
            <div className='cursor-pointer w-2.5 h-2.5 flex items-center justify-center'>
              <img className='cursor-pointer' src={ThreeDotIcon2} alt='' />
            </div>
          </div>

          <div className='flex justify-between gap-1.5 w-full'>
            {percentData.map((percent,index) => {
              return (
                <div key={index} className='w-[20%] neu-trial relative md:w-[20%] rounded-md border-2 border-[#1A1A1A] h-28 flex items-center flex-col justify-end'>
                  <div
                    style={{
                      height: percent.percent,
                      backgroundColor: percent.backgroundColor || '#2C2C2C'
                    }}
                    className='absolute w-full bottom-0  left-0 h-full -z-10'
                  ></div>
                  <p className='text-[#676767] text-[10px]'>{percent.date}</p>
                  <p className='text-[#898989] text-xs'>{percent.percent}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className=''>
        <div className='flex justify-between items-center mb-5 mt-11'>
          <div className='flex items-start gap-2.5'>
            <h2 className='text-[#FFF] neu-trial'>Projects worked</h2>
            <div className='bg-[#20310f] neu-trial text-[#4CAF50] w-fit flex items-center gap-0.5 p-1 rounded'>
              <p className='text-[11px]'>+160%</p>
              <img src={UpIcon} alt='' />
            </div>
          </div>
          <div className='cursor-pointer w-2.5 h-2.5 flex items-center justify-center'>
            <img className='cursor-pointer' src={ThreeDotIcon2} alt='' />
          </div>
        </div>
        <div className='block md:flex justify-between items-center gap-3'>
          <div className='projects-worked main-projects-worked projects-worked-2 mb-10 2xl:mb-0'>
            <p className='text-2xl md:text-lg text-[#fff] neu-trial'>1</p>
            <p className='text-2xl text-[#fff] md:text-[10px] neu-trial'>projects</p>
          </div>
          <div className='my-5 w-[100%] md:w-[20%] xl:w-[50%]'>
            {criptoData.map((cripto,index) => {
              return (
                <div key={index} className='flex neu-trial items-center gap-1.5 mb-4'>
                  <div
                    style={{ borderColor: cripto.color }}
                    className={` w-2 h-2  rounded-full border-2`}
                  ></div>
                  <div className='flex justify-between items-center w-full '>
                    <p className='text-[#898989] text-xs'>{cripto.name}</p>
                    <p className='text-[#898989] text-xs'>{cripto.percent}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className=''>
        <div>
          <div className='flex justify-between text-white'>
            <p className='text-[#fff] text-sm neu-trial'>Farm Status</p>
            <div className='flex gap-2 mb-5 items-center'>
              <p className='text-[#43AFFF] neu-trial'>Search</p>
              <img src={RightIconBlue} alt='' />
            </div>
          </div>
          <div>
            {farmStatusData.map((farmStatus,index) => {
              return (
                <div key={index} className='bg-[#141414] neu-trial rounded-[10px] py-4 px-3 mb-2'>
                  <div className='flex items-center gap-1'>
                    <p className='text-[#898989] text-xl'>{farmStatus.time}</p>
                    <p className='text-[#2E2E2E] text-xs'>
                      {farmStatus.format}
                    </p>
                  </div>
                  <div>
                    <p className='text-[#2E2E2E] text-[10px]'>
                      {farmStatus.info}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
