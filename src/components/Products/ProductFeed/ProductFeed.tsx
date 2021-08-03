import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchProducts } from "../../../store/action-creators/products";
import ProductFeedCard from "./ProductFeedCard/ProductFeedCard";
import styles from './ProductFeed.module.scss';

const ProductFeed: React.FC = () => {
  const { products, loading, error } = useTypedSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if(loading) {
    return <p>Loading...</p>;
  }

  if(error) {
    return <p>{error}</p>;
  }

  console.log(products, 'PRODUCTS');

  return (
    <div className='container'>
      <div className={styles['product-feed']}>
        {products.map(product => <ProductFeedCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default ProductFeed;