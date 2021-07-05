/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { closeButton } from './styles'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Banner() {
  const { showHelpGallery } = useMonsterCreator()

  return (
    <div
      css={css`
      background-color: #054875;
      height: 55px;
      margin-top: 25px;
      border-top: 8px solid #0274B8;
      border-bottom: 8px solid #0274B8;
      display: flex;
      align-items: center;
      justify-content: center;
      h1{
          color: white;
          font-family: 'MutantAcademyBB';
          font-size: 55px;
          text-transform: uppercase;
          `}
    >
      <h1>create-a-monster</h1>
      <button css={closeButton} onClick={() => showHelpGallery(true)}>
        <h3>
          <FaRegQuestionCircle />
        </h3>
      </button>
    </div>
  )
}
