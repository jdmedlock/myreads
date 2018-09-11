import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const BookCover = (props) => {

  /**
   * @description Create the main page containing the book cover
   * @returns {HTMLDivElement} Book cover
   * @memberof BookCover
   */
  const { imageLinks, title, authors } = props.book;

  return (
    <div className="book">
      <div className="book-top">
        { imageLinks !== undefined && (
          <div className="book-cover"
            style={{ width: 128, height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})` }}>
          </div>
        )}
        <BookShelfChanger book={props.book}
          changeShelf={props.changeShelf}
          shelfNames={props.shelfNames}
        />
      </div>
      <div className="book-title">{title}</div>
      {authors !== undefined && authors.length > 0 && (
        <div className="book-authors">{authors[0]}</div>
      )}
    </div>
  );
}

BookCover.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
  shelfNames: PropTypes.array.isRequired
}

export default BookCover;