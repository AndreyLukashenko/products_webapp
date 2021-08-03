import { IProductDTO } from "../dto/products.dto";

export interface ProductsState {
  products: IProductDTO[],
  loading: boolean;
  error: null | string;
};

export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
};

interface FetchProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS;
};

interface FetchProductsSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProductDTO[];
}

interface FetchProductsErrorAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductsAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction;