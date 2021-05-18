/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import * as htmlToImage from 'html-to-image'
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image'

const button = {
  width: '275px',
  height: '51px',
  textTransform: 'uppercase',
  fontSize: '1.4em',
  padding: '0 16px',
  marginTop: '8px',
  cursor: 'pointer'
}

export default function ShareSelector() {
  function download() {
    var node = document.getElementById('my-monster')

    htmlToImage
      .toPng(node)
      .then(function(dataUrl) {
        var img = new Image()
        img.src = dataUrl
        node.appendChild(img)
      })
      .catch(function(error) {
        console.error('oops, something went wrong!', error)
      })

    // htmlToImage
    //   .toJpeg(document.getElementById('my-monster'), { quality: 0.95 })
    //   .then(function(dataUrl) {
    //     var link = document.createElement('a')
    //     link.download = 'my-image-name.jpeg'
    //     link.href = dataUrl
    //     link.click()
    //   })
  }
  return (
    <div>
      <button
        css={button}
        onClick={() => {
          download()
        }}
      >
        DownLoad
      </button>
    </div>
  )
}
