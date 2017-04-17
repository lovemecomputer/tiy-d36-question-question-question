import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import AppRoot from './components/app_root.js';
import Start from './components/start.js';
import About from './components/about.js';
import Contact from './components/contact.js';

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div className="page-wrapper">
          <Route exact path="/" component={Start} />
          <Route exact path="/question" component={Question} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}

const Question = props => {
  return <div>Question</div>;
};

const Results = props => {
  return <div>Results</div>;
};
