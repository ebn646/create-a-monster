/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { jsx, css, Global, ClassNames } from '@emotion/react'
import { FaRegWindowClose } from 'react-icons/fa'
import { closeButton } from './styles'
import SliderContent from './SliderContent'
import ImageSlide from './ImageSlide'
import HelpSlide from './HelpSlide'
import Arrow from './Arrow'
import useMonsterCreator from '../../hooks/useMonsterCreator'
import { closeBtn } from './styles'

const getWidth = w => w

/**
 * @function Slider
 */

function Slider({
  slides,
  width,
  height,
  type,
  closeButton,
  callback,
  startIndex
}) {
  const SliderCSS = css`
    position: relative;
    margin-bottom: 30px;
    height: ${height}px;
    width: ${width}px;
    overflow: hidden;
    border: 1px solid blue;
  `
  const { showHelpGallery } = useMonsterCreator()

  const firstSlide = slides[startIndex]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: startIndex,
    translate: width,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, transition, _slides } = state

  const sliderRef = useRef()
  const transitionRef = useRef()

  useEffect(() => {
    // 1. on every render set transitionRef current property to a function
    transitionRef.current = smoothTransition
  })

  useEffect(() => {
    callback(activeSlide)
  }, [activeSlide])

  useEffect(() => {
    const slider = sliderRef.current

    // 3. call
    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }
    //2. on transitionEnd listener to slider to invoke smoothTransition
    const transitionEnd = slider.addEventListener('transitionend', smooth)

    return () => {
      slider.removeEventListener('transitionend', transitionEnd)
    }
  }, [])

  // if transition time is 0 set it back to 0.45
  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
    // setMonsterType(activeSlide + 1)
  }, [transition])

  const smoothTransition = () => {
    let _slides = []

    // We're at the last slide.
    if (activeSlide === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    }
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) {
      _slides = [lastSlide, firstSlide, secondSlide]
    }
    // Create an array of the previous last slide, and the next two slides that follow it.
    else {
      _slides = slides.slice(activeSlide - 1, activeSlide + 2)
    }

    // set transition to 0
    setState({
      ...state,
      _slides,
      transition: 0,
      translate: width
    })
  }

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + width,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })
  }

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })

  const getSlideByType = i => {
    if (type === 'image') {
      return <ImageSlide key={i.id} imgSrc={i.url} id={i.id} width={width} />
    } else {
      return <HelpSlide key={i.id} imgSrc={i.url} data={i} width={width} />
    }
  }

  return (
    <div css={SliderCSS} ref={sliderRef}>
      {closeButton && (
        <button css={closeBtn} onClick={() => showHelpGallery(false)}>
          <h3>
            <FaRegWindowClose />
          </h3>
        </button>
      )}
      <SliderContent
        translate={translate}
        transition={transition}
        width={width * _slides.length}
      >
        {_slides.map(i => getSlideByType(i))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow
        direction="right"
        handleClick={() => {
          nextSlide()
        }}
      />
    </div>
  )
}

Slider.defaultProps = {
  type: 'image',
  closeButton: false,
  startIndex: 0,
  callback: function() {
    console.log('callback was triggered')
  }
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
  closeButton: PropTypes.bool,
  callback: PropTypes.func,
  startIndex: PropTypes.number
}

export default Slider
