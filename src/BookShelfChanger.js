import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class BookShelfChanger extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  changeShelf(book, newShelf) {
    BooksAPI.update({ id: book.id }, newShelf).then((book) => {
      // this.setState({ books });
      console.log(book);
    });
  }

  render() {
    const { book } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf}
            onChange={(event) => this.changeShelf(book, event.target.value)}>
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