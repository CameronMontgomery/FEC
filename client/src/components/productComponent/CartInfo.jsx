import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';

const CartInfo = (props) => {
  const { currentStyle } = props;
  const currentSkus = currentStyle.skus;
  const [sizes, setSizes] = useState([])
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0)

  useEffect(() => {
    var allSizes = []
    for (let key in currentSkus) {
      allSizes.push(currentSkus[key].size)
    }
    setSizes(allSizes)
  }, [])

  useEffect(() => {
    for (let key in currentSkus) {
      if (currentSkus[key].size === selectedSize) {
        setQuantity(currentSkus[key].quantity)
      }
    }
  }, [selectedSize])

  return (
    <div className="cart">
      <div className="selectors">
        <select name="size" className="product size" onChange={(e) => {
          e.preventDefault()
          setSelectedSize(e.target.value)
        }}>
          <option value={selectedSize}>Size</option>
          {sizes.map((item, i) => {
            return (
              <option key={i + 1000000000000} value={item}>{item}</option>
            )
          })}
        </select>
        <select disabled={!selectedSize} name="quantity" className="product quantity" onChange={(e) => {
          e.preventDefault()
          setSelectedQuantity(e.target.value)
        }}>
          <option value={selectedQuantity}>Quantity</option>
          {Array(quantity).fill(1).map((x, i) => {
            return i < 15 ? (
              <option key={i + 100000} value={i + 1}>{i + 1}</option>
            ) : null
          })}
        </select>
      </div>
      <div className="add-to-cart">
        <button className="addCart" data-testid="add-Cart" disabled={!selectedSize} onClick={(e) => {
          e.preventDefault()
          setSelectedSize(null)
          setQuantity(0)
          setSelectedQuantity(1)
        }}>Add To Cart</button>
      </div>
    </div>
  )
}

export default CartInfo;