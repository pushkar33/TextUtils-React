import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) { //Receiving the props . {props.title} means using the props
  
 
  return (
        <div>
             
   
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">{props.title}</a>  */}
    <Link className="navbar-brand" to="/">{props.title}</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li> 
        
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>

      {/* <div className="d-flex mx-2 bg-primary rounded" onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer' }}></div>
      <div className="d-flex mx-2 bg-success rounded" onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer' }}></div>
      <div className="d-flex mx-2 bg-warning rounded" onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer' }}></div>
      <div className="d-flex mx-2 bg-danger rounded" onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer' }}></div> */}

     <div className={`form-check form-switch mx-5 text-${props.mode==='light'?'dark':'light'}`}> 
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
     </div>
    </div>
  </div>
</nav>
    
    
        </div>
    )
}

Navbar.propTypes={
  title:PropTypes.string.isRequired,  //Using is Required along with a prop states that prop is nedd to be defined i.e either through default props or through passing to component
  aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps={  //These are default props that are used when no props will be passed to component Navbar 
  title: 'Set Title here',
  aboutText: 'aboutHello'
};
