import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { UiHeader, UiTitle, UiProgressMeter } from 'liveramp-ui-toolkit';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to={'/'}>Redux Auth</Link>
      </header>
    )
  }
}

export default Header;