import React, { useEffect} from 'react'
import { useDispatch, useSelector} from "react-redux"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { baseUrl } from '../..';
import './Basket.css'
import { addCountAction, remCountAction } from '../../store/basketReducer';

export default function Basket() {
    let basket = useSelector(store=>store.basket.basket)
    let dispatch = useDispatch()
    useEffect(() => {
      localStorage.setItem("basket", JSON.stringify(basket));
    });
    
  return (
    <div>
      <Header/>
      <div className='basket_main'>
        <div>
         <h2 className='basket_title'>Basket</h2>
      </div>
      <div>
              {basket.map( elem =>  
              <div>
                <hr/>
                <div className="basket_wrapper" >
                   <img
                src={baseUrl + elem.image}
                alt="photo"
                width="193"
                height="187"
                className='basket_img'
              />
              <div className='title_count'>
                <p> {elem.title} </p>
                <div className='basket_count'>
                  <p  onClick={() => dispatch(remCountAction(elem.id))}>-</p>
                    <p>{elem.count}</p>
                <p  onClick={() => dispatch(addCountAction(elem.id))} >+</p>   
                </div>
                
              </div>
              
              <p className="discont_price">{elem.discont_price}$</p>
              <p className="price">{elem.price}$</p> 
              </div>
               
                   
                 
               </div>
                )}
            </div>
      </div>
      
        <Footer/>
    </div>
  )
}
