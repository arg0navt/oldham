import { StyleSheet } from 'aphrodite/no-important';
import { url } from '../../config/url'

export default StyleSheet.create({
    hide:{
        display:'none'
    },
    opacityHeader:{
        background:'rgba(0,0,0,0)',
        height:60,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        position:'fixed'
    },
    back:{
        height:39,
        width:39,
        float:'left',
    },
    backImg:{
        width:16,
        marginTop:3
    },
    header:{
        height:'60px',
        paddingTop:'15px',
        paddingLeft:'15px',
        paddingRight:'15px',
        position:'fixed',
        top:'0',
        left:'0',
        width:'100%',
        zIndex:'10',
        background:`url(${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg) no-repeat center -10px`,
        backgroundSize:'calc(100% + 10px)',
    },
    buttonNav:{
        width:'25px',
        height:'33px',
        display:'inline-block',
        background:`url(${process.env.PUBLIC_URL}/img/icon/nav.png) no-repeat left center`,
        backgroundSize: 'contain',
        cursor:'pointer'
    },
    logo:{
        width:'105px',
        height:'33px',
        margin:'auto',
        '*img':{
            width:'100%'
        }
    },
    buttonShop:{
        width:'26px',
        height:'33px',
        display:'inline-block',
        background:`url(${process.env.PUBLIC_URL}/img/icon/shop.png) no-repeat left center`,
        backgroundSize: 'contain',
        float:'right',
        position:'relative',
        cursor:'pointer'
    },
    numShop:{
        position:'absolute',
        width:'8px',
        height:'8px',
        borderRadius:'50%',
        border:'4px solid #111111',
        background:'#e74b3b',
        boxSizing:'content-box',
        right:'-8px',
        cursor:'pointer'
    }
})