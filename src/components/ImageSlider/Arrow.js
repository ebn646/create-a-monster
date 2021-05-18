/** @jsxRuntime classic */
/** @jsx jsx */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import leftArrow from '../../left-arrow.svg'
import rightArrow from '../../right-arrow.svg'

function Arrow({ direction, handleClick }) {
  return (
    <div
      onClick={handleClick}
      css={css`
        display: flex;
        position: absolute;
        top: 65%;
        ${direction === 'right' ? `left: 75%` : `right: 75%`};
        height: 50px;
        width: 50px;
        justify-content: center;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.1s;

        &:hover {
          transform: scale(1.1);
        }

        img {
          transform: translateX(${direction === 'left' ? '-2' : '2'}px);

          &:focus {
            outline: 0;
          }
        }
      `}
    >
      {direction === 'right' ? (
        <img src={rightArrow} />
      ) : (
        <img src={leftArrow} />
      )}
    </div>
  )
}
Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
export default memo(Arrow)
