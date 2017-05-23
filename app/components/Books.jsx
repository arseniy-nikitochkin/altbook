const React = require('react');
const AltContainer = require('alt-container');
const BooksStore = require('../stores/BooksStore');
const BooksList = require('../components/BooksList.jsx')
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
