import React from 'react';
import '../ListProduct/ListProduct.css';
const CartItem=(props)=>{
     return(
         <div className="ListProduct">
             <table>
                 <tr>
                     <td>{props.title}</td>
                     <td>{props.category}</td>
                     <td>{props.price}</td>
                     <td>{props.quantity}</td>
                 </tr>
             </table>
         </div>
     );
}
export default CartItem;