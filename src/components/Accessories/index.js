/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/react'
import AccessoryButton from '../AccessoryButton'
import Swatch from '../Swatch'
import useMonsterCreator from '../../hooks/useMonsterCreator'

const accessories = [
  {
    type: 'HAIR'
  },
  {
    type: 'EYELASHES'
  },
  {
    type: 'HATS'
  },
  {
    type: 'HORNS'
  }
]
export default function Accessories() {
  const { monsterType, showIcons, setShowIcon } = useMonsterCreator()

  const [acc, setAcc] = useState('hair')
  const [accList, setList] = useState([])

  useEffect(() => {
    setList([])
    switch (acc) {
      case 'HAIR':
        setList(monsterType.swatches.hair)
        return
      case 'EYELASHES':
        setList(monsterType.swatches.eyelashes)
        return
      case 'HATS':
        setList(monsterType.swatches.hats)
        return
      case 'HORNS':
        setList(monsterType.swatches.horns)
        return
      default:
        console.log('YOur accessory was not found')
    }
  }, [acc])

  return (
    <div
      css={css`
        width: 300px;
        height: 300px;
        position: relative;
        display: flex;
        justify-content: flex-end;
      `}
    >
      <div
        css={css`
        width: 250px;
        height: 300px;
        position; relative;
        display: flex;
        flex-direction: column;
      `}
      >
        <div>
          {accList &&
            accList.length > 0 &&
            accList.map(a => (
              <Swatch key={a.id} id={a.id} url={a.url} type={acc} />
            ))}
        </div>
        <button onClick={() => setShowIcon(false)}> BACK TO MENU</button>
      </div>
      <div
        className={`${showIcons && 'wid50'}`}
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          height: 300px;
          &.wid50 {
            width: 50px;
          }
        `}
      >
        {accessories.map(a => (
          <AccessoryButton key={a.id} copy={a.type} callback={setAcc} />
        ))}
      </div>
    </div>
  )
}
