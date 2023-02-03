import React from 'react'
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


export default function CategoryTypes() {
    let categories = useSelector((store) => store.categories.categories);
    console.log(...categories)
  return (
       <div className='category_part'>
        <div className='category_part_wrapper'>
            <Header/>
      <div className='all_categories'>
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
