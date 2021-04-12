/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { css, jsx } from '@emotion/react'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import ImageData from './ImageData'
import useMonsterCreator from '../../hooks/useMonsterCreator';

const getWidth = () => 800

/**
 * @function Slider
 */
const Slider = props => {
  const slides  = ImageData

  const {monsterType, setMonsterType} = useMonsterCreator();

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition } = state

  const transitionRef = useRef()
  const resizeRef = useRef()
  const sliderRef = useRef()

  useEffect(() => {
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const slider = sliderRef.current

    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const transitionEnd = slider.addEventListener('transitionend', smooth)

    let interval = null

    return () => {
      slider.removeEventListener('transitionend', transitionEnd)

      if (props.autoPlay) {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  useEffect(() => {
    console.log('monsterType = ', monsterType);
  }, [monsterType])

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const smoothTransition = () => {
    let _slides = []

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
    console.log('active slide = ',activeSlide)
    setMonsterType(activeSlide + 1)
  }

  const nextSlide = () => {
    setState({
        ...state,
        translate: translate + getWidth(),
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
      })

  }
  

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })

  return (
    <div css={SliderCSS} ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} src={_slide.url} />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  )
}

const SliderCSS = css`
  position: absolute;
  top: 0;
  height: 670px;
  width: 800px;
  margin: 0 auto;
  overflow: visible;
  white-space: nowrap;
`

export default Slider
