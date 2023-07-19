import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as GentleLogo } from "../../assets/antique-male-character-of-a-hat-a-bow-and-a-mustache-svgrepo-com.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles.jsx";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <GentleLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
        </NavLinksContainer>
        <div>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
