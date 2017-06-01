import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className=" col-md-8 text-primary text-center" id="bookdetail">Select a book to get started.</div>;
    }

    return (
      <div className=" col-md-8 detail" id="bookdetail">
        
        <div><h3 className="text-center" >{this.props.book.title}</h3></div>
        <hr></hr>
        <a>
          <img src={this.props.book.img} height="640" width="400"></img>
        </a>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
