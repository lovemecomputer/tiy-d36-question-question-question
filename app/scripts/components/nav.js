import React from 'react';
import { connect } from 'react-redux';
import container from '../containers/all.js';
import { Route, Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <h3>Questions:</h3>
        <ul>
          {this.props.questions.map((question, index) => {
            return (
              <li>
                <NavLink key={question.id} to="/question">
                  {question.question}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default connect()(Nav);
