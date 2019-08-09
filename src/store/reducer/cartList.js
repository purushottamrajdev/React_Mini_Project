import * as actionType from '../actions/cartList';
const initialState={ 
    cartList:[]
}
const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        
         case actionType.ADD_PRODUCT:
            let tempCart=[...state.cartList];
            let obj = tempCart.find(obj => obj.id == action.data.id);
            let newCart=tempCart.filter(function(ele){
            return ele != obj;
        });
        if(obj){
            //action.data.quantity+=obj.quantity
            let oldQty=parseInt(obj.quantity,10);
            let newQty=parseInt(action.data.quantity,10)
            let updatedQty=newQty+oldQty;
            action.data.quantity=updatedQty;
        }
         newCart.push(action.data);
         alert("Added to Cart");
         return{
             ...state,
              cartList: newCart
         }
    }
    return state;
}

export default reducer;