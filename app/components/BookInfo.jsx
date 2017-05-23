const React = require('react');
const BookDetailsStore = require('../stores/BookDetailsStore');

const BookInfo = React.createClass({
	render() {
		if (this.props.errorMessage) {
    	return (
      	<div>{this.props.errorMessage}</div>
      );
    }

    if (BookDetailsStore.isLoading()) {
	    return (
	      <div>
	        <img className="spinner" src="../img/ring-alt.svg"/>
	      </div>
	    );
  	}

  	const { bookDetails } = this.props;
  	return (
			<div className="book-details">
				<img className="book-details__img" src={bookDetails.src} />
				<div className="book-details__name">{bookDetails.name}</div>
				<div className="book-details__author">{bookDetails.author}</div>
				<div className="book-details__genre">{bookDetails.genre}</div>
				<div className="book-details__year">{bookDetails.year} год</div>
				<div className="book-details__description">{bookDetails.description}</div>
			</div>
		);
	}

})

module.exports = BookInfo;