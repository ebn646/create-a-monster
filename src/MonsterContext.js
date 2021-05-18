import React, { useState } from 'react'
import { copy, monsters } from './data'

const MonsterContext = React.createContext([{}, () => {}])

const MonsterProvider = props => {
  const [state, setState] = useState({
    currentStep: 1,
    stepCopy: copy[1],
    monsterType: monsters[1],
    monsterColor: 1,
    monsterLashes: '',
    monsterHair: null,
    monsterHat: null,
    monsterHorn: null,
    monsterFur: null
  })

  const [showIcons, setShowIcons] = useState(false)
  return (
    <MonsterContext.Provider
      value={[state, setState, copy, monsters, showIcons, setShowIcons]}
    >
      {props.children}
    </MonsterContext.Provider>
  )
}

export { MonsterContext, MonsterProvider }
