const defaultState = {
    categories:[]
}



export const categoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {...state, categories: [...state.categories, ...action.payload]}
        default:
            return state
    } 
}

export const AddCategoryAction = (payload) => ({type:'ADD_CATEGORY' , payload})
