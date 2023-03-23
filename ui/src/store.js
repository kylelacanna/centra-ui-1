import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
    showModal: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case Action.ShowModal:
            console.log("showing modal");
            return {
                ...state,
                showModal: true,
            };
        case Action.HideModal:
            console.log("hiding modal");
            return {
                ...state,
                showModal: false,
            };
        default:
            return state;
    }
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));