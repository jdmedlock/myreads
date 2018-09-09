import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
// import BookCover from './BookCover';
import BookShelf from './BookShelf';
import './App.css';

class SearchPage extends React.Component {

  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    shelfNames: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  // SearchPage state
  state = {
    searchText: '',
    books: []
  }

  /**
   * @description Capture the search text as it is entered by the user
   * @param {*} event Event created from the user input activity
   * @memberof SearchPage
   */
  queryBooks(event) {
    const enteredText = event.target.value.trim();
    this.setState({ searchText: enteredText });
    if (enteredText) {
      BooksAPI.search(enteredText)
      .then((books) => {
        if (books.length > 0) {
          const updatedBooks = this.updateShelf(books);
          this.setState({ books: updatedBooks });
        } else {
          this.setState({ books: [] });
        }
      })
      .catch((error) => console.log('Error performing search. Error: ', error));
    } else {
      this.setState({ books: [] });
    }
  }

  /**
   * @description Add a shelf property to each book object. If the book is in
   * the `myBooks` prop copy the shelf designation. Otherwise, set the shelf
   * to 'none'.
   * @param {Array} books Book objects
   * @returns {Array} An array of book objects with a `shelf` property added
   * to each book
   * @memberof SearchPage
   */
  updateShelf(books) {
    return books.map(book => {
      let updatedBook = book;
      const bookIndex = this.props.myBooks.findIndex((myBook) => myBook.id === book.id);
      if (bookIndex !== -1) {
        updatedBook.shelf = this.props.myBooks[bookIndex].shelf;
      } else {
        updatedBook.shelf = 'none';
      }
      return updatedBook;
    });
  }

  /**
   * @description Create the HTML for the search page to allow the user to
   * search for books
   * @returns {HTMLDivElement} Main application page
   * @memberof BooksApp
   */
  render() {
    const { searchText, books } = this.state;
    const { shelfNames, changeShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
              value={searchText}
              onChange={(event) => this.queryBooks(event)} />
          </div>
        </div>
        <div className="search-books-results">
          {shelfNames.map((shelf) => {
            const shelfDesc = shelf.id === 'none' ? 'New books...' : shelf.description;
            return (
              <BookShelf
                title={shelfDesc}
                books={books.filter(book => book.shelf === shelf.id)}
                changeShelf={changeShelf}
                shelfNames={shelfNames}
                key={shelf.id}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default SearchPage
