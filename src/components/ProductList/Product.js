import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



function Products() {
    let productsList = useSelector((store) => store.products.products);
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
                <h3>{elem.title}</h3>
              <img
                src={`http://localhost:3333${elem.image}`}
                alt="photo"
                width="710"
                height=""
              />

            </div>
          ))}
        </div>
      </div>
        </div>
        <Footer/> 
    </div>
  )
}

export default Products
