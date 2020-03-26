import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Games from './Components/Games'
import Header from './Components/Header'
import GameStreams from './Components/GameStreams'
import Streams from './Components/Streams'
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"



function App() {
  return (
    <Router className="container-fluid">
      <Header />
      <Route exact path="/" component={Games}/>
      <Route exact path="/top-streams" component={Streams}/>
      <Route exact path="/game/:id" component={GameStreams}/>
    </Router>
  );
}

export default App;
