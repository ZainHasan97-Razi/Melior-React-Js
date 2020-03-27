import * as types from "../types";

const initialState = {
    data: [],
    searchByStateError: null,
    isLoading: false,
    progress: null
}

const searchReducer = (state = initialState, action) => {
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
        case types.SEARCH_BY_STATE_SUCCESS:
            return ({
                ...state,
                data: action.data,
                searchByStateError: null
            })
        case types.SEARCH_BY_STATE_ERROR:
            return ({
                ...state,
                data: [],
                searchByStateError: action.error,
            })
        case types.SEARCH_BY_CITY_SUCCESS:
            return ({
                ...state,
                data: action.data,
                searchByCityError: null
            })
        case types.SEARCH_BY_CITY_ERROR:
            return ({
                ...state,
                data: [],
                searchByCityError: action.error
            })
        case types.UPDATE_FILTER_RESULT:
            return ({
                ...state,
                data: action.data,
                error: null
            })
        default:
            return state;
    }

}

export default searchReducer;

