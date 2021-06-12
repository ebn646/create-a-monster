import React, { useState } from 'react'
import { copy, monsters } from './data'

const MonsterContext = React.createContext([{}, () => {}])

const MonsterProvider = props => {
  const [state, setState] = useState({
    currentStep: 0,
    stepCopy: copy[0],
    monsterType: monsters[0],
    monsterColor: 1,
    monsterLashes: '',
    monsterHair: null,
    monsterHat: null,
    monsterHorn: null,
    monsterFur: null,
    monsterUrl: null,
    monsterName: 'MONSTER NAME',
    monsterNameIsValid: false
  })

  const [showIcons, setShowIcons] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  return (
    <MonsterContext.Provider
      value={[
        state,
        setState,
        copy,
        monsters,
        showIcons,
        setShowIcons,
        showHelp,
        setShowHelp
      ]}
    >
      {props.children}
    </MonsterContext.Provider>
  )
}

export { MonsterContext, MonsterProvider }
