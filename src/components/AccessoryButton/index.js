/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import PropTypes from 'prop-types'
import useMonsterCreator from '../../hooks/useMonsterCreator'

function AccessoryButton({ copy, callback }) {
  const { showIcons, setShowIcon } = useMonsterCreator()

  return (
    <button
      css={css`
        display: block;
        width: 100%;
        height: 45px;
        position: relative;
        background-color: transparent;
        padding: 0;
        border: 1px solid #ccc;
      `}
      onClick={() => callback(copy)}
    >
      {showIcons && (
        <div
          css={css`
            position: absolute;
            left: 0;
            top: 0;
            cursor: pointer;
          `}
        >
          {copy === 'EYELASHES' && (
            <img src="https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_eyelashes.png" />
          )}
          {copy === 'HAIR' && (
            <img src="https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_hair.png" />
          )}
          {copy === 'HATS' && (
            <img src="https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_hat.png" />
          )}
          {copy === 'HORNS' && (
            <img src="https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_horn.png" />
          )}
          {copy === 'GLASSES' && (
            <img src="https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_hair.png" />
          )}
          {copy === 'FANGS' && (
            <img src="https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_hat.png" />
          )}
        </div>
      )}
      {!showIcons && (
        <div
          css={css`
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background: white;
            font-weight: bold;
          `}
          onClick={() => setShowIcon(true)}
        >
          {copy}
        </div>
      )}
    </button>
  )
}

AccessoryButton.PpopTypes = {
  copy: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}
export default AccessoryButton
