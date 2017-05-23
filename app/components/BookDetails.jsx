const React = require('react');
const AltContainer = require('alt-container');
const BookDetailsStore = require('../stores/BookDetailsStore');
const { Link } = require('react-router');

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

  	return (
			<div className="book-details">
				<img className="book-details__img" src={this.props.bookDetails.src} />
				<div className="book-details__name">{this.props.bookDetails.name}</div>
				<div className="book-details__author">{this.props.bookDetails.author}</div>
				<div className="book-details__genre">{this.props.bookDetails.genre}</div>
				<div className="book-details__year">{this.props.bookDetails.year} год</div>
				<div className="book-details__description">{this.props.bookDetails.description}</div>
			</div>
		);
	}

})

const BookDetails = React.createClass({
	componentDidMount() {
		BookDetailsStore.fetchBookDetails(this.props.params.id);
	},

	render() {
		return (
			<div>
				<Link to="/" className="book-details__to-list-link">
					<i className="fa fa-arrow-circle-left" aria-hidden="true"></i> К списку книг
				</Link>
				<AltContainer store={BookDetailsStore}>
					<BookInfo />
				</AltContainer>
			</div>
		)
	}
})

module.exports = BookDetails;