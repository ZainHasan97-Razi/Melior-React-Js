import * as types from "../types";

const initialState = {
    isLoading: false,
    progress: null
}

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_LOADING:
            return {
                ...state,
                isLoading: true,
                progress: action.payload
            };
        case types.END_LOADING:
            return {
                ...state,
                isLoading: false,
                progress: action.payload
            };
        case types.SET_BOOKING_DATA:
            return ({
                ...state
            })
        default:
            return state;
    }

}

export default bookingReducer;

