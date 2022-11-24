import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listShoes: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.listShoes.push(action.payload);
    },
    addShoesAction: (state, action) => {
      const itemIndex = state.listShoes.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.listShoes[itemIndex].cartQuantity += 1;
      } else {
        const productUpdate = { ...action.payload, cartQuantity: 1 };
        state.listShoes.push(productUpdate);
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.listShoes.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.listShoes[itemIndex].cartQuantity > 1) {
        state.listShoes[itemIndex].cartQuantity -= 1;
      } else if (state.listShoes[itemIndex].cartQuantity === 1) {
        const removeItem = state.listShoes.filter(
          (item) => item.id !== action.payload.id
        );
        state.listShoes = removeItem;
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.listShoes.filter(
        (item) => item.id !== action.payload.id
      );
      state.listShoes = removeItem;
    },
    orderAction: (state, action) => {
      state.itemOrder = action.payload;
    },
  },
});

export const {
  addShoesAction,
  decreaseQuantity,
  removeFromCart,
  addItemToCart,
  orderAction,
} = cartReducer.actions;

export default cartReducer.reducer;

//async action
// export const orderApi = () => {
//   return async (dispatch) => {
//     const result = await http.post("/api/Users/order");
//     dispatch(orderAction(result.data.content));
//   };
// };
