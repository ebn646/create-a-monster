/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import Header from '../Header'
import Swatch from '../Swatch'
import useMonsterCreator from '../../hooks/useMonsterCreator'

function Colors() {
  const [fur, setFur] = useState(false)
  const [swatchs, setSwatches] = useState([])
  const [type, setType] = useState('COLOR')
  const [copy, setCopy] = useState('ADD FUR')
  const { monsterType, monsterColor, setMonsterFur } = useMonsterCreator()

  useEffect(() => {
    if (fur) {
      setSwatches(monsterType.swatches.fur)
      setType('fur')
      setCopy('REMOVE FUR')
      setMonsterFur(monsterColor)
    } else {
      setSwatches(monsterType.swatches.colors)
      setType('COLOR')
      setCopy('ADD FUR')
      setMonsterFur(null)
    }
  }, [fur])

  return (
    <div>
      {swatchs.map(i => {
        return <Swatch key={i.id} id={i.id} url={i.url} type={type} />
      })}
      {monsterType.fur && (
        <button
          css={css`
            width: 245px;
            height: 45px;
            cursor: pointer;
            margin-top: 20px;
          `}
          onClick={() => {
            setFur(!fur)
          }}
        >
          {copy}
        </button>
      )}
    </div>
  )
}

export default Colors
