import {
  CheckoutItemContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  ImageContainer,
} from "./checkout-item.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  console.log("cartItem checkout item", cartItem);
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>

      <Quantity>
        <Arrow click={removeItemHandler}>&#10094;</Arrow>
        {quantity}
        <Arrow click={addItemHandler}> &#10095;</Arrow>
      </Quantity>
      <Value>{price} </Value>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
