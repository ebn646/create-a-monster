/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, css, Global } from '@emotion/react'
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
import ImageData from './ImageData'

function Home({ history }) {
  const location = useLocation()
  const { currentStep, setMonsterType } = useMonsterCreator()

  useEffect(() => {
    console.log('route has been changed')
  }, [location.pathname])

  return (
    <div className="home">
      <Global
        styles={css`
          @font-face {
            font-family: 'MutantAcademyBB';
            font-style: normal;
            font-weight: 700;
            src: local(''), url('/fonts/MutantAcademyBB.ttf') format('truetype');
          }
        `}
      />
      <Background />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProgressBar />
      </div>
      {currentStep === 0 && (
        <>
          <div style={{ position: 'absolute', left: 50 }}>
            <Header />
          </div>
          <ImageSlider
            data={ImageData}
            width={850}
            height={525}
            callback={setMonsterType}
          />
        </>
      )}
      {currentStep !== 0 && (
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
