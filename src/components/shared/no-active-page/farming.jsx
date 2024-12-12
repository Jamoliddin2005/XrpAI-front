import React, { useState } from 'react'
import PlayIcon from '../../../assets/icons/play.svg'
import PrivacyIcon from '../../../assets/icons/privacy.svg'
import Button from '../../buttons/signButtons'
import copyIcon from '../../../assets/icons/copy-icon.svg'
import qrCode from '../../../assets/icons/qr-code.svg'

export default function Farming () {
  const [open, setOpen] = useState(false)
  const [secondModal, setSecondModal] = useState(false)
  const [thirdModal, setThirdModal] = useState(false)
  const [fourthModal, setFourthModal] = useState(false)
  const [clipboard, setClipboard] = useState(false)
  const [clipboard2, setClipboard2] = useState(false)
  const [clipboard3, setClipboard3] = useState(false)
  const [close, setClose] = useState(false)
  
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName); 
  };
  
  const handleCloseAll = () => {
    setActiveModal(null);
  };
  
  const handleOpen = () => {
    setOpen(!open)
  }

  const handleCloseSecondModal = () => {
    setSecondModal(!secondModal)
  }

  const handleThirdModal = () => {
    setThirdModal(!thirdModal)
  }

  const handleFourthModal = () => {
    setFourthModal(!fourthModal)
  }

  const handleClipboard = () => {
    setClipboard(true)
    setTimeout(() => {
      setClipboard(false)
    }, 3000)
    navigator.clipboard.writeText(copyText).then(() => {
      setClipboard(true)
      setTimeout(() => setClipboard(false), 3000)
    })
  }

  const handleClipboard2 = () => {
    setClipboard2(true)
    setTimeout(() => {
      setClipboard2(false)
    }, 3000)
    navigator.clipboard.writeText(copyText2).then(() => {
      setClipboard2(true)
      setTimeout(() => setClipboard2(false), 3000)
    })
  }

  const handleClipboard3 = () => {
    setClipboard3(true)
    setTimeout(() => {
      setClipboard3(false)
    }, 3000)
    navigator.clipboard.writeText(copyText3).then(() => {
      setClipboard3(true)
      setTimeout(() => setClipboard3(false), 3000)
    })
  }


  const copyText = 'rnPNSonfEN1TWkPH4Kwvkk3693sCT4tsZv'
  const copyText2 = 'C33B04D2E95A73D1CD0A82E93B199E'
  const copyText3 = 'C33B04D2E95A73D1CD0A82E93B199E'
  return (
    <>
      <div data-aos="zoom-in" className='md:w-[30%] bg-[#141414] py-4 px-5 rounded-2xl text-center mb-2 lg:mb-0'>
        <h2 className='text-white text-lg neu-trial'>Start Farming</h2>
        <p className='hover:underline  cursor-pointer neu-trial text-[#43AFFF] hover:text-[#3385c4] text-xs mb-5'>
          Check documentation
        </p>
        <div className=' flex items-center justify-center '>
          <div
            // onClick={() => handleOpenModal('firstModal')}
            className='w-20 h-20 bg-[#43AFFF] hover:bg-[#43aeff86] transition-all duration-300 flex items-center justify-center rounded-full cursor-pointer mb-4'
          >
            <img src={PlayIcon} alt='' />
          </div>
        </div>
        <div className='flex items-center justify-between gap-1.5'>
          <div className='bg-[#1D1D1D] w-1/2 rounded-xl py-2'>
            <p className='text-[#2E2E2E]'>Today</p>
            <h4 className='text-[#898989]'>00:00:00</h4>
          </div>
          <div className='bg-[#1D1D1D] w-1/2 rounded-xl py-2'>
            <p className='text-[#2E2E2E]'>Limits</p>
            <h4 className='text-[#898989]'>00:00:00</h4>
          </div>
        </div>
      </div>
      {activeModal === 'firstModal' && (
        <div  onClick={handleCloseAll}
          className='bg-some-black overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
        >
          <div
            className='flex items-center justify-center h-[100vh] z-40'
            onClick={e => e.stopPropagation()} 
          >
            <div className='bg-[#141414] max-w-[600px] w-full p-5 border-radiusss z-40'>
              <div className='flex flex-col items-center'>
                <div className='flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl'>
                  <p className='bg-[#141414] py-2  text-white rounded-xl md:px-5 px-3  text-[10px] md:text-sm'>Creating an XRP Wallet</p>
                  <p className='py-2  text-[#999C9E] md:px-5 px-3  text-[10px] md:text-sm'>Creating an XRP Wallet</p>
                </div>
              </div>
              <div className='flex cursor-pointer items-center gap-2 text-start justify-start border-2 text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'>
                <img src={PrivacyIcon} alt='' />
                <p>Get Transaction Hash</p>
              </div>
              <div  onClick={() => handleOpenModal('secondModal')}>
                <Button className={'rounded-xl'} title={'Get Hash'} />
              </div>
            </div>
          </div>
        </div>
      )}
         {activeModal === 'secondModal' && (
        <>
          <div onClick={handleCloseAll}
          className='bg-some-black overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
        >
             <div
            className='flex items-center justify-center h-[100vh] z-40'
            onClick={e => e.stopPropagation()} 
          >
              <div className='bg-[#141414] max-w-[500px] w-full  p-5 border-radiusss'>
                <div className='flex flex-col items-center '>
                  <div className=' flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5'>
                  <div className='flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl'>
                  <p className='bg-[#141414] py-2  text-white rounded-xl md:px-5 px-3  text-[10px] md:text-sm'>Creating an XRP Wallet</p>
                  <p className='py-2  text-[#999C9E] md:px-5 px-3  text-[10px] md:text-sm'>Creating an XRP Wallet</p>
                </div>
                  </div>
                </div>
                <div className='flex items-center cursor-pointer gap-2 text-start justify-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'>
                  <img src={PrivacyIcon} alt='' />
                  <p>Get Transaction Hash</p>
                </div>
                <div onClick={() => handleOpenModal('thirdModal')}>
                  <Button className={'rounded-xl'} title={'Get Hash'} />
                </div>
                <div className='rounded-xl border-2 border-[#1A1A1A] py-5 px-7 mt-3'>
                  <p className='underline text-[#999C9E] text-center'>
                    Hash generator
                  </p>

                  {/* <div className=''>
                    <h1 className='text-white text-4xl'>Adress hash qilish</h1>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) }
       {activeModal === 'thirdModal' && (
          <div  onClick={handleCloseAll}
          className='bg-some-black overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
        >
             <div
            className='flex items-center justify-center h-[100vh] z-40'
            onClick={e => e.stopPropagation()} 
          >
            <div className='bg-[#141414] max-w-[500px] w-full  p-5 border-radiusss'>
              <div className='flex flex-col items-center '>
                <div className=' flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5'>
                <div className='flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl'>
                  <p className='bg-[#141414] py-2 text-white rounded-xl md:px-5 px-3  text-[10px] md:text-sm'>Creating an XRP Wallet</p>
                  <p className='py- text-[#999C9E] md:px-5 px-3  text-[10px] md:text-sm'>Creating an XRP Wallet</p>
                </div>
                </div>
              </div>
              <div className='flex items-center justify-between gap-2 text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'>
                <div
                  onClick={handleClipboard2}
                  className='flex gap-2 items-center'
                >
                  <img src={PrivacyIcon} alt='' />
                  <p>C33B04D2E95A73D1CD0A82E93B199E...</p>
                </div>
                {clipboard2 ? (
                  <h1>
                    <i
                      className='fa-solid fa-check'
                      style={{ color: 'green' }}
                    ></i>
                  </h1>
                ) : (
                  <h1>
                    <img
                      onClick={handleClipboard2}
                      src={copyIcon}
                      alt='Copy'
                      style={{ cursor: 'pointer', width: '15px' }}
                    />
                  </h1>
                )}
              </div>
              <div  onClick={() => handleOpenModal('fourthModal')}>
                <Button className={'rounded-xl'} title={'Get Wallet'} />
              </div>
              <div className='mt-3'>
                <p className='text-[#FFFFFF] text-base mt-4 mb-2.5'>
                  Participation wallet
                </p>

                <div
                  onClick={handleClipboard}
                  className='flex items-center  gap-2 text-start justify-between border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'
                >
                  <div className='flex gap-2 items-center justify-between'>
                    <img src={qrCode} alt='' />
                    <p>rnPNSonfEN1TWkPH4Kwvkk3693sCT4tsZv</p>
                  </div>
                  {clipboard ? (
                    <h1>
                      <i
                        onClick={handleClipboard}
                        className='fa-solid fa-check'
                        style={{ color: 'green' }}
                      ></i>
                    </h1>
                  ) : (
                    <h1>
                      <img
                        src={copyIcon}
                        alt='Copy'
                        style={{ cursor: 'pointer', width: '15px' }}
                      />
                    </h1>
                  )}
                </div>

                <div className='flex items-center text-white gap-1.5'>
                  <input className='bg-transparent' type='checkbox' />
                  <p>
                    {' '}
                    <span>Minimum: 119 XRP.</span>{' '}
                    <span className='text-[#999C9E]'>No maximum limit.</span>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        {activeModal === 'fourthModal' && (
          <div onClick={handleCloseAll}
          className='bg-some-black overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
        >
             <div
            className='flex items-center justify-center h-[100vh] z-40'
            onClick={e => e.stopPropagation()} 
          >
            <div className='bg-[#141414] max-w-[500px] w-full  p-5 border-radiusss'>
              <div className='flex flex-col items-center '>
                <div className=' flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5'>
                <div className='flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl'>
                  <p className='bg-[#141414] py-2  text-white rounded-xl md:px-5 px-3  text-[10px] md:text-sm'>Creating an XRP Wallet</p>
                  <p className='py-2 text-[#999C9E] md:px-5 px-3  text-[10px] md:text-sm'>Creating an XRP Wallet</p>
                </div>
                </div>
              </div>
              <div
                onClick={handleClipboard2}
                className='flex items-center justify-between gap-2 text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'
              >
                <div className='flex gap-2 items-center'>
                  <img src={PrivacyIcon} alt='' />
                  <p>C33B04D2E95A73D1CD0A82E93B199E...</p>
                </div>
                {clipboard2 ? (
                  <h1>
                    <i
                      className='fa-solid fa-check'
                      style={{ color: 'green' }}
                    ></i>
                  </h1>
                ) : (
                  <h1>
                    <img
                      onClick={handleClipboard2}
                      src={copyIcon}
                      alt='Copy'
                      style={{ cursor: 'pointer', width: '15px' }}
                    />
                  </h1>
                )}
              </div>
              <div onClick={handleClipboard3}>
                {clipboard3 ? (
                  <button className='w-full py-2.5 rounded-xl  border-2 border-[#43AFFF] text-[#43AFFF] text-sm'>
                    Copied
                  </button>
                ) : (
                  <button className='w-full py-2.5 rounded-xl  border-2 border-[#43AFFF] text-[#43AFFF] text-sm'>
                    Copy hash
                  </button>
                )}
              </div>
              <div className='mt-3'>
                <p className='text-[#FFFFFF] text-base mt-4 mb-2.5'>
                  Participation wallet
                </p>

                <div
                  onClick={handleClipboard}
                  className='flex items-center  gap-2  justify-between text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'
                >
                  <div className='flex gap-2 items-center'>
                    <img src={qrCode} alt='' />
                    <p>rnPNSonfEN1TWkPH4Kwvkk3693sCT4tsZv</p>
                  </div>
                  {clipboard ? (
                    <i
                      onClick={handleClipboard}
                      className='fa-solid fa-check'
                      style={{ color: 'green' }}
                    ></i>
                  ) : (
                    <img
                      src={copyIcon}
                      alt='Copy'
                      style={{ cursor: 'pointer', width: '15px' }}
                    />
                  )}
                </div>

                <div className='flex items-center text-white gap-1.5'>
                  <input className='bg-transparent' type='checkbox' />
                  <p>
                    {' '}
                    <span>Minimum: 119 XRP.</span>{' '}
                    <span className='text-[#999C9E]'>No maximum limit.</span>{' '}
                  </p>
                </div>

                <div className='mt-3'>
                  <Button className={'rounded-xl'} title={'I sent funds'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
