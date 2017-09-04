import React, { Component } from 'react';
import axios from 'axios';
import * as ActionType from '../config/ActionType';
import { API, storage } from '../config/url';

export const getCatalogCategoty = (dispatch) => {
    axios.get(API('Pwa','getCategories'))
        .then((response) => {
            if (!response.data[0].error) {
                if (localStorage.getItem(storage.categoryList) !== JSON.stringify(response.data[0].result)) {
                    dispatch({type: ActionType.PUSH_CATEGORY, payload: response.data[0].result});
                }
            }
        }).catch((error) => {
        console.log(error)
    })
};

export const getCatalogItems = (dispatch, id) => {
    axios.get(API('Pwa','getItems', `%22categoryId%22: ${id}`))
        .then((response) => {
            if (!response.data[0].error) {
                let findCategoryId = '';
                if (localStorage.getItem(storage.categoryItems)) {
                    findCategoryId = JSON.parse(localStorage.getItem(storage.categoryItems)).find((item) => {
                        return item.id === id;
                    });
                }
                if  (findCategoryId) {
                    if (JSON.stringify(findCategoryId.list) !== JSON.stringify(response.data[0].result)) {
                        dispatch({type: ActionType.PUSH_ITEMS, payload: {id: id, list: response.data[0].result}});
                    }
                } else {
                    dispatch({type: ActionType.PUSH_ITEMS, payload: {id: id, list: response.data[0].result}});
                }
            }
        }).catch((error) => {
        console.log(error)
    })
};