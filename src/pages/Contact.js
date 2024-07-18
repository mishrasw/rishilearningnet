import React from "react";
import "../style/Contact.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Christmas from "./Christmas.js";
import Clever from "./Clever.js";
import Supercow from "./Supercow.js";
import Memory from "./Memory.js";
import PowerOfSoap from "./PowerOfSoap.js";
import UnniWish from "./UnniWish.js";
import WalkwithGandhi from "./WalkwithGandhi.js";
import MiddleSchool from "./MiddleSchool.js"; 
import WorldChildrenDay from "./WorldChildrenDay.js";
import ChildrenHelping from "./ChildrenHelping.js";
import Croak from "./Croak.js";
import Fossils from "./Fossils.js";
import GodStory from "./GodStory.js";
import ILoveMyPlanet from "./ILoveMyPlanet.js";

const Contact = () => {
  return (
<div>
<Router>
      <div class="readLinks">
      <br />
      <Link to="/Christmas" style={{ color: 'white' }}>What is Christmas?</Link>&nbsp;&nbsp;
      <Link to="/Clever" style={{ color: 'white' }}>Clever Tortoise</Link>&nbsp;&nbsp;
      <Link to="/Supercow" style={{ color: 'white' }}>Supercow</Link>&nbsp;&nbsp;
      <Link to="/Memory" style={{ color: 'white' }}>The Memory Tree</Link>&nbsp;&nbsp;
      <Link to="/PowerOfSoap" style={{ color: 'white' }}>Power Of Soap</Link>&nbsp;&nbsp;
      <Link to="/UnniWish" style={{ color: 'white' }}>Unni's Wish</Link>&nbsp;&nbsp;
      <Link to="/WalkWithGandhi" style={{ color: 'white' }}>Walk With Gandhi</Link>&nbsp;&nbsp;
      <Link to="/MiddleSchool" style={{ color: 'white' }}>Middle School</Link>&nbsp;&nbsp;
      <Link to="/WorldChildrenDay" style={{ color: 'white' }}>World Children's Day</Link>&nbsp;&nbsp;
      <Link to="/ChildrenHelping" style={{ color: 'white' }}>Children Helping Children</Link>&nbsp;&nbsp;
      <Link to="/Croak" style={{ color: 'white' }}>Croak</Link>&nbsp;&nbsp;
      <Link to="/Fossils" style={{ color: 'white' }}>Fossils</Link>&nbsp;&nbsp;
      <Link to="/GodStory" style={{ color: 'white' }}>God's Story</Link>&nbsp;&nbsp;
      <Link to="/ILoveMyPlanet" style={{ color: 'white' }}>I Love My Plannet</Link>&nbsp;&nbsp;
      </div>
        <Switch>
          <Route path="/Christmas"  exact component={Christmas} />
          <Route path="/Clever"  exact component={Clever} />
          <Route path="/Supercow"  exact component={Supercow} />
          <Route path="/Memory"  exact component={Memory} />
          <Route path="/PowerOfSoap"  exact component={PowerOfSoap} />
          <Route path="/UnniWish"  exact component={UnniWish} />
          <Route path="/WalkWithGandhi"  exact component={WalkwithGandhi} />
          <Route path="/MiddleSchool"  exact component={MiddleSchool} />
          <Route path="/WorldChildrenDay"  exact component={WorldChildrenDay} />
          <Route path="/ChildrenHelping"  exact component={ChildrenHelping} />
          <Route path="/Croak"  exact component={Croak} />
          <Route path="/Fossils"  exact component={Fossils} />
          <Route path="/GodStory"  exact component={GodStory} />
          <Route path="/ILoveMyPlanet"  exact component={ILoveMyPlanet} />
        </Switch>
      </Router> 
      </div>

)};
  
  export default Contact;
  
