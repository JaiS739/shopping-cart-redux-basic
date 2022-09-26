import * as types from "./actionTypes";

const getTotal = () => ({
  type: types.GET_TOTAL,
});

const increase = (id) => ({
  type: types.INCREASE,
  payload: id,
});

export { getTotal, increase };
