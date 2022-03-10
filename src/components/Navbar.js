import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [mystyle, setMystyle]=useState(
        {color: '#f7cccc', backgroundColor: '#4c4c4c'}
            )
    const changeDarkMode = () => {
        setMystyle( {color: 'white', backgroundColor: 'black'})
    }
    
    const changeLightkMode = () => {
        setMystyle( {color: '#f7cccc', backgroundColor: '#4c4c4c'})
    }
  return (
    <nav className= "navbar navbar-expand-lg navbar-dark" style={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.manu1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.manu2}</Link>
        </li>

      </ul>
      <div className="btn-group mx-5" role="group" aria-label="Basic mixed styles example">
  <button type="button" className={`btn btn-${props.navbgvalue1}`} onClick={props.colormode1}>{props.navcolor1}</button>
  <button type="button" className={`btn btn-${props.navbgvalue2}`} onClick={props.colormode2}>{props.navcolor2}</button>
  <button type="button" className={`btn btn-${props.navbgvalue3}`} onClick={props.colormode3}>{props.navcolor3}</button>
</div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar