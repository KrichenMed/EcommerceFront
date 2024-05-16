import axios from "axios";
import {
  ADDAMAZON_PANIER,
  ADDAMAZON_PRODUCT,
  DELETEAMAZON_PRODUCT,
  EDITAMAZON_PRODUCT,
  FAILAMAZON_PRODUCT,
  GETAMAZON_PRODUCT,
  LOADAMAZON_PRODUCT,
  GETAMAZON_PRODUCTBYID,
  GETAMAZON_PRODUCTBYASIN,
} from "../ActionType/ActionType";

//   L action Addproduct
export const addproduct = (newProduct) => async (dispatch) => {
  dispatch({ type: LOADAMAZON_PRODUCT });
  try {
    const result = await axios.post(
      "http://localhost:8000/api/amazonProduct/addproduct",
      newProduct
    );
    dispatch({ type: ADDAMAZON_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAILAMAZON_PRODUCT, payload: error.response });
  }
};

//   L action GetPROduct
export const getproduct = () => async (dispatch) => {
  dispatch({ type: LOADAMAZON_PRODUCT });
  try {
    const result = await axios.get(
      "http://localhost:8000/api/amazonProduct/getproduct"
    );
    dispatch({ type: GETAMAZON_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAILAMAZON_PRODUCT, payload: error.response });
  }
};

//   L action getproductbyid
export const getproductbyid = (_id) => async (dispatch) => {
  try {
    // Dispatch action to set loading state
    dispatch({ type: LOADAMAZON_PRODUCT });

    // Make a GET request to fetch product by ID
    const response = await axios.get(
      `http://localhost:8000/api/amazonProduct/getproductbyid/${_id}`
    );

    dispatch({ type: GETAMAZON_PRODUCTBYID, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILAMAZON_PRODUCT, payload: error.response });
  }
};

//
export const getproductbyasin = (category_name) => async (dispatch) => {
  try {
    // Dispatch action to set loading state
    dispatch({ type: LOADAMAZON_PRODUCT });

    // Make a GET request to fetch product by ID
    const response = await axios.get(
      `http://localhost:8000/api/amazonProduct/getproductbyasin/${category_name}`
    );

    dispatch({ type: GETAMAZON_PRODUCTBYASIN, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILAMAZON_PRODUCT, payload: error.response });
  }
};
//   L action DeletePROduct

export const deleteproduct = (_id) => async (dispatch) => {
  dispatch({ type: DELETEAMAZON_PRODUCT });
  try {
    const result = await axios.delete(
      `http://localhost:8000/api/amazonProduct/deleteproduct/${_id}`
    );
    dispatch({ type: DELETEAMAZON_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAILAMAZON_PRODUCT, payload: error.response });
  }
};

// l'action editproduct

export const editproduct = (_id, prix) => async (dispatch) => {
  dispatch({ type: EDITAMAZON_PRODUCT });
  try {
    const result = await axios.put(
      `http://localhost:8000/api/amazonProduct/editproduct/${_id}`,
      prix
    );
    dispatch({ type: EDITAMAZON_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAILAMAZON_PRODUCT, payload: error.response });
  }
};

// l action addpanier

export const addPanier = (product) => async (dispatch) => {
  dispatch({ type: ADDAMAZON_PANIER, payload: product });
};
