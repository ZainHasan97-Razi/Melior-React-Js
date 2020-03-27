import firebase from '../../config/firebase';
import * as types from '../types';

export const signIn = (auth_data, history) => dispatch => {

    dispatch({
        type: types.START_LOADING,
        payload: "Loading!... Please wait"
    })

    firebase
        .auth()
        .signInWithEmailAndPassword(auth_data.email, auth_data.password)
        .then(response => {
            firebase
                .firestore()
                .collection('users')
                .doc(response.user.uid)
                .get()
                .then((doc) => {
                    dispatch({
                        type: types.END_LOADING,
                        payload: null
                    })
                    dispatch({
                        type: types.SET_USER_DATA_SUCCESS,
                        payload: doc.data()
                    });
                    history.push("/");
                })
        })
        .catch(error => {
            dispatch({
                type: types.END_LOADING,
                payload: null
            })
            dispatch({ type: types.SET_USER_DATA_ERROR, payload: null })
            alert(error.message)
        })
}


export const signUp = (auth_data, history) => dispatch => {

    dispatch({
        type: types.START_LOADING,
        payload: "Loading!... Please wait"
    })

    firebase
        .auth()
        .createUserWithEmailAndPassword(auth_data.email, auth_data.password)
        .then(response => {
            firebase
                .firestore()
                .collection('users')
                .doc(response.user.uid)
                .set({
                    email: auth_data.email,
                    name: auth_data.name,
                    uid: response.user.uid,
                    type: 'user'
                })
                .then(doc => {
                    dispatch({
                        type: types.END_LOADING,
                        payload: null
                    })
                    dispatch({ type: types.SET_USER_DATA_SUCCESS, payload: {
                        email: auth_data.email,
                        name: auth_data.name,
                        uid: response.user.uid,
                        type: 'user'
                    } });
                    history.push("/")
                })
        })
        .catch(error => {
            dispatch({
                type: types.END_LOADING,
                payload: null
            })

            dispatch({ type: types.SET_USER_DATA_ERROR, payload: null })
            alert(error.message);
        })

}

export const signOut = (history) => dispatch => {

    dispatch({
        type: types.START_LOADING,
        payload: "Loading!... Please wait"
    })

    firebase
        .auth()
        .signOut()
        .then(response => {
            dispatch({
                type: types.END_LOADING,
                payload: "Loading!... Please wait"
            })
            dispatch({ type: types.SET_USER_DATA_SUCCESS, payload: null });
            history.push("/")
        })
        .catch(error => {
            dispatch({
                type: types.END_LOADING,
                payload: null
            })
            dispatch({ type: types.SET_USER_DATA_ERROR });
        })
}


