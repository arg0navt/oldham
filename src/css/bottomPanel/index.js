import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    bottomPanel:{
        width:'100%',
        height:'44px',
        position:'fixed',
        bottom:'0',
        left:'0',
        background:'#0d0d0d',
        paddingLeft:'15px',
        paddingRight:'15px'
    },
    sity:{
        fontSize:'14px',
        color:'#fff',
        paddingLeft:'25px',
        background:'url(/img/icon/sity.png) no-repeat center left / 16px',
        margin:'0',
        lineHeight:'44px'
    },
    changeSity:{
        lineHeight:'44px',
        textAlign:'right',
        color:'#e74b3b',
        fontFamily:'GothamPro-Medium, sans-serif',
        fontSize:'13px',
        margin:'0'
    }
})