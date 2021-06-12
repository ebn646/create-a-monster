/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ImageSlider from '../ImageSlider'
import { overlay } from './styles'
import ImageData from './data'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Help() {
  const { showHelp, currentStep } = useMonsterCreator()

  return showHelp ? (
    <div css={overlay}>
      <ImageSlider
        data={ImageData}
        width={500}
        height={280}
        type="help"
        closeButton={true}
        startIndex={currentStep}
      />
    </div>
  ) : null
}
