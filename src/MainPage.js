import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import BookShelf from './BookShelf';
import './App.css';

const MainPage = (props) => {

  /**
   * @description Create the main page containing the users books organized
   * into bookshelves
   * @returns {HTMLDivElement} Main application page
   * @memberof BooksApp
   */
  const { books, shelfNames, changeShelf } = props;
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
                books={books.filter(book => book.shelf === shelf.id)}
                changeShelf={changeShelf}
                shelfNames={shelfNames}
              />
            )}/>
          );
        })}
      </div>
    </div>
  )
}

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  shelfNames: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default MainPage;
