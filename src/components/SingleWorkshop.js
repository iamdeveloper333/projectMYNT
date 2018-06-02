import React, { Component } from 'react';

class SingleWorkshop extends Component {
  constructor(props){
    super(props);
    this.state={
      calendarImg : './images/calendar.svg',
      mapImg : './images/map.svg',
    }
  }
  render() {
    return (
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="card p-2">
            <img className="card-img-top" src={`${this.props.workShopImg}`} alt="workshop"/>
            <div className="card-body">
                <div className="card-title">{this.props.title}</div>
                <div className="card-text row p-0 m-0">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 p-0">
                        <div className="location">
                            <img className="mr-2" src={`${this.state.mapImg}`} alt="location" style={{width: '18px',height: '18px'}}/>{this.props.location}
                        </div>
                        <div className="date">
                            <img className="mr-2" src={`${this.state.calendarImg}`} alt="date"/>{this.props.date}
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0">
                        <div className="time-remain p-0 text-right">
                            <h5 className="m-0 pt-1">Time Remaining</h5>
                            <p>{this.props.timeRemain}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default SingleWorkshop;
