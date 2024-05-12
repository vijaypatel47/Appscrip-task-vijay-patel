import './index.css'

const ProductItem = props => {
  const {blogData} = props
  const {title, image} = blogData
  return (
    <li className="item-cont">
      <img src={image} alt="title" className="product-img" />
      <div className="name-heart-container">
        <h4 className="product-name">{title}</h4>
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454035/heart_nioema.png"
          className="heart"
          alt="heart"
        />
      </div>
    </li>
  )
}

export default ProductItem
