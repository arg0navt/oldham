import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { css } from 'aphrodite/no-important';
import s from '../../css/shares'

const Item = ({data}) => (
    <div className={css(s.item)}>
        <Link to={`/share_detail?code=${data.action_id}`}><div className={css(s.itemPich)} style={{backgroundImage:`url(http://dev.kaerus.ru/uploads/${data.action_image_s})`}} /></Link>
        <div className={css(s.itemText)}>
            <div className={css(s.date)} />
            <div className={css(s.title)}>
                <Link to={`/share_detail?code=${data.action_id}`} className={css(s.titleLink)}>{data.action_title}</Link>
            </div>
        </div>
    </div>
);


class Shares extends Component {
    render(){
        const {actions} = this.props.Store;
        return(
            <div className={css(s.sharesList)}>
                {actions.map((item, index) => <Item key={index} data={item}/>)}
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