import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../asyncAction/products';


function ProductsList() {
    let productsList = useSelector((store) => store.products.products);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
      }, []);
  return (
    <div className='category_part'>
        <div className='category_part_wrapper'>
            <Header/>
      <div className='all_categories'>
        <div>
          <h3>Categories</h3>
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
              <Link to='/' className="category_text">{elem.title}</Link>
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
