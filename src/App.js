import React, { useEffect } from 'react'
import Container from './components/Container'
import Banner from './components/Banner'
import Help from './components/Help'
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
            <Help />
            <Switch>
              <Route path="/">
                <Banner />
                <Container />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </MonsterProvider>
  )
}

export default App
