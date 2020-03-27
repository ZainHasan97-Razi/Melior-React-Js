import * as types from '../types';
import { base_url } from '../../utils/constants';

export const searchByState = (state_name) => dispatch => {
   
    dispatch({
        type: types.START_LOADING,
        payload: "Loading!... Please wait"
    })

    fetch(`${base_url}&city=APO&state=${state_name}&country_code=US&limit=200`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            dispatch({
                type: types.END_LOADING,
                payload: null
            })
            dispatch({ type: types.SEARCH_BY_STATE_SUCCESS, data });
        })
        .catch(error => {
            dispatch({
                type: types.END_LOADING,
                payload: null
            })
            dispatch({ type: types.SEARCH_BY_STATE_ERROR, error: error.message });
        })

}

export const searchByProviderCategoryAndCity = (city, taxonomy_description) => dispatch => {
    dispatch({
        type: types.START_LOADING,
        payload: "Loading!... Please wait"
    })

    fetch(`${base_url}&taxonomy_description=${taxonomy_description}&city=${city}&country_code=US&limit=200`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            dispatch({
                type: types.END_LOADING,
                payload: null
            })

            dispatch({ type: types.SEARCH_BY_CITY_SUCCESS, data });
        })
        .catch(error => {
            dispatch({
                type: types.END_LOADING,
                payload: null
            })
            dispatch({ type: types.SEARCH_BY_CITY_ERROR, error: error.message });
        })
}

export const updateFilterResult = (data) => dispatch => {
    dispatch({ type: types.UPDATE_FILTER_RESULT, data });
}