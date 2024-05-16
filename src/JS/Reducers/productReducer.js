const { ADD_PRODUCT, LOAD_PRODUCT, GET_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, FAIL_PRODUCT, ADD_PANIER } = require("../ActionType/ActionType")


//initialStateProduct
const initialStateProduct={
    product:null,
    load:false,
    error:null,
    panier : [],
}

const productReducer=(state=initialStateProduct,{type,payload})=>{

    switch (type) {
        case LOAD_PRODUCT: 
            return{...state,load:true}
        case ADD_PRODUCT:
            return{...state, load:false }
        case EDIT_PRODUCT :
            return{...state, load:false}
        case GET_PRODUCT : 
            return{...state, product:  payload.foundProduct, load : false}
        case DELETE_PRODUCT :
            return{...state, laod : false}
        case FAIL_PRODUCT: 
            return{...state , error : payload.error, load: false  }
        case ADD_PANIER :
            
            return{...state , panier : [ ...state.panier  , payload ]}
        default : 
           return(state)
    }
}
export  default productReducer


