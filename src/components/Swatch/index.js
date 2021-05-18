import React from 'react'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Swatch({ id, type, url }) {
  const {
    setMonsterColor,
    setMonsterLashes,
    setMonsterHair,
    setMonsterFur,
    setMonsterHat,
    setMonsterHorn
  } = useMonsterCreator()

  function setAccesories() {
    switch (type) {
      case 'HORNS':
        setMonsterHorn(id)
        setMonsterHat(null)
        return
      case 'HATS':
        setMonsterHat(id)
        setMonsterHair(null)
        setMonsterHorn(null)
        return
      case 'EYELASHES':
        setMonsterLashes(id)
        return
      case 'COLOR':
        setMonsterColor(id)
        return
      case 'HAIR':
        setMonsterHair(id)
        setMonsterHat(null)
        return
      case 'FUR':
        setMonsterColor(id)
        setMonsterFur(id)
        return
      default:
        return
    }
  }

  return (
    <button
      onClick={() => {
        setAccesories()
      }}
      id={id}
    >
      <img src={url} />
    </button>
  )
}
