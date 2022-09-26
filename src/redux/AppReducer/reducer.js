import * as types from "./actionTypes";
import cartData from "../../data";

const initialState = {
  totalAmount: 0,
  totalCount: 0,
  cart: cartData,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TOTAL: {
      let { totalCount, totalAmount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;

          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      totalAmount = parseFloat(totalAmount.toFixed(2));
      return { ...state, totalAmount, totalCount };
    }

    case types.INCREASE:
      let tempCartInc = state.cart.map((ele) => {
        if (ele.id === payload) {
          return { ...ele, amount: ele.amount + 1 };
        }
        return ele;
      });

      return { ...state, cart: tempCartInc };

    default: {
      return state;
    }
  }
};

export { reducer };
