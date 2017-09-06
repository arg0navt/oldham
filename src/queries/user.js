import axios from 'axios';
import * as ActionType from '../config/ActionType';
import { API, storage } from '../config/url';

export const getToken = (dispatch) => {
    axios.get(API('Auth', 'getTokenWithoutAuth'))
        .then((response) => {
            if (!response.data[0].error) {
                dispatch({type: ActionType.PUSH_TOKEN, payload: response.data[0].result.user_token});
            }
        }).catch((error) => {
            console.log(error)
        })
};

export const getLoyalty = (dispatch, token, callback) => {
    console.log('ss');
    axios.get(API('Loyalty', 'get', `%22token%22:%22${token}%22`))
        .then((response) => {
            if (JSON.parse(localStorage.getItem(storage.loyalty)) !== response.data[0].result){
                if (!response.data[0].error) {
                    dispatch({type: ActionType.PUSH_USER_LOYALTY, payload: response.data[0].result});
                } else {
                    dispatch({type: ActionType.PUSH_USER_LOYALTY, payload: {}});
                    if (callback) {
                        callback();
                    }
                }
            }
        }).catch((error) => {
            console.log(error)
        });
};
