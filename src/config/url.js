import React, { Component } from 'react';

export const url = {
    url:'http://dev.kaerus.ru/Pwa/getCategories.json',
    userId:'81dc9bdb52d04dc20036dbd8313ed055',
    STATIC_SERVER: 'http://dev.kaerus.ru',
    CLIENT_ID: '81dc9bdb52d04dc20036dbd8313ed055',
    PLATFORM: 6,
    apiIdVk: 6056998,
    appDomen: 'http://argonavtt-ru.1gb.ru/login'
}
export const API = (controll, method, token = '') => {
    if (token != ''){
        token = token + ','
    }
    return `http://dev.kaerus.ru/${controll}/${method}.json?commands=[{%22data%22:{${token}%22client_id%22:%22${url.CLIENT_ID}%22,%22platform%22:%22${url.PLATFORM}%22}}]`
}