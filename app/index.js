const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter: Router, Route} = require('react-router-dom');
const Books = require('./components/Books.jsx');
const BookDetails = require('./components/BookDetails.jsx');

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Books}/>
      <Route path="/book/:id" component={BookDetails}/>
    </div>
  </Router>,
  document.getElementById('app')
);