import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Support from './components/Support';
import Faqs from './components/Faqs';
import Tnc from './components/Tnc';
import PrivacyPolicy from './components/PrivacyPolicy';
import Sitemap from './components/Sitemap';
import Workshops from './components/Workshops';
import AllBlogs from './components/Blogs';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



const Main = () => {
	return(
	 <Router>
		<div>
		  <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/support" component={Support}/>
          <Route path="/faqs" component={Faqs}/>
          <Route path="/tnc" component={Tnc}/>
          <Route path="/privacypolicy" component={PrivacyPolicy}/>
          <Route path="/sitemap" component={Sitemap}/>
          <Route path="/workshops" component={Workshops}/>
          <Route path="/allblogs" component={AllBlogs}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
        </div>            
     </Router>
     )
}


ReactDOM.render(<Main/>	, document.getElementById('root'));
registerServiceWorker();
