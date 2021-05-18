import React, { useEffect } from 'react'
import Home from './components/Home'
import Banner from './components/Banner'
import { MonsterProvider } from './MonsterContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useLocation
} from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <MonsterProvider>
      <Router>
        <div id="app">
          <div className="container">
            <Switch>
              <Route path="/">
                <Banner />
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </MonsterProvider>
  )
}

export default App
