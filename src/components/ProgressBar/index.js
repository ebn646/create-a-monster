/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import useMonsterCreator from '../../hooks/useMonsterCreator'
import styled from 'styled-components'
import './progressbar.scss'

const StepProgress = styled.div`
  font-family: 'Catamaran', serif;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 400px;
  height: 60px;
  margin-top: 10px;
  position: relative;
`

const Number = styled.div`
  font-family: 'MutantAcademyBB', serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(110, 105, 105);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  z-index: 1;
  &.active {
    background: #054875;
  }
`

export default function ProgressBar() {
  const { currentStep } = useMonsterCreator()

  return (
    <StepProgress>
      <div className="bar">
        <div
          className="over"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>
      <div
        id="0"
        className={`number ${currentStep === 0 && 'active'} ${currentStep > 0 &&
          'blue'}`}
      >
        <span>01</span>
      </div>
      <div
        id="1"
        className={`number ${currentStep === 1 && 'active'} ${currentStep > 1 &&
          'blue'}`}
      >
        <span>02</span>
      </div>
      <div
        id="2"
        className={`number ${currentStep === 2 && 'active'} ${currentStep > 2 &&
          'blue'}`}
      >
        <span>03</span>
      </div>
      <div
        id="3"
        className={`number ${currentStep === 3 && 'active'} ${currentStep > 3 &&
          'blue'}`}
      >
        <span>04</span>
      </div>
      <div
        id="4"
        className={`number ${currentStep === 4 && 'active'} ${currentStep > 4 &&
          'blue'}`}
      >
        <span>05</span>
      </div>
    </StepProgress>
  )
}
