import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarReview from './StarReview.jsx';
import RenderStyles from './Styles.jsx';
import CartInfo from './CartInfo.jsx';
import productExample from './exampleData/product.js';
import stylesExample from './exampleData/styles.js';
import { v4 as uuidv4 } from 'uuid';
import ReactImageZoom from 'react-image-zoom';

const Product = ({ product }) => {
  Product.displayName = 'Product'
  const [currentProduct, setCurrentProduct] = useState(product);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [zoom, setZoom] = useState(false);
  const [styling, setStyling] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentThumbnails, setCurrentThumbnails] = useState([]);
  const [length, setLength] = useState(0);
  const zoomProps = { width: 850, height: 570, img: currentPhoto, zoomPosition: 'original' };

  useEffect(() => {
    axios.get(`api/products/${product.id}/styles`)
      .then((res) => {
        setStyles(res.data.results)
        setCurrentStyle(res.data.results[0])
        handleCurrentPhoto(res.data.results[0].photos[0])
        setLength(res.data.results[0].photos.length)
        setThumbnails([res.data.results[0].photos.slice(0, 7), res.data.results[0].photos.slice(7, res.data.results[0].photos.length)])
        setCurrentThumbnails(res.data.results[0].photos.slice(0, 7))
      })
  }, [])

  function changeStyling(zoom, styling) {
    if (zoom && styling === null) {
      setStyling({ width: '850px', height: '570px', zIndex: '100', cursor: 'zoom-in' })
    }
    if (!zoom && !styling) {
      setStyling(null)
      setZoom(false)
    }
  }


  function handleThumbnails(photosObj) {
    if (photosObj.length > 7) {
      setLength(photosObj.length)
      setThumbnails([photosObj.slice(0, 7), photosObj.slice(7, photosObj.length)])
      setCurrentThumbnails(photosObj.slice(0, 7))
    } else {
      setLength(photosObj.length)
      setThumbnails(photosObj)
      setCurrentThumbnails(photosObj)
    }
  }

  function handleStyles(style) {
    setCurrentStyle(style)
  }

  function handleCurrentPhoto(item) {
    setCurrentPhoto(item.url)
  }

  function handleSales(item) {
    if (item.sale_price) {
      return (
        <>
          <div className="product old-price" style={{ color: item.sale_price ? 'red' : 'black', textDecoration: item.sale_price ? 'line-through' : "none" }}>${item.original_price}</div>
          <div className="product current-price">${item.sale_price}</div>
        </>
      )
    }

    return (
      <div className="product old-price">${item.original_price}</div>
    )
  }

  return Object.keys(currentStyle).length !== 0 ? (
    <>
      <div className="product container">
        {!zoom && styling ? (
          <div className="product-zoom" onClick={(e) => {
            setZoom(false)
            setStyling(null)
          }}>
            <ReactImageZoom {...zoomProps} />
          </div>
        ) : (
          <div className="product current-photos">
            <div className="product arrows">
              <img className="product mainPic" style={styling} src={currentPhoto} alt={currentStyle.name} onClick={(e) => {
                e.preventDefault();
                setZoom(!zoom)
                changeStyling(!zoom, styling)
              }}></img>
              <div className="arrow left" style={{ visibility: currentStyle.photos[0].url === currentPhoto ? 'hidden' : null, zIndex: zoom ? 101 : 10, left: zoom ? '-80px' : '-20px' }} onClick={(e) => {
                e.preventDefault();
                for (let i = 0; i < currentStyle.photos.length; i++) {
                  if (currentStyle.photos[i].url === currentPhoto) {
                    handleCurrentPhoto(currentStyle.photos[i - 1])
                    if (i < 8) {
                      thumbnails.length === 2 ? setCurrentThumbnails(thumbnails[0]) : setCurrentThumbnails(thumbnails);
                    }
                  }
                }
              }}>&#8592;</div>
              <div className="arrow right" style={{ 'visibility': currentStyle.photos[currentStyle.photos.length - 1].url === currentPhoto ? 'hidden' : null, zIndex: zoom ? 101 : 10, left: zoom ? '690px' : '495px' }} onClick={(e) => {
                e.preventDefault();
                for (let i = 0; i < currentStyle.photos.length; i++) {
                  if (currentStyle.photos[i].url === currentPhoto) {
                    handleCurrentPhoto(currentStyle.photos[i + 1])
                    if (i > 5) {
                      setCurrentThumbnails(thumbnails[1])
                    }
                  }
                }
              }}>&#8594;</div>
              {currentThumbnails.map((item, i) => {
                return (!zoom && styling) === null ? (
                  (<img className="product itemThumbnail" style={{ borderBottom: currentPhoto === item.url ? '4px solid red' : null }} src={item.thumbnail_url} alt={currentStyle.style_id} key={i} onClick={(e) => {
                    e.preventDefault();
                    handleCurrentPhoto(item)
                  }}></img>)) : (<img className="product enlarged-thumbnail" style={{ border: currentPhoto === item.url ? '2px solid red' : null }} src={item.thumbnail_url} alt={currentStyle.style_id} key={i} onClick={(e) => {
                    e.preventDefault();
                    handleCurrentPhoto(item)
                  }}></img>)
              })}
              {length > 7 ? (
                <>
                  <div className="downArrow" style={JSON.stringify(currentThumbnails) === JSON.stringify(thumbnails[0]) ? { visibility: null } : { visibility: 'hidden' }} onClick={(e) => {
                    e.preventDefault();
                    setCurrentThumbnails(thumbnails[1])
                  }}>&#8595;</div>
                  <div className="upArrow" style={JSON.stringify(currentThumbnails) === JSON.stringify(thumbnails[1]) ? { visibility: null } : { visibility: 'hidden' }} onClick={(e) => {
                    e.preventDefault();
                    setCurrentThumbnails(thumbnails[0])
                  }}>&#8593;</div>
                </>
              ) : null
              }
            </div>
          </div>)}
        <div className="product current-info">
          <div className="product-reviews">
            <StarReview currentId={product.id} />
          </div>
          <div className="product current-category" >{currentProduct.category}</div>
          <div className="product current-name" >{currentProduct.name}</div>
          <div className="product prices">{handleSales(currentStyle)}</div>
          <div className="product current-style"><div className="product current-style title">Style ></div><div className="product current-style name"> {currentStyle.name}</div></div>
          <RenderStyles styles={styles} handleStyles={handleStyles} handleCurrentPhoto={handleCurrentPhoto} currentStyle={currentStyle} handleThumbnails={handleThumbnails} />
          <CartInfo currentStyle={currentStyle} />
          <div className="share-buttons">
            <iframe title="facebook" src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2F127.0.0.1%3A8080%2Fclient%2Fdist%2F&layout=button_count&size=small&width=77&height=20&appId" width="77" height="20" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;" ></iframe>
            <iframe title="twitter" allowtransparency="true" frameBorder="0" scrolling="no"
              src="https://platform.twitter.com/widgets/tweet_button.html?size=medium"
              style={{ width: '77px', height: '20px' }} ></iframe>
            <a href="http://pinterest.com/pin/create/button/?url={http%3A%2F%2F127.0.0.1%3A8080%2Fclient%2Fdist%2F%0A}" className="pin-it-button" count-layout="horizontal" >
              <img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" height="20" width="43"/>
            </a>
          </div>
        </div>
      </div>
      <div className="product bottom-info">
        <div className="product bottom-left">
          <div className="product current-slogan">{currentProduct.slogan}</div>
          <div className="product current-description" >{currentProduct.description}</div>
        </div>
        <div className="product features">{
          currentProduct.features.map((item, i) => {
            return (
              <div key={uuidv4()}>
                <div className="product featureItem">{item.feature}: {item.value.split(/(?=[A-Z])/).join(' ')}</div>
              </div>
            )
          })
        }</div>
      </div>
    </>
  ) : null
}
export default Product;


