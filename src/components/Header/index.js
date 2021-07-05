/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import useMonsterCreator from '../../hooks/useMonsterCreator'

function Header({ copy }) {
  const { stepCopy } = useMonsterCreator()

  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 330px;
      `}
    >
      <h3
        css={css`
          font-family: 'MutantAcademyBB';
          font-size: 33px;
          color: #0076bc;
        `}
      >
        {stepCopy.title}
      </h3>
      <p style={{ marginTop: 0 }}> {stepCopy.copy}</p>
    </div>
  )
}

export default Header
