/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import useMonsterCreator from '../../hooks/useMonsterCreator'

const progressbar = css`
  font-family: 'Catamaran', serif;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 400px;
  height: 60px;
  margin-top: 10px;
  position: relative;
  &:after {
    content: '';
    width: 400px;
    height: 3px;
    background: black;
    position: absolute;
    top: 20px;
    z-index: 0;
  }
`

const number = css`
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
    <div className="progressbar">
      <div className={`number ${currentStep === 0 && 'active'}`}>01</div>
      <div className={`number ${currentStep === 1 && 'active'}`}>02</div>
      <div className={`number ${currentStep === 2 && 'active'}`}>03</div>
      <div className={`number ${currentStep === 3 && 'active'}`}>04</div>
      <div className={`number ${currentStep === 4 && 'active'}`}>05</div>
    </div>
  )
}
