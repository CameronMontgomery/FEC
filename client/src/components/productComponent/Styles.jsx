import React, { useState } from 'react';
import StylesItem from './StylesItem.jsx';
import { v4 as uuidv4 } from 'uuid';


const RenderStyles = (props) => {
  const { styles, handleStyles, handleCurrentPhoto, currentStyle, handleThumbnails } = props
  return (
    <div className="product styles all-styles">
      {styles.map((style, i) => {
        return (
          <StylesItem style={style} key={uuidv4()} handleStyles={handleStyles} handleCurrentPhoto={handleCurrentPhoto} currentStyle={currentStyle} handleThumbnails={handleThumbnails} />
        )
      })}
    </div>
  )
}

export default RenderStyles;