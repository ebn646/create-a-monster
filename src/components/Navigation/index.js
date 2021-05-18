/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Navigation() {
  const { goForward, goBack, currentStep } = useMonsterCreator()
  return (
    <div
      className="navigation"
      css={css`
        border: 1px solid red;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
      `}
    >
      {currentStep !== 1 && (
        <button
          css={css`
            color: #b1b1b1;
            font-family: 'Graduate', serif;
            font-weight: 800;
            height: 60px;
            width: 60px;
            border-radius: 240px;
            padding: 0px;
            box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.5),
              0px 1px 2px rgba(0, 0, 0, 0.2);
            background: radial-gradient(#fbfbfb, #e1e1e1);
            border: 4px solid #d4d4d4;
          `}
          onClick={goBack}
        >
          Prev
        </button>
      )}
      {currentStep !== 5 && (
        <button
          css={css`
            font-family: 'Graduate', serif;
            text-transform: uppercase;
            font-size: 22px;
            font-weight: 800;
            color: #b1b1b1;
            width: 100px;
            height: 100px;
            border-radius: 200px;
            padding: 0px;
            box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.5),
              0px 1px 2px rgba(0, 0, 0, 0.2);
            background: radial-gradient(#fbfbfb, #e1e1e1);
            border: 4px solid #d4d4d4;
          `}
          onClick={goForward}
        >
          Next
        </button>
      )}
    </div>
  )
}
