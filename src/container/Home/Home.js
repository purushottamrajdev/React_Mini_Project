import React, { Component } from 'react';
import './Home.css';
import { Route ,NavLink,Switch} from 'react-router-dom';
import ProductList from '../ProductList/ProductList'
import Products from '../Products/Products';
import EditProduct from '../EditProduct/EditProduct';
import NewProduct from '../../container/NewProduct/NewProduct';
import {connect} from 'react-redux';
import CartList from '../CartList/CartList';
import logo from '../../assets/cartLogo.png';
import HomeImg from '../../assets/homeimg1.jpg';
class Home extends Component{
    render(){
        
         return(
             <div>
                 <header>
                    <ul className="menu">
                        <NavLink className="Link" to={{pathname:'/'}}  >Home</NavLink>
                        <NavLink className="Link" to={{pathname:'/products'}}  >Products</NavLink>
                        <NavLink className="Link" to={{pathname:'/cart'}}>Cart<img src={logo} alt="cartLogo" className="cartlogo"/><span className="counter">{this.props.cartList.length}</span></NavLink>
                        <NavLink className="Link" to={{pathname:'/admin-option'}}>Admin Options</NavLink>
                    </ul>
                </header>
               
                <Switch>
                    <Route path={"/products"}  component={Products} />
                    <Route path={"/admin-option"}  component={ProductList} />
                    <Route path={"/new-product"}  component={NewProduct} />
                    <Route path={"/edit-product/:id"}  component={EditProduct} />
                    <Route path={"/cart"}  component={CartList} />
                    <img src={HomeImg} alt="Organic Store" className="HomeImg"/>
                </Switch>
             </div>
         );
    }
 }
 const mapStateToProps=state=>{
    return{
       cartList:state.cart.cartList//prod is name of combined reducer product.js       
    };
};
 export default connect(mapStateToProps)(Home);