import React, { Component } from 'react';

class SingleBlog extends Component {

  constructor(props){
    super(props);
    this.state={
      viewsImg : './images/views.png',
    }
  }

  render() {
    return (
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 mb-4">
        <div className="card">
            <img className="card-img" src={`${this.props.blogImg}`} alt="blog"/>
            <div className="card-body">
                <div className="card-title pb-0 mb-0">{this.props.title}</div>
                <div className="card-text">
                  <div className="blog-content">{this.props.content}</div>
                  <div className="blog-footer">
                      <i className="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                      {this.props.date}
                      <img className="pl-3 pr-2" src={`${this.state.viewsImg}`} alt="view"/>
                      {this.props.views}
                      </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default SingleBlog;
