import * as types from '../types';
import firebase from '../../config/firebase';

const setBooking = (booking_data) => dispatch =>{
    dispatch({
        type: types.START_LOADING,
        payload: "Loading!... Please wait"
    });

    firebase
    .collection("bookings")
    .add({
        ...booking_data
    })
    .then((response) =>{
        dispatch({
            type: types.END_LOADING,
            payload: null
        });
        
        alert("Booking Successfull");

        dispatch({
            type: types.SET_BOOKING_DATA,
            payload: null
        })
    })
    .catch((error) =>{
        alert(error.message);
        dispatch({
            type: types.END_LOADING,
            payload: null
        });
    })
}