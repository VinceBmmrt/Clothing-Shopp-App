import "./directory.styles.scss";
import DirectoryyItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryyItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
