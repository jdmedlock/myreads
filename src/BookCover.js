import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class BookCover extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
    shelfNames: PropTypes.array.isRequired
  }

  /**
   * @description Create the main page containing the book cover
   * @returns {HTMLDivElement} Book cover
   * @memberof BookCover
   */
  render() {
    const { imageLinks, title, authors } = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})` }}>
          </div>
          <BookShelfChanger book={this.props.book}
            changeShelf={this.props.changeShelf}
            shelfNames={this.props.shelfNames}
          />
        </div>
        <div className="book-title">{title}</div>
        {authors !== undefined && authors.length > 0 && (
          <div className="book-authors">{authors[0]}</div>
        )}
      </div>
    );
  }
}

export default BookCover;