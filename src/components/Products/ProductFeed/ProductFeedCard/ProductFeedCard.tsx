import { NavLink } from 'react-router-dom';
import { IProductDTO } from "../../../../dto/products.dto";
import styles from './ProductFeedCard.module.scss';

interface IProductFeedCardProps {
  product: IProductDTO;
}

const ProductFeedCard: React.FC<IProductFeedCardProps> = ({ product }) => {
  return (
    <NavLink to={`/product/${product.id}`} className={styles['product-card']}>
      <div className={styles['product-card__image']} >
        <img src={product.img} alt={product.text} />
      </div>
      <h2 className={styles['product-card__title']}>{product.title}</h2>
      <p className={styles['product-card__description']}>{product.text}</p>
    </NavLink>
  )
}

export default ProductFeedCard;