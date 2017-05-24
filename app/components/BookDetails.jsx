const React = require('react');
const AltContainer = require('alt-container');
const BookDetailsStore = require('../stores/BookDetailsStore');
const BookInfo = require('../components/BookInfo.jsx');
const { Link } = require('react-router-dom');

const BookDetails = React.createClass({
	componentDidMount() {
		BookDetailsStore.fetchBookDetails(this.props.match.params.id);
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