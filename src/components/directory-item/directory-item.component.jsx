import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryyItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer
    //to={`/shop/${title}`}
    >
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <div>Shop Now</div>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryyItem;
