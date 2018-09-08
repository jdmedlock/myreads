import React from 'react';
import { Link, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css';

const MAIN_PAGE_PATH = '/';

class BooksApp extends React.Component {

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
              <MainPage/>
            )}/>
          </div>
          ) : (
            <div>
              <Route exact path='/search' component={SearchPage} />
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
