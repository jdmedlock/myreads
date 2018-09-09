import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookCover from './BookCover';

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired,
    shelfNames: PropTypes.array.isRequired
  }

  /**
   * @description Create the bookshelf containing the users books organized
   * into bookshelves
   * @returns {HTMLDivElement} Book shelf
   * @memberof BookShelf
   */
  render() {
    const { books, title, changeShelf, shelfNames } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title} ({books.length})</h2>
        <div className="bookshelf-books">
          {books.length === 0 ? (
            <p>No books have been assigned to this shelf</p>
          ) : (
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <BookCover book={book} changeShelf={changeShelf} shelfNames={shelfNames}/>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default BookShelf;