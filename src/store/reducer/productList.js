
import * as actionType from '../actions/productList';
const initialState={ 
    productList:[{"id":1,"category":"vegetables","imageUrl":"http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg","price":10,"title":"Spinach"}]
}

const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {

        case actionType.GET_PRODUCT:
        return{...state,
            productList:action.data
         }
         case actionType.DELETE_PRODUCT:
         console.log("inside reducer:"+action.data.id)
         const updatedProductList=state.productList.filter(product=>product.id!==action.data.id);
        return{...state,
            productList:updatedProductList
         }
    }
    return state;
};

export default reducer;