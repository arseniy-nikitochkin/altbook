const React = require('react');
const AltContainer = require('alt-container');
const BooksStore = require('../stores/BooksStore');
const BooksActions = require('../actions/BooksActions');
const { Link } = require('react-router');

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

    return (
      <ul> 
      {this.props.books.map((book, i) => {
          let bookPath = `/book/${book.id}`;
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

const Books = React.createClass({
  componentDidMount() {
    BooksStore.fetchBooks();
  },

  render() {
    return (
      <div>
        <AltContainer store={BooksStore}>
          <BooksList />
        </AltContainer>
      </div>
    );
  }
});

module.exports = Books;
