let defaultState = {
    basket: [
        {id: 1, name: 'Велосипед', count: 2},
        {id: 2, name: 'Самокат', count: 3},
        {id: 3, name: 'Ролики', count: 4}
    ]
}

const ADD_PRODUCT = 'ADD_PRODUCT'
const REM_PRODUCT = 'ADD_PRODUCT'
const ADD_MORE_PRODUCTS = 'ADD_PRODUCTS'


export const basketReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_PRODUCT:
            return {...state, basket: state.basket.map(elem => {
                if (elem.id == action.payload){
                    elem.count = elem.count + 1
                }
                return elem
            })}
       
        case REM_PRODUCT:
            let basketGood = state.basket.find(elem => elem.id == action.payload)
            if (basketGood.count == 1){
                return {...state, basket: state.basket.filter(elem => elem.id != action.payload)}
            } else {
                return {...state, basket: state.basket.map(elem => {
                    if (elem.id == action.payload){
                        elem.count = elem.count - 1
                    }
                    return elem
                })}
            }
        case ADD_MORE_PRODUCTS:
            let newGood = state.basket.find(elem => elem.name == action.payload)
            if (newGood) {
                return {...state, basket: state.basket.map(elem => {
                    if (elem.id == newGood.id){
                        elem.count = elem.count + 1
                    }
                    return elem
                })}
            } else {
                return {...state, basket: [...state.basket, 
                    {
                        id: Math.max(...state.basket.map(elem => elem.id)) + 1,
                        name: action.payload,
                        count: 1
                    }]}
            }
        default: 
            return state
    }
}


export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload}) 
export const remProductAction = (payload) => ({type: REM_PRODUCT, payload}) 
export const addMoreProductAction = (payload) => ({type: ADD_MORE_PRODUCTS, payload})
