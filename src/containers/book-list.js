import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item ">
          <div className="text-center">
          {book.title}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-3 nav nav-pills nav-stacked">
        <h3 className="text-center">TOP 10</h3>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
