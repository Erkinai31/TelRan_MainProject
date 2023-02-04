const defaultState = {
    products:[]
}



export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {...state,products: [...action.payload]}
            case 'ADD_ONE_PRODUCT':
                return {...state,products: [...action.payload]}   
        default:
            return state
    } 
}

export const AddProductsAction = (payload) => ({type:'ADD_PRODUCTS' , payload})
export const AddOneProductAction = (payload) => ({type:'ADD_ONE_PRODUCT' , payload})
