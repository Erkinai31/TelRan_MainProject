let defaultState = {
  basket: [],
};

const ADD_PRODUCT = "ADD_PRODUCT";
const ADD_COUNT = "ADD_COUNT";
const REM_COUNT = "REM_COUNT"

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, count: 1 }],
      };
    case ADD_COUNT:
      return {
        ...state,
        goods: state.goods.map((elem) => {
          if (elem.id == action.payload) {
            elem.count = elem.count + 1;
          }
          return elem;
        }),
      };
    case REM_COUNT:
      let good = state.goods.find((elem) => elem.id == action.payload);
      if (good.count == 1) {
        return {
          ...state,
          goods: state.goods.filter((elem) => elem.id != action.payload),
        };
      } else {
        return {
          ...state,
          goods: state.goods.map((elem) => {
            if (elem.id == action.payload) {
              elem.count = elem.count - 1;
            }
            return elem;
          }),
        };
      }

    default:
      return state;
  }
};

export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });
export const addCountAction = (payload) => ({type: ADD_COUNT, payload}) 
export const remCountAction = (payload) => ({type: REM_COUNT, payload}) 

