const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, browserHistory } = require('react-router');
const Books = require('./components/Books.jsx');
const BookDetails = require('./components/BookDetails.jsx');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Books}/>
		<Route path="/book/:id" component={BookDetails}/>
	</Router>,
	document.getElementById('app')
);