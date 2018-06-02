import React, { Component } from 'react';

class Connect extends Component {

  render() {
    return (
      <div className="connect py-4">
      	<div className="row p-0 m-0">
      		<div className="col-lg-4 text-center">
      			<i className="fa fa-weixin" aria-hidden="true"></i>
      			<p className="mb-0 pt-3">24/7 Customer Care</p>
      		</div>
      		<div className="col-lg-4 text-center">
      			<i className="fa fa-paper-plane" aria-hidden="true"></i>
      			<p className="mb-0 pt-3">Resend Booking Confirmation</p>
      		</div>
      		<div className="col-lg-4 text-center">
      			<i className="fa fa-envelope" aria-hidden="true"></i>
      			<p className="mb-0 pt-3">Subcribe to our newsletter</p>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Connect;
