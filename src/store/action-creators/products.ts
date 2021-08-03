import { Dispatch } from "react"
import { service } from "../../api";
import { IProductDTO } from "../../dto/products.dto";
import { ProductsAction, ProductsActionTypes } from "../../types/products"

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const { data }: { data: IProductDTO[] } = await service.get('/products/');
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: data.map(d => ({...d, img: `https://smktesting.herokuapp.com/static/${d.img}`})) });
    } catch (e) {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Server error. Try again later' });
    }
  }
}