import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/Product";

export const ProductsApi = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    GetProducts: builder.query<Product[], void>({
      query: () => `/products`,
      transformResponse: (response: { products: Product[] }) =>
        response.products,
    }),
  }),
});

export const { useGetProductsQuery } = ProductsApi;
