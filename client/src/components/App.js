import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import NavTabs from './NavTabs';
import Content from './Content';

import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header/>
            <NavTabs/>
            <Content/>
        </div>
      </Router>
    );
  }
}


export default App;
