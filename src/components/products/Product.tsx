import type { ProductInterface } from '../../types/Product.interface'
interface ProductProps {
    product: ProductInterface
}

const Product = ({product:{name, description, price, image, category}}: ProductProps) => {
  return (
    <li className="product-item">
        <h2 className="product-item__title">{name}</h2>
        <p className="product-item__description">{description}</p>
        <p className="product-item__category">{category}</p>
        <h3 className="product-item__price">${price}</h3>
        <img className="product-item__image" src={image} alt={name} />
    </li>
  )
}

export default Product