import React,{Component} from 'react';
import ListProduct from '../../components/ListProduct/ListProduct';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/productList';
import {NavLink} from 'react-router-dom';
import './ProductList.css';
class ProductList extends Component{
    componentDidMount () {
        this.props.onGetProductList();
    }
    confirmDelete(id){
        if(window.confirm("Please Confirm Delete?"))
        { 
            this.props.onDeleteProduct(id);
        }  
    }
    render()
    {
        console.log('current path:'+this.props.match.url);
        let productList=this.props.productList.map(product => {
            return (
            //<Link to={'/posts' + post.id}  >
            <ListProduct
                key={product.id}
                productId={product.id}
                productTitle={product.title}
                price={product.price}
                category={product.category}
                deleteClicked={()=>this.confirmDelete(product.id)}
                 />
            //</Link>
            );
        });
         return(
             <div>
                 <center>
                    <NavLink to={{pathname:'/new-product'}}  ><button className="NewProductButton">New Product</button></NavLink>
                    {productList}
                </center>
             </div>
         );
    }
}
const mapStateToProps=state=>{
    return{
       productList:state.prodList.productList//prod is name of combined reducer product.js       
    };
};
const mapDispatchToProps=dispatch=>{
   return{
       onGetProductList:()=>dispatch(actionCreators.getProductList()),
       onDeleteProduct:(id)=>dispatch(actionCreators.deleteProduct(id))
      
   };
};
export default  connect(mapStateToProps,mapDispatchToProps)(ProductList);