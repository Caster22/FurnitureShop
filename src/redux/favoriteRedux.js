/* selectors */
export const getAllFavorites = ({ favorite }) => favorite.products;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_FAVORITE_PRODUCT = createActionName('SET_FAVORITE_PRODUCT');

/* action creators */
export const setFavoriteProduct = payload => ({ payload, type: SET_FAVORITE_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_FAVORITE_PRODUCT: {
      console.log(statePart);
      return statePart;
    }
    default:
      return statePart;
  }
}
