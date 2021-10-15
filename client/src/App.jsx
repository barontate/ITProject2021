import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Login from './components/Login'
import Home from './components/Home';
import {SingleContact} from './features/contacts/SingleContact'
import AddContact from './features/contacts/AddContact';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser(this));
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
          <div>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home} />
            <Route exact path="/contact/:contactId" component={SingleContact} />
            <Route exact path="/addingCard" component={AddContact}/>
          </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
