import axios from 'axios';
import * as actionTypes from './actionTypes';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('https://byte-me-backend.herokuapp.com/login/', 
        {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.user_id;
            const posts = res.data.posts;
            const userName  = res.data.username;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('posts', JSON.stringify(posts));
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    
    }
}

export const authSignup = (username, email, password1, password2, firstName, lastName) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('https://byte-me-backend.herokuapp.com/signup/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
            first_name: firstName,
            last_name: lastName
        })
        .then(res => {
            const token = res.data.user_id;
            console.log(res.data.user_id);
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
