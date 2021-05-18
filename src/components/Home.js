import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useLocation
} from 'react-router-dom'
import SideBar from './SideBar'
import Navigation from './Navigation'
import Monster from './Monster'
import ProgressBar from './ProgressBar'
import Background from './Background'
import Header from './Header'
import ImageSlider from './ImageSlider'
import useMonsterCreator from '../hooks/useMonsterCreator'

function Home({ history }) {
  const location = useLocation()
  const { currentStep } = useMonsterCreator()

  useEffect(() => {
    console.log('route has been changed')
  }, [location.pathname])

  useEffect(() => {
    console.log('currentStep changed', currentStep)
  }, [currentStep])

  return (
    <div className="home">
      <Background />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProgressBar />
      </div>
      {currentStep === 1 && (
        <>
          <Header />
          <ImageSlider />
        </>
      )}
      {currentStep !== 1 && (
        <div style={{ display: 'flex', zIndex: 1 }}>
          <SideBar />
          <Monster />
        </div>
      )}
      <Navigation />
    </div>
  )
}

export default withRouter(Home)
