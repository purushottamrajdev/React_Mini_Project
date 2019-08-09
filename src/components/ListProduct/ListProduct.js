import React from 'react';
import {NavLink} from 'react-router-dom';
import './ListProduct.css';

const ListProduct = (props) => (
    <div className="ListProduct">
    <table>
        <tr>
        <td>{props.productTitle}</td>
        <td>{props.price}</td>
        <td>{props.category}</td>
        <td style={{color:'blue'}}><NavLink to={{pathname:'/edit-product/'+props.productId}}>Edit</NavLink></td>
        <td onClick={props.deleteClicked} style={{color:'blue'}}>Delete</td>
        </tr>
   </table>
    </div>
);

export default ListProduct;