import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css';

const SHELF_NAMES = [
  {id: 'currentlyReading', description: 'Currently Reading'},
  {id: 'wantToRead', description: 'Want to Read'},
  {id: 'read', description: 'Read'},
  {id: 'none', description: 'None'}
];

class BooksApp extends React.Component {

  // MainPage state
  state = {
    books: []
  }

  /**
   * @description Retrieve all books and add them to the Application state
   * before rendering the application page
   * @memberof BooksApp
   */
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books });
    })
    .catch((error) => {
      console.log("Error during componentDidMount. error: ", error);
    });
  }

  /**
   * @description Move the selected book to a new bookshelf.
   * @param {Object} book An object describing the book to be moved
   * @param {String} newShelf The name of the destination bookshelf
   * @memberof BooksApp
   */
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.setState((state) => (
        // Ensure that the book to be moved is removed from the list before
        // adding it back into the list with an updated shelf
        { books: state.books
                    .filter( currentBook => currentBook.id !== book.id )
                    .concat(book)
        }));
    });
  }

  /**
   * @description Create the HTML for the following application pages:
   * - main page containing the users books organized into bookshelves
   * - search page to allow the user to search for books
   * @returns {HTMLDivElement} Main application page
   * @memberof BooksApp
   */
  render() {
    const books = this.state.books;
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <MainPage books={books} shelfNames={SHELF_NAMES}
              changeShelf={this.changeShelf} />
            )}/>
          <Route exact path='/search' render={() => (
            <SearchPage myBooks={books} shelfNames={SHELF_NAMES}
              changeShelf={this.changeShelf} />
          )}/>
        </Switch>
        <div className="open-search">
          <Link className='close-search' to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp;
