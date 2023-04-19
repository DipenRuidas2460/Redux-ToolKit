import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const statuses = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: statuses.IDLE,
  },

  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = statuses.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statuses.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = statuses.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Normal Thunks :--

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(statuses.LOADING));
//     // const prop = getState().data

//     try {
//       const url = "https://fakestoreapi.com/products";
//       const res = await fetch(url);
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(statuses.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(statuses.ERROR);
//     }
//   };
// }

// Redux-ToolKit Thunk :---

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const data = await res.json();
  return data;
});