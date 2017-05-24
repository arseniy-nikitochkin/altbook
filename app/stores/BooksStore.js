const alt = require('../alt');
const BooksActions = require('../actions/BooksActions');
const BooksSource = require('../sources/BooksSource');

class BooksStore {
  
  constructor() {
    this.books = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateBooks: BooksActions.UPDATE_BOOKS,
      handleFetchBooks: BooksActions.FETCH_BOOKS,
      handleBooksFailed: BooksActions.BOOKS_FAILED,
    });

    this.exportAsync(BooksSource);
  }

  handleUpdateBooks(books) {
    this.books = books;
    this.errorMessage = null;
  }

  handleFetchBooks() {
    this.books = [];
  }

  handleBooksFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

module.exports = alt.createStore(BooksStore, 'BooksStore');
