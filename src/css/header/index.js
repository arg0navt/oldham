import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    header:{
        height:'60px',
        paddingTop:'15px',
        background:'#111111',
        paddingLeft:'15px',
        paddingRight:'15px',
        position:'fixed',
        top:'0',
        left:'0',
        width:'100%',
        zIndex:'10'
    },
    buttonNav:{
        width:'25px',
        height:'33px',
        display:'inline-block',
        background:'url(/img/icon/nav.png) no-repeat left center',
        backgroundSize: 'contain',
        cursor:'pointer'
    },
    logo:{
        width:'45px',
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
        background:'url(/img/icon/shop.png) no-repeat left center',
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