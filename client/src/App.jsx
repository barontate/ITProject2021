import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Loginpage from './Loginpage';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Express Tutorial</h2>
          <ul>
          <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
          </ul>
          <hr />
          <Switch>
              <Route path='/login' component={Loginpage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
