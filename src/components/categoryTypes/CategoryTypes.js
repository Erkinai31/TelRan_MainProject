import React from 'react'
import {useSelector } from 'react-redux';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './CategoryTypes.css'


export default function CategoryTypes() {
    let categories = useSelector((store) => store.categories.categories);
  
  return (
       <div className='category_part'>
        <div className='category_part_wrapper'>
            <Header/>
      <div className='all_categories'>
        <div className='filtration'>
          <div className='price_filtration'>
            <p>Price</p>
            <input type='number' placeholder='from'/>
            <input type='number' placeholder='to'/>
          </div>
          <div className='checkbox'>
            <p>Items on sale</p>
            <input type='checkbox'/>
          </div>
          <div className='select_filtration'>
            <p>Sort:</p>
            <select>
              <option></option>
            </select>
          </div>
           
        </div>
       
        <div className="category_types">
          {categories.map((elem) => (
            <div>
              <img
                src={`http://localhost:3333${elem.image}`}
                alt="photo"
                width="318"
                height="330"
              />
              <p>{elem.title}</p>
            </div>
          ))}
        </div>
      </div>
        </div>
        <Footer/> 
    </div>
  )
}
