import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddByThree from "./AddByThree";
import AddByFive from "./AddByFive";
import AddByFour from "./AddByFour";
import MinusUptoThree from "./MinusUptoThree"
import MinusFour from "./MinusFour";
import MinusFive from "./MinusFive";
import "../style/About.css"


const About = () => {
return (
  <div class="aboutBottom">
      <Router>
      <div class="mathlinks">
      <Link to="/addByThree" style={{ color: 'white' }}>Addition - 3A</Link>&nbsp;&nbsp;
      <Link to="/addByFour" style={{ color: 'white' }}>Addition - 4A</Link>&nbsp;&nbsp;
      <Link  to="/addByFive" style={{ color: 'white' }}>Addition - 5A</Link>&nbsp;&nbsp;
      <Link to="/MinusUptoThree" style={{ color: 'white' }}>Subtract - 3B</Link>&nbsp;&nbsp;
      <Link to="/MinusFour" style={{ color: 'white' }}>Subtract - 4B</Link>&nbsp;&nbsp;
      <Link to="/MinusFive" style={{ color: 'white' }}>Subtract - 5B</Link>&nbsp;&nbsp;
      </div>
        <Switch>
          <Route path="/addByThree"  exact component={AddByThree} />
          <Route path="/addByFive"  exact component={AddByFive} />
          <Route path="/addByFour"  exact component={AddByFour} />
          <Route path="/MinusUptoThree"  exact component={MinusUptoThree} />
          <Route path="/MinusFour"  exact component={MinusFour} />
          <Route path="/MinusFive"  exact component={MinusFive} />
        </Switch>
      </Router> 
      
  </div>
)};

export default About;
