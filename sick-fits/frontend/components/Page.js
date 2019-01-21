import React, { Component } from 'react';
import Header from '../components/Header.js'
import Meta from '../components/Meta.js'

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;