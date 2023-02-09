const defaultState = {
    productsList:[]
}



export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {...state, productsList: [...action.payload]}
        default:
            return state
    } 
}

export const AddProductsAction = (payload) => ({type:'ADD_PRODUCTS' , payload})
