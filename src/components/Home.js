import React, { Component } from 'react';
import NavBar from './NavBar';

class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			homeBackImg:'./images/road.jpg',
      chatImg:'./images/chat.svg',

		}
	}
  render() {
    return (
      <div>
          <div className="home-page" style={{background:`url(${this.state.homeBackImg})`,backgroundPosition: 'center',height: '600px',width: '100%'}}>
              <NavBar/>
              <div className="home-line1">Project MYNT</div>
              <div className="home-line2">Ask More of Your Weekends</div>
              <div className="home-line3">Experience the unthinkable with people you can't stop thinking about</div>
              <div className="chat"><img className="" src={`${this.state.chatImg}`} alt="chat"/></div>
          </div>           
      </div>
    );
  }
}

export default Home;
