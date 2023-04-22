import { Link } from "react-router-dom";
import "./categories.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Link className="category-item-container" to={`/shop/${title}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <div>Shop Now</div>
      </div>
    </Link>
  );
};
export default CategoryItem;
