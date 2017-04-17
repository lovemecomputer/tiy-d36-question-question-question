import React from 'react';
import { connect } from 'react-redux';
import container from '../containers/all.js';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>qqq</h1>
        <div className="user-profile-link">
          {this.props.username}
        </div>
      </header>
    );
  }
}

export default connect()(Header);
