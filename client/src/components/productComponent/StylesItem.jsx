import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const StylesItem = (props) => {
  const { style, handleStyles, handleCurrentPhoto, currentStyle, handleThumbnails } = props

  return (
    <>
      <img className="styles-thumbnails" style={currentStyle === style ? { border: '1px solid red' } : { border: '1px solid black' }} src={`${style.photos[0].thumbnail_url}`} alt={`${style.name}`} onClick={(e) => {
        e.preventDefault()
        handleStyles(style)
        handleCurrentPhoto(style.photos[0])
        handleThumbnails(style.photos)
      }}></img>
      <div className="checkmark" style={{ visibility: currentStyle === style ? null : 'hidden' }}>&#10003;</div>
    </>
  )
}

export default StylesItem;