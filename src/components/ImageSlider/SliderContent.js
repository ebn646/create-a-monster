/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import PropTypes, { arrayOf } from "prop-types";
import { css, jsx } from "@emotion/react";

function SliderContent({children, translate, transition, width }) {
  return (
    <div
      css={css`
        transform: translateX(-${translate}px);
        transition: transform ease-out ${transition}s;
        height: 100%;
        width: ${width}px;
        display: flex;
      `}
    >
      {children}
    </div>
  );
}
SliderContent.propTypes = {
  children: arrayOf(PropTypes.node).isRequired,
}
export default SliderContent;
