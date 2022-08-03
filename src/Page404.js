import React, { Component } from 'react';
import './App.css';

export default class Page404 extends Component {
  render() {
    return (
      <div className='pagenotfound'>
        <h1>Page not found </h1>
        <h2>Go back to home page <a href="/">Click Here</a></h2>
        </div>
    )
  }
}
