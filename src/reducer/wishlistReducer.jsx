const wishlistReducer = (state, action) => {
  if (action.type === "ADD_TO_WISHLIST") {
    let existing_product = state?.Wishlist?.find((item) => item?.id === action?.payload?.id);
    if (existing_product) {
      return state;
    } else {
      return { ...state, Wishlist: [...(state?.Wishlist || []), action?.payload] };
    }
  }

  if (action.type === "REMOVE_TO_WISHLIST") {
    let remove = (state?.Wishlist || []).filter((item) => item?.id !== action?.payload);
    return { ...state, Wishlist: remove };
  }

  return state;
};

export default wishlistReducer;
