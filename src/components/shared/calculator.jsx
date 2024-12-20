import React, { useEffect, useState } from 'react'
import SmallIcon from '../../assets/images/Group 47571.svg'
import { Link } from 'react-router-dom'

export default function Calculator ({ status, onClose }) {
  const [open, setOpen] = useState(status)
  const [deposit, setDeposit] = useState(119)
  const [profitPercentage, setProfitPercentage] = useState(77)
  const [minimalProfit, setMinimalProfit] = useState(210.63)
  const [activeButton, setActiveButton] = useState(2)

  useEffect(() => {
    setOpen(status)
  }, [status])

  const closeModal = () => {
    setOpen(false)
    onClose()
  }

  const calculateProfit = () => {
    const calculatedProfit = deposit + (deposit * (profitPercentage || 0)) / 100
    setMinimalProfit(calculatedProfit.toFixed(2))
  }

  const handlePercentageChange = e => {
    const value = e.target.value
    setProfitPercentage(value === '' ? '' : Number(value))
  }

  const buttonsData = [
    { id: 1, text: '1 Day' },
    { id: 2, text: '2 Day' },
    { id: 3, text: '3 Day' },
    { id: 4, text: '4 Day' },
    { id: 5, text: '5 Day' },
    { id: 6, text: '6 Day' },
    { id: 7, text: '7 Day' }
  ]

  const handleDayClick = day => {
    let addedProfit = 0

    if (day === 1) {
      addedProfit = (deposit / 100) * 10
    }
    if (day === 2) {
      addedProfit = (deposit / 100) * 20
    }
    if (day === 3) {
      addedProfit = (deposit / 100) * 30
    }
    if (day === 4) {
      addedProfit = (deposit / 100) * 40
    }
    if (day === 5) {
      addedProfit = (deposit / 100) * 50
    }
    if (day === 6) {
      addedProfit = (deposit / 100) * 60
    }
    if (day === 7) {
      addedProfit = (deposit / 100) * 70
    }

    const newProfit =
      deposit + addedProfit + (deposit * (profitPercentage || 0)) / 100
    setMinimalProfit(newProfit.toFixed(2))

    setActiveButton(day) 
  }

  return (
    <>
      {open && (
        <div className=''>
          <div
            className='bacground-some-blacc w-full h-full fixed top-0 left-0 z-10'
            onClick={closeModal}
          ></div>
          <div
            className='flex items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white'
            onClick={e => e.stopPropagation()}
          >
            <div className='bg-[#141414] py-4 px-3 rounded-[20px] calculator'>
              <h1 className='text-[21px] neu-trial'>Calculate Profit</h1>
              <p className='neu-trial text-[#898989] text-sm mt-4 mb-3 grotesk'>
                Deposit
              </p>
              <div className='flex items-center justify-between border border-[#2C2C2C] py-2.5 px-4 rounded-md'>
                <input
                  value={deposit}
                  onChange={e => setDeposit(Number(e.target.value))}
                  onInput={e => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '')
                  }}
                  className='text-sm bg-transparent outline-none !w-full'
                  type='text'
                />
                <p className='text-[#898989] text-sm grotesk'>XRP</p>
              </div>
              <div className='bg-[#272727] w-full h-[2px] mt-5'>
                <div className='bg-[#43AFFF] h-[2px] relative w-[60%]'>
                  <div className='absolute -top-2 rounded-full right-0 border cursor-grab z-40 border-[#272727] w-4 h-4'></div>
                  <div className='absolute w-4 h-4 -top-2 bg-[#43AFFF] rounded-full cursor-grab border-[5px] border-[#141414] right-0'></div>
                </div>
              </div>
              <p className='neu-trial text-[#898989] text-sm mt-4 mb-3'>
                Minimal profit
              </p>
              <div className='flex items-center justify-between border border-[#2C2C2C] py-2.5 px-4 rounded-md grotesk'>
                <input
                  value={minimalProfit}
                  className='text-sm bg-transparent outline-none !w-full'
                  type='text'
                  readOnly
                />
                <p className='text-[#898989] text-sm'>XRP</p>
              </div>
              <div>
                <p className='neu-trial text-[#898989] text-sm mt-4 mb-1'>
                  Profit by time
                </p>
              </div>
              <div className='butttons'>
                {buttonsData.map(button => (
                  <div
                    key={button.id}
                    className={`text-[#898989] neu-trial py-3 text-sm border border-[#2C2C2C] rounded-2xl cursor-pointer ${
                      activeButton === button.id
                        ? 'bg-[#43AFFF] text-white'
                        : ''
                    }`}
                    onClick={() => handleDayClick(button.id)}
                  >
                    <p className='w-16'>{button.text}</p>
                  </div>
                ))}
              </div>
              <p className='neu-trial text-[#898989] text-sm mt-4 mb-3'>
                Profit percentage
              </p>
              <div className='bg-[#272727] w-full h-[2px] my-5'>
                <div className='bg-[#43AFFF] h-[2px] relative w-[60%]'>
                  <div className='absolute -top-2 rounded-full right-0 border cursor-grab z-40 border-[#272727] w-4 h-4'></div>
                  <div className='absolute w-4 h-4 -top-2 bg-[#43AFFF] rounded-full cursor-grab border-[5px] border-[#141414] right-0'></div>
                </div>
              </div>
              <div className='flex items-center justify-between border border-[#2C2C2C] py-2.5 px-4 rounded-md'>
                <input
                  className='text-sm bg-transparent outline-none !w-full grotesk'
                  type='text'
                  value={77}
                  inputMode='numeric'
                  pattern='[0-9]*'
                  onInput={e => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '')
                  }}
                />
                <p className='text-[#898989] text-sm'>%</p>
              </div>
              <div className='flex justify-between items-center gap-2.5 mt-5'>
                <button
                  onClick={calculateProfit}
                  className='bg-[#43AFFF] neu-trial py-2 w-full rounded-[16px] text-black'
                >
                  Calculate
                </button>
                <div>
                  <Link to={'/'}>
                    <img src={SmallIcon} alt='' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
