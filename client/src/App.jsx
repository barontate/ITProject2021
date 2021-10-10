import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Login from './Login'
import Home from './Home';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
          <div>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home} />
          </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
