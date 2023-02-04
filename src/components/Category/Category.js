import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory} from '../../asyncAction/category';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';


function Category() {
    let categories = useSelector((store) => store.categories.categories);
    let dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCategory());
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
          {categories.map((elem) => (
            <div>
              <img
                src={`http://localhost:3333${elem.image}`}
                alt="photo"
                width="318"
                height="330"
              />
              <Link to='/categoryTypes' className="category_text">{elem.title}</Link>
            </div>
          ))}
        </div>
      </div>
        </div>
        <Footer/> 
    </div>
  )
}

export default Category
