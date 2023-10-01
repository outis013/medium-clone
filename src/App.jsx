import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import OurStory from './components/OurStory'
import Membership from './components/Membership'
import Write from './components/Write';
import Signin from './components/Signin'
import Getstarted from './components/Getstarted'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='ourstory' element={<OurStory />} />
      <Route path='membership' element={<Membership />} />
      <Route path='write' element={<Write />} />
      <Route path='signin' element={<Signin />} />
      <Route path='getstarted' element={<Getstarted />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
