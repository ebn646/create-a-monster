import React from 'react'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function ProgressBar() {
  const { currentStep } = useMonsterCreator()

  return (
    <div className="progressbar">
      <div className={`number ${currentStep === 1 && 'active'}`}>01</div>
      <div className={`number ${currentStep === 2 && 'active'}`}>02</div>
      <div className={`number ${currentStep === 3 && 'active'}`}>03</div>
      <div className={`number ${currentStep === 4 && 'active'}`}>04</div>
      <div className={`number ${currentStep === 5 && 'active'}`}>05</div>
    </div>
  )
}
