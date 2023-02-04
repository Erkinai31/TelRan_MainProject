const defaultState = {
    categories:[]
}



export const categoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CATEGORIES':
            return {...state, categories: [...action.payload]}
        case 'ADD_ONE_CATEGORY':
            return {...state,categories:[...action.payload]}
        default:
            return state
    } 
}

export const AddCategoriesAction = (payload) => ({type:'ADD_CATEGORIES' , payload})
export const AddOneCategoryAction = (payload) => ({type:'ADD_ONE_CATEGORY' , payload})
