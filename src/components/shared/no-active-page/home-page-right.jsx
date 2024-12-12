import React from 'react'
import RightIcon from "../../../assets/icons/right-icon.svg"
import ThreeDotIcon from "../../../assets/icons/three-dot.svg"


export default function HomePageRight() {

    const percentData = [
        {
            date: 'Mon',
            percent: '0%',
        },
        {
            date: 'Tue',
            percent: '0%',
        },
        {
            date: 'Wed',
            percent: '0%',
        },
        {
            date: 'Thu',
            percent: '0%',
        },
        {
            date: 'Fri',
            percent: '0%',
        },
    ]


    const criptoData = [
        {
            id: 1,
            name: 'Ripple',
            percent: '0%',
        },
        {
            id: 2,
            name: 'Ethereum',
            percent: '0%',
        },
        {
            id: 3,
            name: 'Solana',
            percent: '0%',
        },
        {
            id: 4,
            name: 'Cardano',
            percent: '0%',
        },
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
        },
    ]

    return (
        <div className='w-full py-6 px-5'>
            <div>
                <p className='text-[#898989] text-sm neu-trial'>Activity</p>
                <h1 className='text-[#898989] text-[27px] neu-trial'>80%</h1>
            </div>
            <div className='flex justify-between gap-1.5 w-full'>
                {percentData.map((percent,index) => {
                    return (
                        <div key={index} className='w-[20%] neu-trial relative md:w-[20%] rounded-md border-2 border-[#1A1A1A] h-28 flex items-center flex-col justify-end'>
                            <p className='text-[#2E2E2E] text-[10px]'>{percent.date}</p>
                            <p className='text-[#898989] text-xs'>{percent.percent}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <div className='flex justify-between items-center mb-5 mt-11'>
                    <h2 className='text-[#898989] neu-trial'>Projects worked</h2>
                    <img src={ThreeDotIcon} alt="" />
                </div>
                <div className='block md:flex gap-3 justify-between items-center'>
                    <div className='projects-worked main-projects-worked w-[40%]'>
                        <p className='text-lg text-[#898989]'>0</p>
                        <p className='text-[#898989] text-[10px]'>projects</p>
                    </div>
                    <div className='mt-5 md:mt-0 md:w-[20%] xl:w-[60%]'>
                        {criptoData.map((cripto,index) => {
                            return (
                                <div key={index} className='flex neu-trial items-center gap-1.5 mb-4'>
                                    <div className='w-2 h-2 border-[#2E2E2E] rounded-full border-2'></div>
                                    <div className='flex justify-between items-center w-full '>
                                        <p className='text-[#898989] text-xs'>{cripto.name}</p>
                                        <p className='text-[#898989] text-xs'>{cripto.percent}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className='flex justify-between text-white mt-11'>
                        <p className='text-[#898989] text-sm'>Farm Status</p>
                        <div className='flex gap-2 mb-5 items-center'>
                            <p>Search</p>
                            <img src={RightIcon} alt="" />
                        </div>
                    </div>
                    <div>
                        {farmStatusData.map((farmStatus,index) => {
                            return (
                                <div key={index} className='bg-[#141414] neu-trial rounded-[10px] py-4 px-3 mb-2'>
                                    <div className='flex items-center gap-1'>
                                        <p className='text-[#898989] text-xl'>{farmStatus.time}</p>
                                        <p className='text-[#2E2E2E] text-xs'>{farmStatus.format}</p>
                                    </div>
                                    <div>
                                        <p className='text-[#2E2E2E] text-[10px]'>{farmStatus.info}</p>
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
