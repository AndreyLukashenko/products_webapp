import { IProductReviewDTO } from '../dto/productReviews.dto';

export interface IProductReviewsState {
  reviews: IProductReviewDTO[];
  loading: boolean;
  error: null | string;
  submit: boolean;
  submitError: null | string;
}

export enum ProductReviewsActionTypes {
  FETCH_REVIEWS = 'FETCH_REVIEWS',
  FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS',
  FETCH_REVIEWS_ERROR = 'FETCH_REVIEWS_ERROR',
  SUBMIT_REVIEW = 'SUBMIT_REVIEW',
  SUBMIT_REVIEW_SUCCESS = 'SUBMIT_REVIEW_SUCCESS',
  SUBMIT_REVIEW_ERROR = 'SUBMIT_REVIEW_ERROR',
}

interface FetchProductReviewsAction {
  type: ProductReviewsActionTypes.FETCH_REVIEWS;
}

interface FetchProductReviewsSuccessAction {
  type: ProductReviewsActionTypes.FETCH_REVIEWS_SUCCESS;
  payload: IProductReviewDTO[];
}

interface FetchProductReviewsErrorAction {
  type: ProductReviewsActionTypes.FETCH_REVIEWS_ERROR;
  payload: string;
}

interface SubmitReviewAction {
  type: ProductReviewsActionTypes.SUBMIT_REVIEW;
}

interface SubmitReviewSuccessAction {
  type: ProductReviewsActionTypes.SUBMIT_REVIEW_SUCCESS;
}

interface SubmitReviewErrorAction {
  type: ProductReviewsActionTypes.SUBMIT_REVIEW_ERROR;
  payload: string;
}

export type ProductReviewsAction = FetchProductReviewsAction | FetchProductReviewsSuccessAction | FetchProductReviewsErrorAction | SubmitReviewAction | SubmitReviewSuccessAction | SubmitReviewErrorAction;

