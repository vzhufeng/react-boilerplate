import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import './index.less';

class App extends Component {
  render() {
  return <div>hello webpack {asd}</div>;
  }
}

class App2 extends Component {
  render() {
    return <div>hello webpack 222 ^_^</div>;
  }
}

ReactDOM.render(<HashRouter>
  <Switch>
    <Route path="/app" component={App2} />
    <Route path="/app2" component={App2} />
    <Redirect to="/app" />
  </Switch>
</HashRouter>, document.getElementById("root"));
