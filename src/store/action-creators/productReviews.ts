import { Dispatch } from "react"
import { service } from "../../api";
import { IProductReviewDTO, ISendProductReviewDTO, ISendProductReviewSuccessDTO } from "../../dto/productReviews.dto";
import { ProductReviewsAction, ProductReviewsActionTypes } from "../../types/productReviews"

export const fetchRewiews = (productID: number) => {
  return async (dispatch: Dispatch<ProductReviewsAction>) => {
    try {
      dispatch({ type: ProductReviewsActionTypes.FETCH_REVIEWS });
      const { data }: { data: IProductReviewDTO[] } = await service.get(`/reviews/${productID}`);
      dispatch({ type: ProductReviewsActionTypes.FETCH_REVIEWS_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: ProductReviewsActionTypes.FETCH_REVIEWS_ERROR, payload: 'Server error. Try later' });
    }
  }
}

export const sendReview = (productID: number, values: ISendProductReviewDTO) => {
  return async (dispatch: Dispatch<ProductReviewsAction>) => {
    try {
      dispatch({ type: ProductReviewsActionTypes.SUBMIT_REVIEW });
      const { data }: { data: ISendProductReviewSuccessDTO } = await service.post(`/reviews/${productID}`, { ...values });
      dispatch({ type: ProductReviewsActionTypes.SUBMIT_REVIEW_SUCCESS });
    } catch (e) {
      dispatch({ type: ProductReviewsActionTypes.SUBMIT_REVIEW_ERROR, payload: 'Server error. Try later' });
    }
  }
}