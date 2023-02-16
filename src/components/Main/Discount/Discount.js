import React from 'react'
import saleImg from "../../img/image3.svg";
function Discount() {
  return (
    <div>
       <div className="sale_section">
        <div className="sale_section_wrapper">
          <img src={saleImg} width="422" height="422" />
          <div className="sale_section_text">
            <p>Discount 5% </p>
            <span className="sale_subtitle">for the first order</span>
            <input type="number" placeholder="+49" />
            <button>Get a discount</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
