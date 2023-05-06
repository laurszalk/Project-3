import "./product.css";
import "../../pages/products";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, description, price, image, quantity, id } = props.data;
  return (
    <div className="card">
      <div className="container">
        {/* <Link to={`/product/${id}`}> */}
        <img src={image} alt="plant" />
        <div className="middle">
          <div className="text">Details</div>
        </div>
      </div>
      <div className="info">
        {/* </Link> */}
        <p className="name">{name}</p>
        <p>{description}</p>
        <p>${price}</p>
        <p>{quantity}</p>
        <p>{id}</p>
        <p className="wishlist">
          <FavoriteBorderIcon />
          Add to Wishlist
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
