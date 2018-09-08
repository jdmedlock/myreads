import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import BookShelf from './BookShelf';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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
        {this.state.showSearchPage ? (
          /* Render the Search page */
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          /* Render the Main page */
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Route exact path='/' render={() => (
                <BookShelf
                  title="Currently Reading"
                  books={this.state.books.filter(book => book.shelf === "currentlyReading")}
                  changeShelf={this.changeShelf}
                />
              )}/>
              <Route exact path='/' render={() => (
                <BookShelf
                  title="Want to Read"
                  books={this.state.books.filter(book => book.shelf === "wantToRead")}
                  changeShelf={this.changeShelf}
                />
              )}/>
              <Route exact path='/' render={() => (
                <BookShelf
                  title="Read"
                  books={this.state.books.filter(book => book.shelf === "read")}
                  changeShelf={this.changeShelf}
                />
              )}/>
              <Route exact path='/' render={() => (
                <BookShelf
                  title="None"
                  books={this.state.books.filter(book => book.shelf === "none")}
                  changeShelf={this.changeShelf}
                />
              )}/>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
