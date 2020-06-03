import actionTypes from '../actions/actionTypes';
const initialState = {
    cheifRequest: {},
    menu: {},
    cart: {
        total: 0,
        items: [],
        cartBarStatus: false
    },
    user: {}
};



export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_ITEM_TO_CART:
            const item = action.payload
            let cart = {
                ...state,
                cart: {
                    total: item.price + state.cart.total,
                }
            };
            let alreadyExits = state.cart.items.find(e => e.menu_item_id == item.menu_item_id);
            if (alreadyExits != undefined) {
                cart.cart['items'] = [...state.cart.items.filter(e => e.menu_item_id != item.menu_item_id), { ...alreadyExits, quantity: alreadyExits.quantity + 1, price: alreadyExits.price + item.price }]
            }
            else {
                cart.cart['items'] = [...state.cart.items, { ...item, quantity: 1 }]
            }
            return cart;
            break;

        case actionTypes.ADD_MENU:
            return {
                ...state,
                menu: { ...action.payload }
            }
            break;

        case actionTypes.ADD_TO_CHIEF_REQUEST:
            let { payload } = action;
            return {
                ...state,
                cheifRequest: {
                    ...state.cheifRequest,
                    ...action.payload
                }
            }
            break;

        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cart:{
                    total: 0,
                    items: [],
                    cartBarStatus: false
                }
            }
            break;

        default:
            return state;
    }
};

export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.error(error)
    }
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        return serializedState == null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}