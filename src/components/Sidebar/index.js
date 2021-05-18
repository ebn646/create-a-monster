import React from 'react'
import Header from '../Header'
import Customize from '../Customize'
import Colors from '../Colors'
import NameSelector from '../NameSelector'
import ShareSelector from '../ShareSelector'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Left() {
  const { currentStep } = useMonsterCreator()

  return (
    <div style={{ marginLeft: 50 }}>
      <Header />
      <div>
        {currentStep === 2 && <Colors />}
        {currentStep === 3 && <Customize />}
        {currentStep === 4 && <NameSelector />}
        {currentStep === 5 && <ShareSelector />}
      </div>
    </div>
  )
}
