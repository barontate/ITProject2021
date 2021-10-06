import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loginpage from './Loginpage';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Loginpage} />
          <Route path='/home' component={Homepage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
