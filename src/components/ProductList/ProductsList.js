import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import { fetchProducts2 } from '../../asyncAction/products';


function ProductsList() {
    let productsList = useSelector((store) => store.products.products);
    let dispatch = useDispatch();
  return (
    <div className='category_part'>
        <div className='category_part_wrapper'>
            <Header/>
      <div className='all_categories'>
        <div>
          <h3>Products</h3>
        </div>
        <div className="category_types">
          {productsList.map((elem) => (
            <div>
              <img
                src={`http://localhost:3333${elem.image}`}
                alt="photo"
                width="318"
                height="330"
              />
              <Link to='/products' className="category_text" onClick={()=>dispatch(fetchProducts2(elem.id))}>{elem.title}</Link>
              <div className="product_price">
                  <p className="price">{elem.price}$</p>
                  <p className="discont_price">{elem.discont_price}$</p>
                  <p className="percent">-{elem.nprice}%</p>
                </div>
            </div>
          ))}
        </div>
      </div>
        </div>
        <Footer/> 
    </div>
  )
}

export default ProductsList
