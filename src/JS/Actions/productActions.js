import axios from "axios"
import { ADD_PANIER, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCT, GET_PRODUCT, LOAD_PRODUCT } from "../ActionType/ActionType"




//   L action Addproduct
export const addproduct =(newProduct)=>async(dispatch)=>{

dispatch({type : LOAD_PRODUCT})
try {
    const result = await axios.post("http://localhost:8000/api/product/addproduct", newProduct)
    dispatch({type : ADD_PRODUCT, payload: result.data})
} catch (error) {
    dispatch({type : FAIL_PRODUCT, payload :error.response})
}
}

//   L action GetPROduct 
export const getproduct = ()=>async(dispatch)=>{
    dispatch({type : LOAD_PRODUCT})
    try {  
        const result = await axios.get("http://localhost:8000/api/product/getproduct")
        dispatch({type : GET_PRODUCT, payload: result.data})
    } catch (error) {
        dispatch({type : FAIL_PRODUCT, payload :error.response})
    }
}

//   L action DeletePROduct

export const deleteproduct=(_id)=>async(dispatch)=>{
    dispatch({type : DELETE_PRODUCT})
    try {
        const result = await axios.delete(`http://localhost:8000/api/product/deleteproduct/${_id}`)
        dispatch({type : DELETE_PRODUCT, payload: result.data})
    } catch (error) {
        dispatch({type : FAIL_PRODUCT, payload :error.response}) 
    }

}


// l'action editproduct

export const  editproduct = (_id, prix)=>async(dispatch)=>{
dispatch({type : EDIT_PRODUCT})
try {
    const  result = await axios.put(`http://localhost:8000/api/product/editproduct/${_id}`, prix)
    dispatch({type : EDIT_PRODUCT, payload: result.data})
} catch (error) {
    dispatch({type : FAIL_PRODUCT, payload :error.response}) 
}
}



// l action addpanier 

export const addPanier = (product)=>async(dispatch)=> {

    dispatch({type : ADD_PANIER, payload : product})

}
