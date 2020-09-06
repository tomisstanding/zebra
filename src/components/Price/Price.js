import React from 'react';
import './Price.css'

const Price = ({rate, tag}) => {
  return (
    <div className="carrier-price">
     { tag && <span className="verified">{tag}</span> }
     {rate && <h1>${Math.round(rate)}<span> / mo</span></h1>}
    </div>
  )
}

export default Price
