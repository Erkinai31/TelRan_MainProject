// import React from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { addProductAction, remProductAction } from '../../store/basketReducer'
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// export default function Basket() {
//     let basket = useSelector(store=>store.basket.basket)
//     let dispatch = useDispatch()
    
//   return (
//     <div>
//       <Header/>
//       <div>
//          <h2>Basket</h2>
//       </div>
//       <div>
//                 {basket.map( elem => 
//                 <div className="goods_wrapper" >
//                     <p>{elem.name}</p>
//                     <button onClick={() => dispatch(remProductAction(elem.id))}>-</button>
//                     <p>{elem.count}</p>
//                     <button onClick={() => dispatch(addProductAction(elem.id))} >+</button>
//                 </div>
//                 )}
//             </div>
//         <Footer/>
//     </div>
//   )
// }
