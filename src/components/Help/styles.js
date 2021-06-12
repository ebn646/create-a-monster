/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export const overlay = css`
  color: turquoise;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 850px;
  height: 850px;
  background: rgba(0, 0, 0, 0.45);
  z-index: 4;
  a {
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
`

export const closeButton = css`
  position: absolute;
  right: 0;
`
