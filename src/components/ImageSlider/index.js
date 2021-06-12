import React from 'react'
import Slider from './Slider'

const ImageSlider = ({
  data,
  width,
  type,
  height,
  closeButton,
  callback,
  startIndex
}) => {
  return (
    <Slider
      slides={data}
      width={width}
      type={type}
      height={height}
      closeButton={closeButton}
      callback={callback}
      startIndex={startIndex}
    />
  )
}

export default ImageSlider
