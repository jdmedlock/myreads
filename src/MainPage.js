import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import BookShelf from './BookShelf';
import './App.css';

class MainPage extends React.Component {
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
   * @description Create the main page containing the users books organized
   * into bookshelves
   * @returns {HTMLDivElement} Main application page
   * @memberof BooksApp
   */
  render() {
    return (
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
      </div>
    )
  }
}

export default MainPage;
