import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Qr Generator</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/esewa" className="nav-link" activeClassName="active">E-sewa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/khalti" className="nav-link" activeClassName="active">Khalti</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">More</NavLink>
            </li>
            {/* <li className="nav-item">
          <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
        </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
