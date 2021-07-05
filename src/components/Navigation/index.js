/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef } from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import useMonsterCreator from '../../hooks/useMonsterCreator'
import { rules } from 'eslint-config-prettier'

export default function Navigation() {
  const { goForward, goBack, currentStep } = useMonsterCreator()
  const prev = useRef()

  useEffect(() => {
    if (currentStep === 4) {
      prev.current.classList.add('last')
    }
  }, [currentStep])

  return (
    <div
      className="navigation"
      css={css`
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
      `}
    >
      {currentStep !== 0 && (
        <button
          ref={prev}
          css={css`
            color: #b1b1b1;
            cursor: pointer;
            font-family: 'MutantAcademyBB', serif;
            font-weight: 800;
            height: 60px;
            width: 60px;
            border-radius: 240px;
            padding: 0px;
            box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.5),
              0px 1px 2px rgba(0, 0, 0, 0.2);
            background: radial-gradient(#fbfbfb, #e1e1e1);
            border: 4px solid #d4d4d4;
            &.last {
              font-size: 22px;
              width: 100px;
              height: 100px;
            }
          `}
          onClick={goBack}
        >
          Prev
        </button>
      )}
      {currentStep !== 4 && (
        <button
          css={css`
            font-family: 'MutantAcademyBB', serif;
            text-transform: uppercase;
            font-size: 22px;
            font-weight: 800;
            color: #b1b1b1;
            cursor: pointer;
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
