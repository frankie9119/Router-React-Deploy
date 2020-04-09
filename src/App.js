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

function App() {
  return (
<Router>
<Switch>
<Route exact path="/" component={MainComponent} />
<Route exact path="/CoachingComponent" component={CoachingComponent} />
<Route exact path="/ChanteuseComponent" component={ChanteuseComponent} />
</Switch>
{/*
<ScrollToRoute exact path="/" component={MainComponent} />
<ScrollToTopRoute exact path="/CoachingComponent" component={CoachingComponent} />
<ScrollToTopRoute exact path="/ChanteuseComponent" component={ChanteuseComponent} />
<ScrollToTopRoute exact path="/ContactComponent" component={ContactComponent} />


<NavBar/>
<HeaderComponent logo={logo}/>
<CardsComponent margotImgCard1={margotImgCard1} margotImgCard2={margotImgCard2}/>
<YouTubeComponent/>
<Footer/>
*/}

</Router>
  );
}

export default App;
