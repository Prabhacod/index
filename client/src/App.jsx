import React from 'react'
import User from './components/User.jsx'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
   <>
 <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/services' element={<Services/>} />

    
  </Routes>


   <User name="Prabha" department ="CSE"
    skills={['HTML ','CSS ','JS ','JAVA ','PYTHON','MERN ']}

    roles={['Full Stack Developer','Data Analyst','Software developer','ML Engineer']} />
   </>
  )
}

export default App