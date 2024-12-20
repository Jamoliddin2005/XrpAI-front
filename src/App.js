import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import SignInRootPage from './pages/signin'
import MainPage from './pages/main-page'
import MainActivePage from './pages/main-active-page'
import SignUpRootPage from './pages/signup'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App () {
  const [registered, setRegistered] = useState(false) // "registerred" o'rniga "registered"
  const [message, setMessage] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const checkSignupStatus = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      setMessage('Siz tizimga kirgan emassiz.')
      setRegistered(false)
      return
    }

    try {
      const response = await fetch(
        'https://xrp-ai-back.vercel.app/checkSignupStatus',
        {
          method: 'GET',
          headers: {
            Authorization: token // Tokenni headerga yuborish
          }
        }
      )
      const data = await response.json()
      setUser(data.user) // response.logdan keyin to'g'ri message va status qo'shing
      if (response.ok) {
        setRegistered(true)
      } else {
        setRegistered(false)
      }
    } catch (error) {
      setMessage('Xatolik yuz berdi.')
      console.log(error) // Foydalanuvchi xatolik haqida xabar oladi
      setRegistered(false)
    }
  }

  useEffect(() => {
    checkSignupStatus()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/main-active'
            element={
              registered ? (
                <MainActivePage user={user} />
              ) : (
                <Navigate to='/' replace />
              )
            }
          />
          <Route
            path='/'
            element={
              registered ? <Navigate to='/main-active' replace /> : <MainPage />
            }
          />
          <Route
            path='/signin'
            element={
              registered ? (
                <Navigate to='/main-active' replace />
              ) : (
                <SignInRootPage checkRegisterStatus={checkSignupStatus} />
              )
            }
          />
          <Route
            path='/signup'
            element={
              registered ? (
                <Navigate to='/main-active' replace />
              ) : (
                <SignUpRootPage checkRegisterStatus={checkSignupStatus} />
              )
            }
          />
          <Route
            path='/main-not-active'
            element={
              registered ? <Navigate to='/main-active' replace /> : <MainPage />
            }
          />

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
      {message && <div>{message}</div>}
    </div>
  )
}
