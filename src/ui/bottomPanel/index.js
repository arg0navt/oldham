import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { css } from 'aphrodite/no-important';
import bottomPanel from '../../css/bottomPanel'

export default class Slider extends Component{
    render(){
        return(
            <div className={css(bottomPanel.bottomPanel)}>
                <Row>
                    <Col xs="8">
                        <p className={css(bottomPanel.sity)}>Санкт-Петербург</p>
                    </Col>
                    <Col xs="4">
                        <p className={css(bottomPanel.changeSity)}>Изменить</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
