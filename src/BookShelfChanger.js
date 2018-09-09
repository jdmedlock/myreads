import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
    shelfNames: PropTypes.array.isRequired
  }

  // BookShelfChanger state
  state = {
    currentShelf: this.props.book.shelf,
  }

  /**
   * @description Move the book to a new bookshelf
   * @param {Object} event Event object created for the destination bookshelf
   * @memberof BookShelfChanger
   */
  moveToNewShelf = (event) => {
    this.props.changeShelf(this.props.book, event.target.value);
    this.setState({
      currentShelf: event.target.value,
    });
  }

  /**
   * @description Create the bookshelf changer control
   * @returns {HTMLDivElement} Bookshelf changer control
   * @memberof BookShelfChanger
   */
  render() {
    const book = this.props.book;
    const shelfNames = this.props.shelfNames;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf}
            onChange={(event) => this.moveToNewShelf(event)}>
          <option value="move" disabled>Move to...</option>
          { shelfNames.map((shelf) => {
              return (
                <option value={shelf.id} key={shelf.id}>{shelf.description}</option>
              );
            })
          }
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;