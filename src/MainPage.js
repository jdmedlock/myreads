import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import BookShelf from './BookShelf';
import './App.css';

class MainPage extends React.Component {

  static propTypes = {
    shelfNames: PropTypes.array.isRequired
  }

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
   * @description Create the main page containing the users books organized
   * into bookshelves
   * @returns {HTMLDivElement} Main application page
   * @memberof BooksApp
   */
  render() {
    const shelfNames = this.props.shelfNames;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfNames.map((shelf) => {
            return (
              <Route key={shelf.id} exact path='/' render={() => (
                <BookShelf
                  title={shelf.description}
                  books={this.state.books.filter(book => book.shelf === shelf.id)}
                  changeShelf={this.changeShelf}
                  shelfNames={shelfNames}
                />
              )}/>
            );
          })}
        </div>
      </div>
    )
  }
}

export default MainPage;
