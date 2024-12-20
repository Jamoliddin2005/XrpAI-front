import React, { useState } from 'react'
import userCircle from '../../assets/images/user-circle.svg'
import Button from '../buttons/signButtons'

export default function UsersList () {
  const usersData = [
    {
      id: 1,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Process'
    },
    {
      id: 2,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 3,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 4,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 5,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 6,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 7,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 8,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 9,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 10,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 11,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 12,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 13,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 14,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 15,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 16,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 17,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 18,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 19,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    },
    {
      id: 20,
      name: 'User123',
      icon: userCircle,
      expextedTime: '15 minutes',
      dateAndTime: '15.10.2024 14:30',
      status: 'Completed'
    }
  ]

  const [open, setOpen] = useState(true)

  const handleOpen = () => {
    setOpen(false)
  }

  return (
    <>
      {open && (
        <div className='flex items-center fixed w-full z-30 text-white justify-center h-[100vh]'>
          <div className='bg-[#141414] py-4 px-3 rounded-[20px]  max-w-[900px] w-full relative'>
            <div className='flex items-center justify-between mb-1 px-5'>
              <div>
                <h2 className='text-sm waiting-list neu-trial'>Waiting List</h2>
              </div>
              <div className='w-[30%]'>
                <Button
                  className={'rounded-[12px] neu-trial w-[30%]'}
                  title={'Make a deposit'}
                ></Button>
              </div>
            </div>
            <div className='absolute left-0 bg-[#191919] w-full h-[3px] my-2'></div>
            <div className='w-full table-element !mt-8 table-scroll'>
              <table class=' w-full'>
                <thead className='thead '>
                  <tr className='bg-[#191919] '>
                    <th className='flex gap-2 items-center py-4 px-3'>
                      <span className='text-[#999C9E] neu-trial'>#</span>
                      <p className='neu-trial'>Nickname</p>
                    </th>
                    <th className='neu-trial font-[300]'>Expected time</th>
                    <th className='neu-trial font-[300]'>Date and time</th>
                    <th className='neu-trial font-[300]'>Status</th>
                  </tr>
                </thead>
                {usersData.map(user => (
                  <tbody className=''>
                    <tr className='hover:bg-[#404040] cursor-pointer neu-trial  text-center'>
                      <td className='flex items-center gap-3  py-4 px-2 rounded-full'>
                        <p className='text-[#999C9E] text-sm neu-trial'>
                          {user.id}
                        </p>
                        <div className='h-[26px] bg-[#2C2C2C] flex items-center justify-center !rounded-full !w-[26px]'>
                          <img className='' src={user.icon} alt='' />
                        </div>
                        <p className='text-sm neu-trial'>{user.name}</p>
                      </td>
                      <td className='text-sm neu-trial'>{user.expextedTime}</td>
                      <td className='text-sm'>{user.dateAndTime}</td>
                      {user.status === 'Completed' ? (
                        <td className='neu-trial'>
                          <div className='bg-[#172518] !w-fit marginAuto p-2 text-sm rounded-md text-[#28A745]'>
                            <div className='flex items-center !w-fit justify-center gap-2'>
                              <div className='!w-2 rounded-full h-2 bg-[#28A745]'></div>
                              <div className='!w-fit'>{user.status}</div>
                            </div>
                          </div>
                        </td>
                      ) : (
                        <td className='neu-trial'>
                          <div className='bg-[#251B17] !w-fit marginAuto p-2 text-sm rounded-md text-[#ED5C1C]'>
                            <div className='flex items-center !w-fit justify-center gap-2'>
                              <div className='!w-2 rounded-full h-2 bg-[#ED5C1C]'></div>
                              <div className='!w-fit'>{user.status}</div>
                            </div>
                          </div>
                        </td>
                      )}
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
