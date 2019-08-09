import React, { Component } from 'react';
import axios from '../../axios';
import {Redirect } from 'react-router-dom';
import '../NewProduct/NewProduct.css';

class EditProduct extends Component {
    state = {
        id:'',
        title: '',
        price: '',
        category: '',
        imageUrl:'',
        isSubmited: false
    }
    componentDidMount(){
        
         //console.log(this.props.match.params.id);
         //console.log(product.id);
          this.getData();

    }
    getData(){
        axios.get('/products/'+this.props.match.params.id)
        .then(response => {
            console.log(response);
            let product=response.data;
             this.setState({id:product.id,title:product.title,price:product.price,category:product.category,imageUrl:product.imageUrl});
           // this.setState({isSubmited: true});
        });
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            price: this.state.price,
            category: this.state.category,
            imageUrl:this.state.imageUrl,
        };
        axios.put('/products/'+this.props.match.params.id, data)
            .then(response => {
                console.log(response);
                this.props.history.push('/admin-option');
               // this.setState({isSubmited: true});
            });
    }
    
    render () {
        let redirect=null;
        if(this.state.isSubmited){ 
            redirect=<Redirect to="/admin-option" />
        }
        return (
            <div className="NewProduct">
               {redirect}
                <h1>Edit Form</h1>
                <label>Id</label>
                <input type="text" value={this.state.id} onChange={(event) => this.setState({id: event.target.value})} readOnly/>
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
                <button onClick={this.postDataHandler}>Update</button>
            </div>
        );
    }
}

export default EditProduct;