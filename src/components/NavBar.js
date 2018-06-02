import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
	constructor(props){
		super(props);
		this.state={
			logoImg:'./images/logo_white.svg',
		}
	}
  render() {
    return (
      <div className="top-nav">
      		<nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
		        <div className="container">
		         <Link to="/" className="navbar-brand"><img src={`${this.state.logoImg}`} alt="location"/></Link>
		              <ul className="navbar-nav">
		                  <li className="nav-item">
		                      <Link to="/workshops" className="nav-link">Workshops</Link>
		                  </li>
		                  <li className="nav-item">
		                      <Link to="/allblogs" className="nav-link">Blogs</Link>
		                  </li>
		                  <li className="nav-item">
		                      <Link to="/contact" className="nav-link">Contact</Link>
		                  </li>
		                  <span style={{color:'white'}}>|</span>
		                  <li className="nav-item">
		                      <Link to="/signup" className="nav-link">Signup</Link>
		                  </li>

		                  <li className="nav-item">
		                      <Link to="/login" className="nav-link">/ Login</Link>
		                  </li>
		              </ul>
		          </div>
		    </nav>
      </div>
    );
  }
}

export default NavBar;
