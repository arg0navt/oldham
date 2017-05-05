import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    sliderWrap:{
        marginRight:'-15px',
        marginLeft:'-15px',
    },
    slide:{
        overflow:'hidden',
        height:'173px',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        paddingRight:'15px',
        paddingLeft:'15px',
        margin:'auto',
        position:'relative'
    },
    blockImg:{
        borderRadius:'10px',
        width:'100%',
        height:'173px',
        zIndex:'2'
    },
    blockText:{
        position:'relative',
        height:'70px',
        background:'rgba(0,0,0,.8)',
        width:'100%',
        zIndex:'2',
        marginTop:'-70px'
    },
    sliderText:{
        fontFamily:'GothamPro-Bold, sans-serif',
        fontSize:'12px',
        color:'#fff',
        width:'140px',
        margin:'17px 15px 17px'
    },
    sliderLink:{
        fontFamily:'GothamPro-Medium, sans-serif',
        color:'#fff',
        fontSize:'13px',
        marginRight:'15px',
        margin:'24px 15px 24px 0px',
        float:'right',
        paddingRight:'25px',
        background:'url(/img/icon/up.png) no-repeat right',
        backgroundSize:'16px'
    }
})