import React, { Component } from 'react';
import axios from 'axios';
import * as ActionType from '../config/ActionType';
import { API, storage } from '../config/url';

export const getActions = (dispatch) => {
    axios.get(API('Actions','get'))
        .then((response) => {
            if (!response.data[0].error) {
                if (JSON.parse(localStorage.getItem(storage.actions)) !== response.data[0].result) {
                    dispatch({type: ActionType.PUSH_ACTIONS, payload: response.data[0].result});
                }
            }
        }).catch((error) => {
        console.log(error)
    })
};