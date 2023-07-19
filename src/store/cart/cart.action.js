import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

export const setCart = (cartArray) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartArray);
