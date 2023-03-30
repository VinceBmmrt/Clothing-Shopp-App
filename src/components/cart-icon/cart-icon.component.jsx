import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  let itemCount = 0;

  return (
    <div className="cart-icon-container">
      <ShoppingIcon></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
