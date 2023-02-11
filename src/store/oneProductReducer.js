const defaultState = {
    oneProduct:[]
}



export const oneProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ONE_PRODUCT':
            return {...state,oneProduct:action.payload}
        // case 'SORT_PRODUCTS':
        //     if(action.payload == 1){
        //         return {...state.productsList.sort((crElem,nxElem)=>nxElem-crElem)}
        //     }else if(action.payload==1){
        //         return {...state.productsList.sort((crElem,nxElem)=>crElem-nxElem)}
        //     }
         default:
            return state
    } 
}

export const AddOneProductAction = (payload) => ({type:'ADD_ONE_PRODUCT' , payload})
