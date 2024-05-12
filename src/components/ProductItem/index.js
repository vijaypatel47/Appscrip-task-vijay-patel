
import './index.css'

const ProductItem = props => {
  const {blogData, isHeartActive} = props
  const {title, image} = blogData

  const active = isHeartActive
    ? 'https://res.cloudinary.com/drgheojrx/image/upload/v1715519592/heart_rylx1i.png'
    : 'https://res.cloudinary.com/drgheojrx/image/upload/v1715454035/heart_nioema.png'

  return (
    <li className="item-cont">
      <img src={image} alt="title" className="product-img" />
      <div className="name-heart-container">
        <h4 className="product-name">{title}</h4>
        <img src={active} className="heart" alt="heart" />
      </div>
    </li>
  )
}

export default ProductItem
