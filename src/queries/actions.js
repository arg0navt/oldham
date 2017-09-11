import axios from 'axios';
import * as ActionType from '../config/ActionType';
import { API, storage } from '../config/url';

export const getActions = (dispatch) => {
    axios.get(API('Actions','get'))
        .then((response) => {
            if (!response.data[0].error) {
                if (localStorage.getItem(storage.actions) !== JSON.stringify(response.data[0].result)) {
                    dispatch({type: ActionType.PUSH_ACTIONS, payload: response.data[0].result});
                }
            }
        }).catch((error) => {
        console.log(error)
    })
};

export const getDetailActions = (dispatch, id) => {
    axios.get(API('Actions','get', `%22action_id%22:%22${id}%22`))
        .then((response) => {
            if (!response.data[0].error) {
                dispatch({type: ActionType.PUSH_DETAIL_ACTIONS, payload: response.data[0].result[0]});
            }
        }).catch((error) => {
        console.log(error)
    })
};