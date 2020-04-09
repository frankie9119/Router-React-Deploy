import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './MainComponent';
import CoachingComponent from './CoachingComponent';
import ChanteuseComponent from './ChanteuseComponent';

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/foo/one">About One</Link></li>
            <li><Link to="/bar/two">About Two</Link></li>
            <li><Link to="/splat">Splat</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/foo/one" component={One} />
            <Route path="/bar/two" component={Two} />
            <Route component={Splat} />
          </Switch>
        </div>
      </Router>
    );
  }
}

//State less components
//Home
const Home = () =>
  <div>
    <h1>Home</h1>
    <p>This is the Home Page</p>
  </div>;

const One = () =>
  <div>
    <About />
    <h1>One</h1>
    <p>This is One</p>
  </div>;

const Two = () =>
  <div>
    <About />
    <h1>Two</h1>
    <p>This is Two</p>
  </div>;

//About
const About = () =>
  <div>
    <h1>About</h1>
    <p>This is about</p>
  </div>;

const Splat = () =>
  <div>
    <h1>Splat</h1>
    <p>This is splat</p>
  </div>;
  
export default App
