const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    value: 1,
    age: 17
}
//reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
            break;

        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.value
            }
            break;

        default:
            return state;
            break;
    }
}
//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscribe
store.subscribe(() => {
    console.log('store changes ', store.getState())
});


//dispatching action
store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: "CHANGE_VALUE", value: 7 })
console.log(store.getState())