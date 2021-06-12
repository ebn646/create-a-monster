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
    <div style={{ marginLeft: 50, flex: 1 }}>
      <Header />
      <div>
        {currentStep === 1 && <Colors />}
        {currentStep === 2 && <Customize />}
        {currentStep === 3 && <NameSelector />}
        {currentStep === 4 && <ShareSelector />}
      </div>
    </div>
  )
}
