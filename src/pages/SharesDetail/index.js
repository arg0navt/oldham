import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import { browserHistory } from 'react-router';
import { getDetailActions } from '../../queries/actions';
import s from '../../css/shares'

class SharesDetail extends Component {
    componentDidMount(){
        const hash = this.props.Store.routing.locationBeforeTransitions.query.code
        if (hash) {
            this.props.pushGetDetailActions(hash);
        } else {
            browserHistory.push('/shares')
        }
    }
    render(){
        const {actionsDetail} = this.props.Store;
        return(
            <div>
                {Object.keys(actionsDetail).length ? (
                    <div>
                        <div className={css(s.detailPich)} style={{backgroundImage:`url(http://dev.kaerus.ru/uploads/${actionsDetail.action_image_s})`}}></div>
                        <div className={css(s.dataPanel)}>
                            <p className={css(s.detailTitle)}>{actionsDetail.action_title}</p>
                        </div>
                        <div className={css(s.detailText)}>
                            <p className={css(s.p)}>Только с 11 по 20 августа. В нашем ресторане действует скидка на закуски. </p>
                            <p className={css(s.p)}>Рекламный блок, безусловно, продуцирует медийный канал. Целевой трафик исключительно тормозит типичный рекламоноситель. Соц-дем характеристика аудитории слабо искажает эксклюзивный медиавес. </p>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      pushGetDetailActions: (id) => {
          getDetailActions(dispatch, id);
      }
  })
)(SharesDetail)