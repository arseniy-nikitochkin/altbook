const BooksActions = require('../actions/BooksActions');

const BooksSource = {

  fetchBooks() {
    return {
      remote() {
        return fetch('/api/books/').then(result => result.json());
      },

      local() {
        return null;
      },

      success: BooksActions.updateBooks,
      error: BooksActions.booksFailed,
      loading: BooksActions.fetchBooks
    }
  }
};

module.exports = BooksSource;
