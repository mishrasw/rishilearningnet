import React from "react";
import "../style/Contact.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Mario from "./Mario";
import Pacman from "./Pacman";
import Word from "./Word";
import Clock from "./Clock";
import Bubble from "./Bubble";
import Bee from "./Bee";
import Picword from "./PicWord";


const Games = () => {
  return (
<div>
<Router>
      <div class="readLinks">
      <br />
      <Link to="/Mario" style={{ color: 'white' }}>Super Mario</Link>&nbsp;&nbsp;
      <Link to="/Pacman" style={{ color: 'white' }}>Spell</Link>&nbsp;&nbsp;
      <Link to="/Word" style={{ color: 'white' }}>Word Game</Link>&nbsp;&nbsp;
      <Link to="/Clock" style={{ color: 'white' }}>Clock</Link>&nbsp;&nbsp;
      <Link to="/Bubble" style={{ color: 'white' }}>Bubble</Link>&nbsp;&nbsp;
      <Link to="/Bee" style={{ color: 'white' }}>Word Bee</Link>&nbsp;&nbsp;
      <Link to="/Picword" style={{ color: 'white' }}>PicWord</Link>&nbsp;&nbsp;
      </div>
        <Switch>
          <Route path="/Mario"  exact component={Mario} />
          <Route path="/Pacman"  exact component={Pacman} />
          <Route path="/Word"  exact component={Word} />
          <Route path="/Clock"  exact component={Clock} />
          <Route path="/Bubble"  exact component={Bubble} />
          <Route path="/Bee"  exact component={Bee} />
          <Route path="/Picword"  exact component={Picword} />
        
        </Switch>
      </Router> 
      </div>

)};
  
  export default Games;
  
