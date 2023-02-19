import React from 'react'
import { useDispatch } from 'react-redux'
import { filterPriceFromAction, filterPriceToAction, filterProductsAction, sortProductsAction } from '../../store/productsReducer';

function Filtration() {
    let dispatch = useDispatch();

  return (
    <div>
       <div className="filtration">
            <div className="price_filtration">
              <p>Price</p>
              <input type="number" placeholder="from"  onChange={(e)=>dispatch(filterPriceFromAction(e.target.value))}/>
              <input type="number" placeholder="to" onChange={(e)=>dispatch(filterPriceToAction(e.target.value))} />
            </div>
            <div className="checkbox">
              <p>Items on sale</p>
              <input
                onChange={(e) =>
                  dispatch(filterProductsAction(e.target.checked))
                }
                type={"checkbox"}
              />
            </div>
            <div className="select_filtration">
              <p>Sort:</p>
              <select
                onChange={(e) => dispatch(sortProductsAction(e.target.value))}
              >
                <option value={0}>default</option>
                <option value={1}>Price Descending</option>
                <option value={2}>Ascending price</option>
                <option value={3}>alphabetically</option>
              </select>
            </div>
          </div>
    </div>
  )
}

export default Filtration
