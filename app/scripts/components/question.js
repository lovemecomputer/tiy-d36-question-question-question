import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import Header from './header.js';
import Nav from './nav.js';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.currentQuestion = this.currentQuestion.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  currentQuestion(questionId) {
    return this.props.questions.filter( (current, i, array) => {
      return current.id == questionId;
    })[0];
  }

  handlePagination (direction, current, max) {
    if (direction === 'next' && current < max) {
      this.props.history.push('/question/' + (Number(current) + 1));
    } else if (direction === 'previous' && current > 1) {
      this.props.history.push('/question/' + (Number(current) - 1));
    }
  }

  handleSubmit (e, currentQuestionId) {
    e.preventDefault();
    let inputText = this.refs.answerField.value;
    this.refs.answerField.value = '';
    if(inputText !== '' && inputText !== undefined) {
      this.props.dispatch({ type: 'SET_ANSWER', answerId: currentQuestionId, answerInput: inputText});
      this.props.history.push('/question/' + (Number(currentQuestionId) + 1));
    }
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
            <p>{this.currentQuestion(currentQuestionNumber).question}</p>
            <form>
              <input type="text" ref="answerField" placeholder="answer…"/>
              <button type="submit" onClick={(e) => this.handleSubmit(e, currentQuestionNumber)}>Submit</button>
            </form>
            <div className="pagination">
              <button type="button" onClick={() => this.handlePagination('previous', currentQuestionNumber, maxQuestionNumber)}>←</button>
              <span className="pagination-count">{currentQuestionNumber} of {maxQuestionNumber}</span>
              <button type="button" onClick={() => this.handlePagination('next', currentQuestionNumber, maxQuestionNumber)}>→</button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default connect(container.allState)(Question);
