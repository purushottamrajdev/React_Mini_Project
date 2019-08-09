import axios from 'axios';
export const GET_ALL_PRODUCT='GET_ALL_PRODUCT';
export const FILTER_PRODUCT='FILTER_PRODUCT';


export const getAllProduct = () => {
    return dispatch => {
    axios.get(' http://localhost:3000/api/products')
    .then(response => {
    dispatch(getProductData(response.data,GET_ALL_PRODUCT))
    })
    .catch(error=>{
    console.log(error,'Oops ! Cannot fetch data');
    })
    }
   }

   export const filterProduct = (category) => {
    return dispatch => {
    axios.get(' http://localhost:3000/api/products')
    .then(response => {
    let filterProduct  = response.data.filter(product => product.category===category);
    dispatch(getProductData(filterProduct,FILTER_PRODUCT))
    })
    .catch(error=>{
    console.log(error,'Oops ! Cannot fetch data');
    })
    }
   }
    
   export const getProductData = (productData,categoryType) => {
    return {
    type:categoryType,
    data:productData
    }
   }