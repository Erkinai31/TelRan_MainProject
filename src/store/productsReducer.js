const defaultState = {
    products:[]
}



export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {...state,products: [...state.products, ...action.payload]}
        default:
            return state
    } 
}

export const AddProductAction = (payload) => ({type:'ADD_PRODUCT' , payload})
