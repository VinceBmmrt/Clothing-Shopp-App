import { Link } from "react-router-dom";
import "./categories.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <Link to={`/shop/${title}`}>Shop Now</Link>
      </div>
    </div>
  );
};
export default CategoryItem;
