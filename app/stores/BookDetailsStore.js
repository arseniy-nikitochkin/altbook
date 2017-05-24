const alt = require('../alt');
const BookDetailsActions = require('../actions/BookDetailsActions');
const BookDetailsSource = require('../sources/BookDetailsSource');

class BookDetailsStore {
  
	constructor() {
    this.bookDetails = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateBookDetails: BookDetailsActions.UPDATE_BOOK_DETAILS,
      handleFetchBookDetails: BookDetailsActions.FETCH_BOOK_DETAILS,
      handleBookDetailsFailed: BookDetailsActions.BOOK_DETAILS_FAILED,
    });

    this.exportAsync(BookDetailsSource);
  }

  handleUpdateBookDetails(bookDetails) {
    this.bookDetails = bookDetails;
    this.errorMessage = null;
  }

   handleFetchBookDetails() {
    this.bookDetails = [];
  }

   handleBookDetailsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}
  module.exports = alt.createStore(BookDetailsStore, 'BookDetailsStore');