import React, { Component } from 'react';
import ExtraLink from './ExtraLink';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      twitterImg : './images/twitter.svg',
      fbImg : './images/fb.svg',
      instagramImg : './images/instagram.svg',
      pinterestImg : './images/pinterest.svg',
      logoImg:'./images/logo_white.svg',
    }
  }

  render() {
    return (
    <div>
      <ExtraLink/>
      <div className="logo-bottom row m-0 pb-3">
          <div className="col-lg-5"><hr className="line"/></div> 
          <div className="col-lg-2 text-center"><img className="" src={`${this.state.logoImg}`} alt="social"/></div> 
          <div className="col-lg-5"><hr className="line"/></div>       
      </div>
        <div className="social-link">
    		<div className="row py-3 mx-auto">
    			<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    				<img className="" src={`${this.state.twitterImg}`} alt="social"/>
    			</div>
    			<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    				<img className="" src={`${this.state.fbImg}`} alt="social"/>
    			</div>
    			<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    				<img className="" src={`${this.state.instagramImg}`} alt="social"/>
    			</div>
    			<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    				<img className="" src={`${this.state.pinterestImg}`} alt="social"/>
    			</div>
    		</div>
        </div>
        <div className="footer-nav">
        	  <nav className="navbar navbar-expand-sm navbar-light">
  		        <div className="container">
  		          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
  		            <div className="collapse navbar-collapse" id="navbarNav">
  		              <ul className="navbar-nav mx-auto">
  		                  <li className="nav-item">
  		                       <Link to="/" className="nav-link">Home</Link>
  		                  </li>
  		                  <span>|</span>
  		                  <li className="nav-item">
  		                      <Link to="/about" className="nav-link">About</Link>
  		                  </li>
  		                  <span>|</span>
  		                  <li className="nav-item">
  		                      <Link to="/support" className="nav-link">Support</Link>
  		                  </li>
  		                  <span>|</span>
  		                  <li className="nav-item">
  		                      <Link to="/faqs" className="nav-link">FAQs</Link>
  		                  </li>
  		                  <span>|</span>
  		                  <li className="nav-item">
  		                      <Link to="/tnc" className="nav-link">Terms & Condition</Link>
  		                  </li>
  		                  <span>|</span>
  		                  <li className="nav-item">
  		                      <Link to="/privacypolicy" className="nav-link">Privacy Policy</Link>
  		                  </li>
                        <span>|</span>
                        <li className="nav-item">
                            <Link to="/sitemap" className="nav-link">Sitemap</Link>
                        </li>
  		              </ul>		              
  		            </div>
  		          </div>
  		    </nav>
        </div>
    </div>
    );
  }
}

export default Footer;
