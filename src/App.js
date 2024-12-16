import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import SignInRootPage from './pages/signin'
import MainPage from './pages/main-page'
import MainActivePage from './pages/main-active-page'
import SignUpRootPage from './pages/signup'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App () {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  // Local Storage-dagi holatni tekshirish
  const isRegistered = localStorage.getItem('register') === 'true'

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Main Active Page */}
          <Route
            path='/main-active'
            element={
              isRegistered ? <MainActivePage /> : <Navigate to='/' replace />
            }
          />

          {/* Kirish sahifalari */}
          <Route
            path='/'
            element={
              isRegistered ? (
                <Navigate to='/main-active' replace />
              ) : (
                <MainPage />
              )
            }
          />
          <Route
            path='/signup'
            element={
              isRegistered ? (
                <Navigate to='/main-active' replace />
              ) : (
                <SignUpRootPage />
              )
            }
          />
          <Route
            path='/main-not-active'
            element={
              isRegistered ? (
                <Navigate to='/main-active' replace />
              ) : (
                <MainPage />
              )
            }
          />
          <Route path='/signin' element={<SignInRootPage />} />

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
