import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import Header from './header.js';

class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header username="bitey" />
        <section>
          <h2>Hello!</h2>
          <p>There are *** questions</p>
          <ul>
            <li>(insert links to each question, link to each one)</li>
            <li>(insert links to each question, link to each one)</li>
            <li>(insert links to each question, link to each one)</li>
          </ul>

          <button
            onClick={() => this.props.history.push('/question')}
            type="button"
          >
            Start!
          </button>
        </section>
      </main>
    );
  }
}

export default connect()(Start);
