
const cartReducer = (state,action) => {

    

    if(action.type === "ADD_TO_CART"){
        let existing_product = state.Cart.find((item)=>item.id === action.payload.id)
        if(existing_product){
            const update_Product = state.Cart.map((item)=>{
                if(item.id === action.payload.id){
                   const newCount = item.productcount + action.payload.productcount
                    return {...item,productcount:newCount}
                }else{
                    return item
                }
                
            })
            return {...state,Cart:update_Product}
        }else{
        return {...state,Cart:[...state.Cart,action.payload]}
        }
    }
    if(action.type === "REMOVE_ITEM"){
        let remove = state.Cart.filter((item)=> item.id !== action.payload)
        return {...state,Cart:remove}
    }
  return state;
}

export default cartReducer