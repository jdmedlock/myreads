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

  render() {
    const { books, title, changeShelf, shelfNames } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
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