import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* 可以加载任何一个组件 */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
