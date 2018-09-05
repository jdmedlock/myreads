import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { books, shelf, title } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(book => book.shelf === shelf).map((book) => (
              <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" 
                      style={{ width: 128, height: 193, 
                      backgroundImage: `url(${book.previewLink})` }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors[0]}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;