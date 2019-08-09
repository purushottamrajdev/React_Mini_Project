import React,{Component} from 'react';
import Product from '../../components/Product/Product';
import './Products.css';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/products';
import * as cartActionCreators from '../../store/actions/cartList';
class Products extends Component{
    state={
        qty:''
    }

    componentDidMount () {
        this.props.onGetALLProducts();
    }
    getQty=(event)=>{
        //console.log(event.target.value);
        this.setState({qty:event.target.value});
    
    }
     render(){
       
       let products=this.props.products.map(product => {
           let event=5;
            return (
            //<Link to={'/posts' + post.id}  >
            <Product
                key={product.id}
                id={product.id}
                imgPath={product.imageUrl}
                productTitle={product.title}
                productPrice={product.price}
                productCategory={product.category}
                onChange={(event)=>this.getQty(event)}
                clicked={()=>this.props.onAddToCart(product,this.state.qty)}
                 />
            //</Link>
            );
        });
        return(
            <div>
               <div className="sidenav">
                <button onClick={()=>this.props.onGetALLProducts()}>ALL Product</button>
                <button onClick={()=>this.props.onFilterProduct('vegetables')}>Vegitables</button>
                <button onClick={()=>this.props.onFilterProduct('fruits')}>Fruits</button>
               </div>
               <div className="content">
                {products}
               </div>
            </div>
         );
     }
}
const mapStateToProps=state=>{
     return{
        products:state.prod.products //prod is name of combined reducer product.js       
     };
};
const mapDispatchToProps=dispatch=>{
    return{
        onGetALLProducts:()=>dispatch(actionCreators.getAllProduct()),
        onFilterProduct:(category)=>dispatch(actionCreators.filterProduct(category)),
        onAddToCart:(product,qty)=>dispatch(cartActionCreators.addToCart(product,qty))
    };
};
export default  connect(mapStateToProps,mapDispatchToProps)(Products);