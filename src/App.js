import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './MainComponent';
import About from './CoachingComponent';
import SomethingElse from './ChanteuseComponent';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/SomethingElse">Something else</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/SomethingElse" component={SomethingElse} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App
