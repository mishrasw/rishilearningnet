import React from "react";
import "../style/Contact.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Mario from "./Mario";
import Pacman from "./Pacman";


const Games = () => {
  return (
<div>
<Router>
      <div class="readLinks">
      <br />
      <Link to="/Mario" style={{ color: 'white' }}>Super Mario</Link>&nbsp;&nbsp;
      <Link to="/Pacman" style={{ color: 'white' }}>Pacman</Link>&nbsp;&nbsp;
      
      </div>
        <Switch>
          <Route path="/Mario"  exact component={Mario} />
          <Route path="/Pacman"  exact component={Pacman} />
        
        </Switch>
      </Router> 
      </div>

)};
  
  export default Games;
  
