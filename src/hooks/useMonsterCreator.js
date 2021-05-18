import { useContext } from 'react'
import { MonsterContext } from '../MonsterContext'

function useMonsterCreator() {
  const [state, setState, copy, monsters, showIcons, setShowIcons] = useContext(
    MonsterContext
  )

  function goForward() {
    setState(state => ({ ...state, currentStep: state.currentStep + 1 }))
    setState(state => ({ ...state, stepCopy: copy[state.currentStep] }))
  }

  function setMonsterType(id) {
    setState(state => ({ ...state, monsterType: monsters[id] }))
  }

  function goBack() {
    setState(state => ({ ...state, currentStep: state.currentStep - 1 }))
    setState(state => ({ ...state, stepCopy: copy[state.currentStep] }))
  }

  function setMonsterColor(id) {
    setState(state => ({ ...state, monsterColor: id }))
  }

  function setMonsterLashes(id) {
    setState(state => ({ ...state, monsterLashes: id }))
  }

  function setMonsterHair(id) {
    setState(state => ({ ...state, monsterHair: id }))
  }

  function setMonsterFur(id) {
    setState(state => ({ ...state, monsterFur: id }))
  }

  function setMonsterHat(id) {
    setState(state => ({ ...state, monsterHat: id }))
  }
  function setMonsterHorn(id) {
    setState(state => ({ ...state, monsterHorn: id }))
  }

  function setShowIcon(bool) {
    setShowIcons(bool)
  }

  return {
    monsterType: state.monsterType,
    currentStep: state.currentStep,
    stepCopy: state.stepCopy,
    monsterColor: state.monsterColor,
    monsterLashes: state.monsterLashes,
    monsterHair: state.monsterHair,
    monsterFur: state.monsterFur,
    monsterHat: state.monsterHat,
    monsterHorn: state.monsterHorn,
    showIcons: showIcons,
    goForward,
    goBack,
    setMonsterType,
    setMonsterColor,
    setMonsterLashes,
    setMonsterHair,
    setMonsterFur,
    setMonsterHat,
    setShowIcon,
    setMonsterHorn
  }
}
export default useMonsterCreator
