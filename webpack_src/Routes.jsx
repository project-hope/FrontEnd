import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const Routes = ({history}) => (
  <Router>
    <div>
      <Route exact path="/" component={test} />
      {/* <Route path="divorce" component={<div>Divorce</div>}/>
      <Route path="disability" component={<div>disability</div>}/> */}
    </div>
  </Router>);

export default Routes;

const test = () => (<div>TEST</div>);