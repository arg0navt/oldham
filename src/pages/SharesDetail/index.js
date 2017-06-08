import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { url, API } from '../../config/url'
import { css } from 'aphrodite/no-important';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import s from '../../css/shares'

class SharesDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            url:''
        }
    }
    componentDidMount(){
        const hash = this.props.Store.routing.locationBeforeTransitions.query.code
        if (hash != undefined) {
            this.setState({
                url:API('Actions','get', `%22action_id%22:%221%22`)
            })
        } else {
            browserHistory.push('/shares')
        }
    }
    render(){
        return(
            <div>
                <Get url={this.state.url}>
                    {(error, response, isLoading) => {
                        if(error) {
                            return (<div>Something bad happened: {error.message}</div>)
                        }
                        else if(isLoading) {}
                        else if(response !== null) {
                            const data = response.data[0].result[0]
                            return (
                                <div>
                                    <div className={css(s.detailPich)} style={{backgroundImage:`url(http://dev.kaerus.ru/uploads/${data.action_image_s})`}}></div>
                                    <div className={css(s.dataPanel)}>
                                        <p className={css(s.detailTitle)}>{data.action_title}</p>
                                    </div>
                                    <div className={css(s.detailText)}>
                                        <p className={css(s.p)}>Только с 11 по 20 августа. В нашем ресторане действует скидка на закуски. </p>
                                        <p className={css(s.p)}>Рекламный блок, безусловно, продуцирует медийный канал. Целевой трафик исключительно тормозит типичный рекламоноситель. Соц-дем характеристика аудитории слабо искажает эксклюзивный медиавес. </p>
                                    </div>
                                </div>
                            )
                        }
                        return (<div></div>)
                    }}
                </Get>
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(SharesDetail)