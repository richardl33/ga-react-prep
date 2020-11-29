// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // What should the component render?
  render () {

    // Make sure to return some UI.
    return (
      <div>
        <h1>Hello World!</h1>
        <h3>It is time for tea.</h3>
      </div>
    )
  }
}

export default Hello