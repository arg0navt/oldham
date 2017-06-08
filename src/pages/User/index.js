import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import cookie from 'react-cookies'
import u from '../../css/user'

class User extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className={css(u.page)}>
                {Object.keys(this.props.Store.user).length != 0 ? (
                    <div className={css(u.item)}>
                        <div className={css(u.itemTop)}>
                            <p className={css(u.itemName, u.icon_1)}>Профиль</p>
                            <Link className={css(u.itemLink)}>Редактировать</Link>
                        </div>
                        <div className={css(u.data)}>
                            <p className={css(u.name)}></p>
                            <p className={css(u.address)}></p>
                        </div>
                        <Link className={css(u.tools)}>Настройки профиля</Link>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(User)