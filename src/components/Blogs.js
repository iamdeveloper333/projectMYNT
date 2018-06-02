import React, { Component } from 'react';
import SingleBlog from './SingleBlog';

class Blogs extends Component {
  constructor(props){
  	super(props);
  	this.state  ={
  		data:
  		[{
        blogImg : './images/Bitmap.jpg',
  			title : '10 best tricks to use while you are on a loosing side in Poker',
	  		content :'Ever noticed how you don’t remember the days, but remember the moments…',
	  		date : 'Apr 25th, 2016',
	  		views : 5334
  		},
  		{
        blogImg : './images/Bitmap.jpg',
  			title : '10 best tricks to use while you are on a loosing side in Poker',
	  		content :'Ever noticed how you don’t remember the days, but remember the moments…',
	  		date : 'Apr 25th, 2016',
	  		views : 5333
  		},
  		{
        blogImg : './images/Bitmap.jpg',
  			title : '10 best tricks to use while you are on a loosing side in Poker',
	  		content :'Ever noticed how you don’t remember the days, but remember the moments…',
	  		date : 'Apr 25th, 2016',
	  		views : 5330
  		}]
  	}
  }



  render() {
  	 const singleBlog=this.state.data.map((val)=>{
 	return(
 		<SingleBlog key={val.views} blogImg={val.blogImg} title={val.title} content={val.content} date={val.date} views={val.views} />
 		)
 })
    return (
      <div className="container blogs py-5">
      		<h3 className="pb-4">Blogs</h3>
      		<div className="row pb-4">
      			{singleBlog}
      			</div>
      </div>
    );
  }
}

export default Blogs;
