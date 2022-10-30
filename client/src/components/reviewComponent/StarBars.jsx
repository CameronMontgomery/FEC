import React, {useState, useEffect} from 'react';

const StarBars = (props) => {

  const [] = useState('')
  const [clicked, setClicked] = useState(false)

  function click() {
    if(!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }

  const containerStylesDS = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    margin: '5px',
    marginRight: 0,
    filter: 'drop-shadow(0 0 0.1rem crimson)'
  }

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    margin: '5px',
    marginRight: 0,
  }

  const fillerStyles = {
    height: '100%',
    width: `${(props.rating.value / props.maxItem) * 100}%`,
    backgroundColor: 'grey',
  }

  const labelStyles = {
    color: 'black',
    fontWeight: 'bold'
  }

  const bars = {
    display: 'flex',
    whiteSpace: 'nowrap',
    justifyContent: 'space-between',
    marginBottom: '5px'
  }

  return (
    <div style={bars} onClick={() => {props.filterList(props.rating.number); click()}}>
      <span className="reviews-body"><p className="stars-p">{props.rating.number} stars</p></span>
      {clicked ? <div style={containerStylesDS}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div> :
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>}
    </div>
  )
}

export default StarBars;