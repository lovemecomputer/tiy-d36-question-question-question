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
      <header className="page-header">
        <h1><Link to="/">qqq</Link></h1>
        <div className="user-profile-link">
          user: {this.props.username}
        </div>
      </header>
    );
  }
}

export default connect()(Header);
