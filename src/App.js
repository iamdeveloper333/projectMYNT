import React, { Component } from 'react';
import Home from './components/Home';
import FeatWorkshop from './components/FeatWorkshop';
import Blogs from './components/Blogs';
import Connect from './components/Connect';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <FeatWorkshop/>
        <Blogs/>
        <Connect/>
        <Footer/>
      </div>
    );
  }
}

export default App;
