/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/react'
import logo from '../../logo.svg'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Monster() {
  const [color, setColor] = useState('')
  const [lashes, setLashes] = useState()
  const [hair, setHair] = useState()
  const {
    monsterType,
    monsterColor,
    monsterFur,
    monsterLashes,
    monsterHair,
    monsterHat,
    monsterHorn,
    currentStep,
    monsterUrl,
    monsterName
  } = useMonsterCreator()

  useEffect(() => {
    console.log('currentStep = ', currentStep)
  }, [currentStep])

  useEffect(() => {
    const url = monsterType.colors.filter(c => c.id === monsterColor)[0].url
    setColor(monsterType.url)
  }, [monsterType])

  useEffect(() => {
    const url = monsterType.colors.filter(c => c.id === monsterColor)[0].url
    setColor(url)
  }, [monsterColor])

  useEffect(() => {
    if (monsterLashes !== '') {
      const url = monsterType.eyelashes.filter(c => c.id === monsterLashes)[0]
        .url
      setLashes(url)
    }
  }, [monsterLashes])

  useEffect(() => {
    if (monsterHair !== null) {
      const url = monsterType.hair.filter(c => c.id === monsterHair)[0].url
      setHair(url)
    }
  }, [monsterHair])

  return currentStep !== 4 ? (
    <div
      id="my-monster"
      css={css`
        position: relative;
        width: 470px;
        height: 525px;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: -200px;
        `}
      >
        <img src={color} alt="logo" style={{ position: 'absolute', top: 0 }} />
        {lashes && (
          <img
            src={lashes}
            alt="logo"
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {monsterFur !== null && (
          <img
            src={monsterType.fur.filter(c => c.id === monsterFur)[0].url}
            alt="logo"
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {lashes && (
          <img
            src={lashes}
            alt="logo"
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {monsterHair !== null && (
          <img
            src={monsterType.hair.filter(c => c.id === monsterHair)[0].url}
            alt="logo"
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {monsterHorn && (
          <img
            src={monsterType.horns.filter(c => c.id === monsterHorn)[0].url}
            alt="logo"
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {monsterHat && (
          <img
            src={monsterType.hats.filter(c => c.id === monsterHat)[0].url}
            alt="logo"
            style={{ position: 'absolute', top: 0 }}
          />
        )}
      </div>
    </div>
  ) : (
    <div
      className="item"
      css={css`
        width: 350px;
        height: 500px;
        z-index: 4;
        display: flex;
        align-items: center;
      `}
    >
      <div
        id="polaroid"
        className="polaroid"
        css={css`
          background: #fff;
          padding: 1rem;
          box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.2);
          margin-right: 50px;
          > img{
            max-width: 100%;
            height: auto;
            border: 1px solid #ccc;
        `}
      >
        <img src={monsterUrl} />
        <div
          className="caption"
          css={css`
            font-family: 'Graduate', serif;
            font-size: 1.5rem;
            text-align: center;
            line-height: 2em;
          `}
        >
          {monsterName}
        </div>
      </div>
    </div>
  )
}
