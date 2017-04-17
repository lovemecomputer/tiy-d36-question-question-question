import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import Header from './header.js';
import Nav from './nav.js';

class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header username={this.props.username} />
        <main className="page-frame">
          <Nav questions={this.props.questions} />
          <section className="page-content">
            <h2>Hello!</h2>
            <p>There are <em>{this.props.questions.length}</em> questions.</p>

            <button
              onClick={() => this.props.history.push('/question')}
              type="button"
            >
              Start!
            </button>
          </section>
        </main>
      </div>
    );
  }
}

export default connect(container.allState)(Start);
