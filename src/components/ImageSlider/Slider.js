/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { jsx, css, Global, ClassNames } from "@emotion/react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import useMonsterCreator from '../../hooks/useMonsterCreator';

const getWidth = () => 800;

/**
 * @function Slider
 */

function Slider({ slides }) {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const {setMonsterType} = useMonsterCreator();

  const { activeSlide, translate, transition, _slides } = state;

  const sliderRef = useRef()
  const transitionRef = useRef()

  useEffect(() => {
      // 1. on every render set transitionRef current property to a function
      transitionRef.current = smoothTransition
  })

  

useEffect(() => {
    const slider = sliderRef.current;

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
}, []);

// if transition time is 0 set it back to 0.45
useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])


  const smoothTransition = () => {
    let _slides = []

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    //monsterType start at 1 and activeSlide atarts at 0, so setMonterType to activeSlide + 1
    setMonsterType(activeSlide + 1)
    // set transition to 0
    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  }

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  return (
    <div css={SliderCSS} ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((i) => (
          <Slide key={i.id} imgSrc={i.url} id={i.id} />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
}

const SliderCSS = css`
  position: absolute;
  top: 0;
  height: 670px;
  width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
