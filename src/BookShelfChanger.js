import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  /**
   * @description Generate the HTML for the bookshelf changer control
   * @returns {HTMLDivElement} Bookshelf changer control
   * @memberof BookShelfChanger
   */
  render() {
    const { book } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf}
            onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;