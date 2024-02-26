import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainArea from './components/MainArea'


export default function App() {
  return (
    <Router>
      
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<MainArea/>}/>
         
        </Routes>
     
    </Router>
  )
}
