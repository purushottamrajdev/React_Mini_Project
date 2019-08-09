import React,{Component} from 'react';
import CartItem from '../../components/CartItem/CartItem';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/cartList';

class CartList extends Component{
     render()
     { 
         console.log("cart Lenght:"+this.props.cartList.length);
        let cartItem=this.props.cartList.map(product => {
            return (
            <CartItem
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                quantity={product.quantity}
                 />
            );
        });
        if(cartItem.length===0)
        { 
            cartItem=<h1>Cart is Emplty</h1>;
        }
         return(
             <div className="CartList">
             <center>
                {cartItem}
             </center>
             </div>
         );
     }
}
const mapStateToProps=state=>{
    return{
       cartList:state.cart.cartList//prod is name of combined reducer product.js       
    };
};
const mapDispatchToProps=dispatch=>{
   return{
      
   };
};
export default  connect(mapStateToProps,mapDispatchToProps)(CartList);