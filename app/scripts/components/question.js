import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import Header from './header.js';
import Nav from './nav.js';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  currentQuestion() {
    return this.props.questions.filter( (current, i, array) => {
      return current.id == this.props.match.params.questionNumber;
    })[0];
  }

  render() {
    return (
      <div>
        <Header username={this.props.username} />
        <main className="page-frame">
          <Nav />
          <section className="page-content">
            <h2>Question {this.props.match.params.questionNumber}</h2>
            <p>{this.currentQuestion().question}</p>
          </section>
        </main>
      </div>
    );
  }
}

export default connect(container.allState)(Question);
