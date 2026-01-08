import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/Product";

export const ProductsApi = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    GetProducts: builder.infiniteQuery<Product[], void, number>({
      query: ({ pageParam = 0 }) => `/products?skip=${pageParam * 10}&limit=10`,
      transformResponse: (response: { products: Product[] }) =>
        response.products,
      infiniteQueryOptions: {
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          console.log("Fetching page:", lastPageParam + 1);
          return lastPage.length === 10 ? lastPageParam + 1 : undefined;
        },
      },
    }),
  }),
});

export const { useGetProductsInfiniteQuery } = ProductsApi;
