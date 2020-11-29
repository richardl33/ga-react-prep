// import logo from './logo.svg';
// import './App.css';

import React, {Component} from 'react';

class Post extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p><i>{this.props.author}</i></p>
        <p>{this.props.body}</p>
        <h3><strong>Comments:</strong></h3>
        <p>{this.props.comments[0]}</p>
      </div>
    )
  }
}

export default Post