export const ADD_PRODUCT='ADD_PRODUCT';

export const  addToCart=(cartItem,qty)=>{
    cartItem.quantity=qty;
    return {
        type:ADD_PRODUCT,
        data:cartItem
        }
}