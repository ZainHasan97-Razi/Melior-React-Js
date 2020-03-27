import * as types from '../types';

const initialState = {
    isLoading: false,
    errorMessage: null,
    user: null
}

const authReducer = (state = initialState, action) => {

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

        case types.SET_USER_DATA_SUCCESS:
            return {
                ...state,
                user: action.payload,
                errorMessage: null
            };
        case types.SET_USER_DATA_SUCCESS:
            return {
                ...state,
                user: null,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}


export default authReducer;


