
import * as actionType from '../actions/products';
const initialState={ 
    products:[]
}
 const reducer=(state=initialState,action)=>
{
     switch(action.type)
     {
         case actionType.GET_ALL_PRODUCT:
         return{...state,
            products:action.data
         }
         case actionType.FILTER_PRODUCT:
         return{...state,
            products:action.data
         }
     }
     return state;
};

export default reducer;