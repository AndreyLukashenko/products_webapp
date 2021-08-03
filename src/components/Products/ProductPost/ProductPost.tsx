import { Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchRewiews } from "../../../store/action-creators/productReviews";
import { fetchProducts } from "../../../store/action-creators/products";
import styles from './ProductPost.module.scss';
import { ProductPostReviews } from "./ProductPostReviews/ProductPostReviews";

interface IProductPostProps {}

const ProductPost: React.FC<IProductPostProps> = () => {
  const { id } = useParams<{id: string}>();
  const product = useTypedSelector(state => state.products.products.find(product => product.id === parseInt(id)));

  if(!product) {
    return <p>Product not found</p>
  }
  
  return (
    <div>
      <div>
        <img
          src={product.img}
          alt={product.text}
        />
        <h2>{product.title}</h2>
        <p>{product.text}</p>
      </div>
      <ProductPostReviews />
    </div>
  )
}

export default ProductPost;