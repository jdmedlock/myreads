import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
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
          <div>
            <Route exact path='/' render={() => (
              <SearchPage />
            )}/>
          </div>
        ) : (
          <div>
            <Route exact path='/' render={() => (
              <MainPage />
            )}/>
          </div>
        )}
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BooksApp
