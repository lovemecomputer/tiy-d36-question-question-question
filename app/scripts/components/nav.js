import React from 'react';
import { connect } from 'react-redux';
import container from '../containers/all.js';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <Link to="#">test nav link</Link>
      </nav>
    );
  }
}

export default connect()(Nav);
