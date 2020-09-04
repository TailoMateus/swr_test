import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import ReposList from './pages/ReposList'
import ReposDetails from './pages/ReposDetails'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ReposList />
        </Route>
        <Route path="/repos/:name">
          <ReposDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes