import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container mt-5'>

<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card text-bg-light border-warning"style={{height:"280px"}} >
      <img src={`${process.env.PUBLIC_URL}/images/esewa_logo.png`} className="card-img-top" style={{height:"100px"}} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Esewa Qr Generator</h5>
        <p className="card-text">Easily create your QR card of eSewa by just providing your eSewa name and number.</p>
        <NavLink exact to="/esewa" className="btn btn-primary" activeClassName="active">Start</NavLink>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-light border-warning"style={{height:"280px"}} >
      <img src={`${process.env.PUBLIC_URL}/images/khalti_logo.png`} className="card-img-top" style={{width:"250px"}} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Khalti Qr Generator</h5>
        <p className="card-text">Easily create your QR card of Khalti by just providing your khalti name and number.</p>
        <NavLink exact to="/khalti" className="btn btn-primary" activeClassName="active">Start</NavLink>
        </div>
    </div>
  </div>

 </div>

    </div>
  )
}
