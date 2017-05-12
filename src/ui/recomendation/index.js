import React, { Component } from 'react';
import detail from '../../css/detail'
import { css } from 'aphrodite/no-important';
import { Item } from '../item'

export const Recomendation = () => (
    <div className={css(detail.recomendation)}>
        <p className={css(detail.recomendationTitle)}>С этим блюдом рекомендуем</p>
        <Item/>
        <Item/>
        <Item/>
    </div>
)