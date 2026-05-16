import './ProductCard.css';

const ProductCard = (props) => {
    let { name, price, brand, description, image } = props.data;
    
    return(
        <div className="card-container">
            <div className="img-wrapper">
                <img src={image} alt={name} className="img" loading="lazy"/>
            </div>
            <div className="card-content">
                <h3 className="brand">{brand}</h3>
                <h2 className="name">{name}</h2>
                <h3 className="price">${price}</h3>
                <p className="desc">{description}</p>
            </div>
            <button className="buy-btn" onClick={() => alert(`Added ${name} to cart!`)}>
                Buy Now
            </button>
        </div>
    )
}

export default ProductCard;