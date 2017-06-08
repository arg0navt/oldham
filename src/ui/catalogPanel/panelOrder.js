import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import global from '../../css/global'
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import {Link} from 'react-router';
import _ from 'underscore'

class CatalogPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            url:'',
            length:0
        }
    }
    payment(){
        const form = {
            phone:this.props.phone,
            fio:this.props.fio,
            home:this.props.home,
            comment:this.props.comment,
            sity:this.props.sity,
            apartment:this.props.apartment,
            note:this.props.note,
            time:this.props.time,
            dr:this.props.dr
        }
        if (this.props.phone != ''){
            this.props.form(form)
            browserHistory.push('/payment')
        } else {
            if(this.props.phone == ''){
                document.getElementById('phone').classList.add('error')
            } else {
                document.getElementById('phone').classList.remove('error')
            }
        }
    }
    render(){
        return(
            <div>
                <div className={css(c.bottom)}>
                    <Link className={css(c.nextOrder)} onClick={this.payment.bind(this)}>Продолжить</Link>
                </div> 
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      form:(form) => {dispatch({type:'FORM', payload:form})}
  })
)(CatalogPanel)