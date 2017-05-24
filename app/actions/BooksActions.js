const alt = require('../alt');

class BooksActions {
	
  updateBooks(books) {
    return books;
  }

  fetchBooks() {
    return null;
  }

  booksFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(BooksActions);
