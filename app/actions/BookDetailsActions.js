const alt = require('../alt');

class BookDetailsActions {
  updateBookDetails(bookDetails) {
    return bookDetails;
  }

  fetchBookDetails() {
    return null;
  }

  bookDetailsFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(BookDetailsActions);