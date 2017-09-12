import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {css} from 'aphrodite/no-important';
import slider from '../../css/slider'


const SlideItem = ({img, text, id}) => (
    <div className={css(slider.slide)}>
        <Link to={`/share_detail?code=${id}`}>
            <div className={css(slider.blockImg)} style={{backgroundImage: 'url(' + img + ')'}}/>
        </Link>
        <div className={css(slider.blockText)}>
            <div>
                <Link to={`/share_detail?code=${id}`}><p className={css(slider.sliderText)}><span>{text}</span></p>
                </Link>
            </div>
            <div className={css(slider.rightBlock)}>
                <Link to='/shares' className={css(slider.sliderLink)}>Все акции</Link>
            </div>
        </div>
    </div>
);

class Slider extends Component {
    render() {
        const {actions} = this.props.Store;
        return (
            <div className={css(slider.sliderWrap)}>
                {Object.keys(actions).length ? (
                    <div>
                        {actions.map((item, index) => {
                            if (index === 0) {
                                return (<div key={index} className="item"><SlideItem
                                    img={`http://dev.kaerus.ru/uploads/${item.action_image_s}`} id={item.action_id}
                                    text={`${item.action_title}`}/></div>)
                            } else {
                                return null
                            }
                        })}
                    </div>
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Store: state
});

export default connect(mapStateToProps)(Slider);