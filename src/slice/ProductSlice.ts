import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  error: string;
  loading: boolean;
  data: any[];
};

const initialState: StateType = {
  error: "",
  loading: false,
  data: [],
};
const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    fetchRequest(state) {
      state.loading = true;
      state.error = "";
    },
    fetchSuccess(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchFailure } =
  ProductsSlice.actions;

export default ProductsSlice;
