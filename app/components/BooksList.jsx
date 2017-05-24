const React = require('react');
const BooksStore = require('../stores/BooksStore');
const { Link } = require('react-router-dom');

const BooksList = React.createClass({

  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if (BooksStore.isLoading()) {
      return (
        <div>
          <img className="spinner" src="img/ring-alt.svg"/>
        </div>
      )
    }

    const { books } = this.props;
    return (
      <ul> 
      {books.map((book, i) => {
          const bookPath = `/book/${book.id}`;
          return (
            <li key={i} className="book-in-list">
                <img className="book-in-list__catalogue-image" src={book.src} />
                <Link to={bookPath} className="book-in-list__name">{book.name}</Link>
                <div className="book-in-list__author">{book.author}</div> 
                <div className="book-in-list__snippet">{book.snippet}</div>
            </li>
          );
        })
      }
      </ul>
    );
  }
});

module.exports = BooksList;