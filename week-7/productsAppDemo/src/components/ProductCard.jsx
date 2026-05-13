import './ProductCard.css';

const ProductCard = (props) => {
    let {productId,name,price,brand,description,image} = props.data;
    console.log(productId,name,price,brand,description,image);
    
    return(
        <div className="card-container">
            <img src={image} alt="" className="img"/>
            <h2 className="name">{name}</h2>
            <h3 className="brand">{brand}</h3>
            <h3 className="price">${price}</h3>
            <p className="desc">{description}</p>
        </div>
    )
}
export default ProductCard;