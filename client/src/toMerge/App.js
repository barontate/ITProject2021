import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'

import Home from './Home'
import {SingleContact} from './features/contacts/SingleContact'

function App() {
  return (
    <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                {/* <AddPostForm />
                <PostsList /> */}
                <Home />
              </React.Fragment>
            )}
          />
          <Route exact path="/contact/:contactId" component={SingleContact} />
          <Redirect to="/" />
        </Switch>
    </Router>
  )
}

export default App
