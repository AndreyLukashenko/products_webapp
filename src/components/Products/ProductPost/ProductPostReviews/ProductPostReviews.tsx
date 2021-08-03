import { Formik } from "formik"
import { useEffect } from "react";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { fetchRewiews, sendReview } from "../../../../store/action-creators/productReviews";

interface IProductPostReviewsProps {}

export const ProductPostReviews: React.FC<IProductPostReviewsProps> = () => {
  const { id } = useParams<{id: string}>();
  const { reviews, loading, error, submit, submitError } = useTypedSelector(state => state.productReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRewiews(parseInt(id)));
  }, [id])

  return (
    <div>
      <Formik
        initialValues={{
          rate: 0,
          text: '',
        }}
        onSubmit={values => {
          dispatch(sendReview(parseInt(id), values));
        }}
      >
        {(formProps) => {
          return (
            <form onSubmit={formProps.handleSubmit}>
              <div>
                <p>Your Rating</p>
                <Rating
                  initialRating={formProps.values.rate}
                  onChange={value => {
                    formProps.setFieldValue('rate', value);
                  }}
                />
              </div>
              <textarea
                name='text'
                placeholder='Your message' 
                value={formProps.values.text}
                onChange={formProps.handleChange}
              />
              <button
                type='submit'
              >
                Submit
              </button>
            </form>
          )
        }}
      </Formik>
      <div>
        {reviews.map(review => {
          return (
            <p key={review.id}>{review.text}</p>
          )
        }) }
      </div>
    </div>
  )
}