/** @jsxRuntime classic */
/** @jsx jsx */
import React, { memo } from 'react'
import { jsx, css } from '@emotion/react'
import { name, subtitle, copy } from './styles'

const HelpSlide = ({ data, width }) => {
  const { id, title, description } = data

  return (
    <div
      css={css`
        background-color: #f5f5f5;
        height: 300px;
        width: ${width}px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <p css={name}>{id}</p>
      <p css={subtitle}>{title}</p>
      <p css={copy}>{description}</p>
    </div>
  )
}

export default memo(HelpSlide)
