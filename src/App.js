import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainArea from './components/MainArea'
import Home from './components/Home'


export default function App() {
  return (
    <Router>
      
        <Navbar/>
        <Routes>
          
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/esewa" element={<MainArea banking='esewa' />}/>
          <Route exact path="/khalti" element={<MainArea banking='khalti' />}/>
      
         
        </Routes>
     
    </Router>
  )
}
