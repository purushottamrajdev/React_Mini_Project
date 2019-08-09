import React, { Component } from 'react';
import axios from '../../axios';
import {Redirect} from 'react-router-dom';
import './NewProduct.css'; 

class NewProduct extends Component {
    state = {
        title: '',
        price: '',
        category: '',
        imageUrl:'',
        isSubmited: false
    }
componentWillMount(){
    console.log(this.props);
}
    postDataHandler = () => {
        const data = {
            title: this.state.title,
            price: this.state.price,
            category: this.state.category,
            imageUrl:this.state.imageUrl,
        };
       axios.post('/products', data)
            .then(response => {
                console.log(response);
                this.props.history.push('/admin-option');
               // this.setState({isSubmited: true});
            });
        }
    
    
    
    render () {
        let redirect=null;
        if(this.state.isSubmited)
        { 
            redirect=<Redirect to="/admin-option" />
        }
        return (
            <div className="NewProduct">
               {redirect}
                <h1>Add New Product</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Price</label>
                <input type="text" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})} />
                <label>Category</label>
                <select onChange={(event)=>this.setState({category:event.target.value})}>
                    <option>Select Category</option>
                    <option value="vegetable">vegetable</option>
                    <option value="fruit">Fruit</option>
                </select>
                
                <label>Image Url</label>
                <input type="text" value={this.state.imageUrl} onChange={(event) => this.setState({imageUrl: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Product</button>
            </div>
        );
    }
}

export default NewProduct;