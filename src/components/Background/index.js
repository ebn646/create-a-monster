/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/react'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Background() {
  const { currentStep } = useMonsterCreator()

  return (
    <div
      css={css`
        width: 500px;
        height: 600px;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 0;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          color: #ccc;
          font-family: 'MutantAcademyBB';
          font-size: 550px;
        `}
      >
        {`0${currentStep + 1}`}
      </div>
    </div>
  )
}
