import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import HeaderInfo from '../containers/header';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <HeaderInfo />
        </div>
        <div className="row">
          <BookList />
          <BookDetail />
        </div>
        
      </div>
    );
  }
}
