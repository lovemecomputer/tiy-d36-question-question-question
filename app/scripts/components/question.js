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

  currentQuestion(questionId) {
    return this.props.questions.filter( (current, i, array) => {
      return current.id == questionId;
    })[0];
  }

  render() {
    var currentQuestionNumber = this.props.match.params.questionNumber;
    var maxQuestionNumber = this.props.questions.length;

    return (
      <div>
        <Header username={this.props.username} />
        <main className="page-frame">
          <Nav />
          <section className="page-content">
            <h2>Question {currentQuestionNumber}</h2>
            <p>❇️ {this.currentQuestion(currentQuestionNumber).question}</p>
            <form>
              <input type="text" ref="answerField" placeholder="answer…"/>
              <button type="submit">Submit</button>
            </form>
            <div className="pagination">
              <button type="button" onClick={() => this.props.history.push('/question/' + (Number(currentQuestionNumber) - 1) )}>←</button>
              <span className="pagination-count">{currentQuestionNumber} of {maxQuestionNumber}</span>
              <button type="button" onClick={() => this.props.history.push('/question/' + (Number(currentQuestionNumber) + 1))}>→</button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default connect(container.allState)(Question);
