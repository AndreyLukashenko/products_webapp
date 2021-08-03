import { IProductReviewsState, ProductReviewsAction, ProductReviewsActionTypes } from "../../types/productReviews";

const initialState: IProductReviewsState = {
  reviews: [],
  loading: false,
  error: null,
  submit: false,
  submitError: null,
}

export const productReviewsReducer = (state = initialState, action: ProductReviewsAction): IProductReviewsState => {
  switch(action.type) {
    case ProductReviewsActionTypes.FETCH_REVIEWS: {
      return { ...state, loading: true, error: null };
    }
    case ProductReviewsActionTypes.FETCH_REVIEWS_SUCCESS: {
      return { ...state, reviews: action.payload, loading: false, error: null };
    }
    case ProductReviewsActionTypes.FETCH_REVIEWS_ERROR: {
      return { ...state, reviews: [], loading: false, error: action.payload };
    }
    case ProductReviewsActionTypes.SUBMIT_REVIEW: {
      return { ...state, submit: true, submitError: null }
    }
    case ProductReviewsActionTypes.SUBMIT_REVIEW_SUCCESS: {
      return { ...state, submit: false, error: null };
    }
    case ProductReviewsActionTypes.SUBMIT_REVIEW_ERROR: {
      return { ...state, submit: false, error: action.payload };
    }
    default:
      return state;
  }
}