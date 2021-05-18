/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const input = {
  width: '242px',
  height: '51px',
  textTransform: 'uppercase',
  fontSize: '1.4em',
  padding: '0 16px',
  marginBottom: '8px',
  background: '#0076bc',
  border: '0 none'
}

const button = {
  width: '275px',
  height: '51px',
  textTransform: 'uppercase',
  fontSize: '1.4em',
  padding: '0 16px',
  marginTop: '8px',
  cursor: 'pointer'
}

const name = {
  width: '242px',
  height: '51px',
  textTransform: 'uppercase',
  fontSize: '1.4em',
  padding: '0 16px',
  marginTop: '32px',
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function NameSelector() {
  return (
    <div>
      <div>
        <input css={input} defaultValue="First Name" />
      </div>
      <div>
        <input css={input} defaultValue="Last Initial" />
      </div>{' '}
      <button css={button}>Generate</button>
      <div css={name}>
        <p>Monster Name</p>
      </div>
    </div>
  )
}
