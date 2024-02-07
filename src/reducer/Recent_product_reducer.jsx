

const Recent_product = (state,action) => {

    if(action.type === "ADD_RECENT"){
        let existing_product = state.RecentProduct.find((item)=>item.id === action.payload.id)
        if(existing_product){
            return state
        }else{
            return {...state,RecentProduct:[...state.RecentProduct,action.payload]}
        }
    }

}

export default Recent_product