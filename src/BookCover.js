import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class BookCover extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  }

  render() {
    const { imageLinks, title, authors } = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
            style={{ width: 128, height: 193, 
            backgroundImage: `url(${imageLinks.thumbnail})` }}>
          </div>
          <BookShelfChanger book={this.props.book} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors[0]}</div>
      </div>
    );
  }
}

export default BookCover;