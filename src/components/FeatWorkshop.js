import React, { Component } from 'react';
import SingleWorkshop from './SingleWorkshop';

class FeatWorkshop extends Component {
  constructor(props){
  	super(props);
  	this.state  ={
                		data:
                		[{
                			workShopImg : './images/Bitmap.jpg',
              	  		title :'Off Roading1',
              	  		location : 'Northern Africa',
                      date : 'Jun 25th, 2018 | 10 AM Onwards',
              	  		timeRemain : '24 Days | 12 hours'
                		},
                		{
                			workShopImg : './images/Bitmap.jpg',
              	  		title :'Off Roading2',
              	  		location : 'Northern Africa',
                      date : 'Jun 25th, 2018 | 10 AM Onwards',
              	  		timeRemain : '24 Days | 12 hours'
                		},
                		{
                			workShopImg : './images/Bitmap.jpg',
              	  		title :'Off Roading3',
              	  		location : 'Northern Africa',
                      date : 'Jun 25th, 2018 | 10 AM Onwards',
              	  		timeRemain : '24 Days | 12 hours'
                		},
                		{
                			workShopImg : './images/Bitmap.jpg',
              	  		title :'Off Roading4',
              	  		location : 'Northern Africa',
                      date : 'Jun 25th, 2018 | 10 AM Onwards',
              	  		timeRemain : '24 Days | 12 hours'
                		}]
                	}
  }



  render() {
  	 const singleWorkshop = this.state.data.map((val)=>{
 	return(
 		<SingleWorkshop key={val.title} workShopImg={val.workShopImg} title={val.title} location={val.location} date={val.date} timeRemain={val.timeRemain} />
 		)
 })
    return (
      <div className="container py-5 featured-workshops">
      		<h3 className="pb-5">Featured Workshop</h3>
      		<div className="row">
      			{singleWorkshop}
      		</div>
      </div>
    );
  }
}

export default FeatWorkshop;
