import { useState } from 'react'
import './App.css'
import Root from './pages/Root'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import {  Route, Routes } from 'react-router'
import GenerateResume from './pages/GenerateResume'


function App() {
  
  return (
     <Routes>
        <Route path="/" element={<Root />}> 
           <Route path="about" element={<About />}/>
           <Route path="" element={<Home />}/>
           <Route path="services" element={<Services />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="Generate-Resume" element={<GenerateResume />}/>
        </Route>
      
       </Routes>
  )
}

export default App
