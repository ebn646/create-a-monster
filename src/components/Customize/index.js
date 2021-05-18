import React from 'react'
import Accessories from '../Accessories'
import useMonsterCreator from '../../hooks/useMonsterCreator'
import './sidebar.scss'

export default function Customize() {
  const { currentStep } = useMonsterCreator()

  return (
    <div>
      <Accessories />
    </div>
  )
}
