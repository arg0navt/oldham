import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { url, API } from '../../config/url'
import { css } from 'aphrodite/no-important';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import s from '../../css/shares'

const Item = ({data}) => (
    <div className={css(s.item)}>
        <Link to={`/share_detail?code=${data.action_id}`}><div className={css(s.itemPich)} style={{backgroundImage:`url(http://dev.kaerus.ru/uploads/${data.action_image_s})`}}></div></Link>
        <div className={css(s.itemText)}>
            <div className={css(s.date)}></div>
            <div className={css(s.title)}>
                <Link to={`/share_detail?code=${data.action_id}`} className={css(s.titleLink)}>{data.action_title}</Link>
            </div>
        </div>
    </div>
)


class Shares extends Component {
    constructor(props){
        super(props)
        this.state = {
            url:API('Actions','get')
        }
    }
    render(){
        return(
            <div className={css(s.sharesList)}>
                <Get url={this.state.url}>
                    {(error, response, isLoading) => {
                        if(error) {
                            return (<div>Something bad happened: {error.message}</div>)
                        }
                        else if(isLoading) {}
                        else if(response !== null) {
                            return (
                                <div>
                                    {response.data[0].result.map((item, index) => {
                                        return <Item key={index} data={item}/>
                                    })}
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
)(Shares)