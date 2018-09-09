import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css';

const MAIN_PAGE_PATH = '/';
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
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books });
      })
    }
  
    /**
     * @description Move the selected book to a new bookshelf
     * @param {Object} book An object describing the book to be moved
     * @param {String} newShelf The name of the destination bookshelf
     * @memberof BooksApp
     */
    changeShelf = (book, newShelf) => {
      BooksAPI.update(book, newShelf).then(() => {
        book.shelf = newShelf;
        this.setState((state) => ({ books: state.books.map(book => book) }));
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
    return (
      <div className="app">
        {window.location.pathname === MAIN_PAGE_PATH ? (
          <div>
            <Route exact path='/' render={() => (
              <MainPage books={this.books} shelfNames={SHELF_NAMES}
                changeShelf={this.changeShelf} />
              )}/>
          </div>
          ) : (
            <div>
              <Route exact path='/search' render={() => (
                <SearchPage books={this.state.books} shelfNames={SHELF_NAMES}
                  changeShelf={this.changeShelf} />
            )}/>
            </div>
        )}
        <div className="open-search">
          <Link className='close-search' to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
