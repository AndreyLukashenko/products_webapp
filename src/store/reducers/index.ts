import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReviewsReducer } from "./productReviewsReducer";
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  productReviews: productReviewsReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;