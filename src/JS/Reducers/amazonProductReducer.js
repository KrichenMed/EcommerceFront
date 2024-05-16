const {
  ADDAMAZON_PANIER,
  ADDAMAZON_PRODUCT,
  DELETEAMAZON_PRODUCT,
  EDITAMAZON_PRODUCT,
  FAILAMAZON_PRODUCT,
  GETAMAZON_PRODUCT,
  LOADAMAZON_PRODUCT,
  GETAMAZON_PRODUCTBYID,
  GETAMAZON_PRODUCTBYASIN,
} = require("../ActionType/ActionType");

//initialStateProduct
const initialStateProduct = {
  product: null,
  load: false,
  error: null,
  panier: [],
};

const amazonProductReducer = (
  state = initialStateProduct,
  { type, payload }
) => {
  switch (type) {
    case LOADAMAZON_PRODUCT:
      return { ...state, load: true };
    case ADDAMAZON_PRODUCT:
      return { ...state, load: false };
    case EDITAMAZON_PRODUCT:
      return { ...state, load: false };
    case GETAMAZON_PRODUCT:
      return { ...state, product: payload.foundProduct, load: false };
    case GETAMAZON_PRODUCTBYID:
      return { ...state, product: payload, load: false };
    case GETAMAZON_PRODUCTBYASIN:
      return { ...state, product: payload.foundProduct, load: false };
    case DELETEAMAZON_PRODUCT:
      return { ...state, laod: false };
    case FAILAMAZON_PRODUCT:
      return { ...state, error: payload.error, load: false };
    case ADDAMAZON_PANIER:
      return { ...state, panier: [...state.panier, payload] };
    default:
      return state;
  }
};
export default amazonProductReducer;
