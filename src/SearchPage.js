import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class SearchPage extends React.Component {

  state = {
    searchText: ''
  };

  /**
   * @description Capture the search text as it is entered by the user
   * @param {*} event Event created from the user input activity
   * @memberof SearchPage
   */
  onChange(event) {
    console.log('event.target: ', event.target.value);
    this.setState({ searchText: event.target.value })
  }

  /**
   * @description Create the HTML for the search page to allow the user to
   * search for books
   * @returns {HTMLDivElement} Main application page
   * @memberof BooksApp
   */
  render() {
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
              onChange={(event) => this.onChange(event)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
