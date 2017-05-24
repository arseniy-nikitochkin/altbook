const BookDetailsActions = require('../actions/BookDetailsActions');

const BookDetailsSource = {

  fetchBookDetails() {
    return {
      remote(state, bookId) {
        return fetch(`/api/book/${bookId}`).then(result => result.json());
      },

      local() {
        return null;
      },

      success: BookDetailsActions.updateBookDetails,
      error: BookDetailsActions.bookDetailsFailed,
      loading: BookDetailsActions.fetchBookDetails
    }
  }
};

module.exports = BookDetailsSource;
