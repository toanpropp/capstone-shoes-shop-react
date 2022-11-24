import { createSlice } from "@reduxjs/toolkit";
import { http,settings } from "../../util/config";
const initialState = {
  arrProduct: [],
  searchProduct: [],
  productDetail: {},
  cartList: settings.setStorageJson('cart') || [],

};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductApiAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = { ...action.payload };
    },
    addQuantityAction: (state, action) => {
      state.productDetail.cartQuantity += 1;
    },
    decreaseQuantity: (state, action) => {
      if (state.productDetail.cartQuantity > 1) {
        state.productDetail.cartQuantity -= 1;
      }
    },
    addItemToListCart:(state, action) => {
      state.cartList.push(action.payload);
      settings.getStorageJson('cart',state.cartList)
    },
    searchProductAction: (state, action) => {
      state.searchProduct = action.payload
  },
  },
});

export const {
  getProductApiAction,
  getProductDetailAction,
  addQuantityAction,
  decreaseQuantity,
  searchProductAction,
} = productReducer.actions;

export default productReducer.reducer;
//Async action
export const getProductApi = () => {
  return async (dispatch) => {
    const result = await http.get("/api/product");
    const action = getProductApiAction(result.data.content);
    dispatch(action);
  };
};
export const getProduceDetailApiById = (id) => {
  return async (dispatch) => {
    const result = await http.get("api/Product/getbyid?id=" + id);
    dispatch(getProductDetailAction({...result.data.content, cartQuantity: 1}));
  };
};
export const searchProductApi = (keyword) => {
  return async dispatch => {
      let result = await http.get('api/Product?keyword=' + keyword)
      let prodSearch = result.data.content
      const action = searchProductAction(prodSearch);
      dispatch(action)
  }
}
