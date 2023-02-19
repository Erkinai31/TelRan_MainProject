const defaultState = {
    productsList:[]
}



export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {...state, productsList:action.payload.map(elem => ({...elem, show: true})) }
            case 'SORT_PRODUCTS':
                if(action.payload == 1){
                    return {...state, productsList: state.productsList.slice().sort((crElem, nxElem) => nxElem.price - crElem.price)}
                } else if (action.payload == 2){
                    return {...state, productsList: state.productsList.slice().sort((crElem, nxElem) => crElem.price - nxElem.price)}
                } else if (action.payload == 3){
                    return {...state, productsList: state.productsList.slice().sort((crElem, nxElem) => {
                        if (crElem.title > nxElem.title) return 1
                        if (crElem.title < nxElem.title) return -1
                        if (crElem.title == nxElem.title) return 0
                    })}
                } else {
                    return state
                }
            case 'FILTER_PRODUCTS':
                if (action.payload == true){
                    return {...state, productsList: state.productsList.map(elem => {
                        if (elem.price - elem.discont_price === 0){
                            elem.show = !elem.show
                        }
                        return elem
                    }) }
                } else {
                    return {...state, productsList: state.productsList.map(elem => ({...elem, show: true}))}
                }
            case 'FILTER_PRICE_FROM':
                if (action.payload){
                    return {...state, productsList: state.productsList.map(elem => {
                        if (0<=elem.discont_price){
                            elem.show = !elem.show
                        }
                        return elem
                    }) }
                } else {
                    return {...state, productsList: state.productsList.map(elem => ({...elem, show: true}))}
                }
            case 'FILTER_PRICE_TO':
                if (action.payload){
                    return {...state, productsList: state.productsList.map(elem => {
                        if (elem.discont_price){
                            elem.show = !elem.show
                        }
                        return elem
                    }) }
                } else {
                    return {...state, productsList: state.productsList.map(elem => ({...elem, show: true}))}
                }

        default:
            return state
    } 
}

export const AddProductsAction = (payload) => ({type:'ADD_PRODUCTS' , payload})
export const sortProductsAction = (payload) => ({type: 'SORT_PRODUCTS', payload})
export const filterProductsAction = (payload) => ({type: 'FILTER_PRODUCTS', payload})
export const filterPriceFromAction = (payload) => ({type: 'FILTER_PRICE_FROM', payload})
export const filterPriceToAction = (payload) => ({type: 'FILTER_PRICE_TO', payload})

