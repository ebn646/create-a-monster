/** @jsxRuntime classic */
/** @jsx jsx */
import React, { memo } from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'

const Slide = ({ src, id, width }) => {
    return (
      <div
        css={css`
          border: 1px solid red;
          height: 100%;
          width: ${width}px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
          <img src={src}/>
      </div>
    )
  }
  
  export default memo(Slide)