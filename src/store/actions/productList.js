import axios from 'axios';
export const GET_PRODUCT='GET_PRODUCT';
export const DELETE_PRODUCT='DELETE_PRODUCT';
export const getProductList = () => {
    return dispatch => {
    axios.get(' http://localhost:3000/api/products')
    .then(response => {
    dispatch(getProductData(response.data,GET_PRODUCT))
    })
    .catch(error=>{
    console.log(error,'Oops ! Cannot fetch data');
    })
    }
   }

   export const deleteProduct=(id)=>{
    return dispatch => {
        axios.delete(' http://localhost:3000/api/products/'+id)
        .then(response => {
        alert("Product Deleted");
        dispatch(getProductData(response.data,DELETE_PRODUCT))
        })
        .catch(error=>{
        console.log(error,'Oops ! Cannot fetch data');
        })
        }        
   }

   export const getProductData = (productData,type) => {
    return {
    type:type,
    data:productData
    }
   }