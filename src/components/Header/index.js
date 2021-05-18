import React from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import useMonsterCreator from '../../hooks/useMonsterCreator'

function Header({ copy }) {
  const { monsterType, stepCopy } = useMonsterCreator()

  return (
    <div
      css={css`
        border: 1px solid red;
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
      `}
    >
      <div style={{ width: 330 }}>
        <h3>{stepCopy.title}</h3>
        <p style={{ marginTop: 0 }}> {stepCopy.copy}</p>
      </div>
    </div>
  )
}

export default Header
