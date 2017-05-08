import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    blockCard:{
        width:'100%',
        overflow:'hidden',
        paddingTop:'15px',
        position:'relative'
    },
    cardImg:{
        width:'100%',
        display:'block',
        height:'auto'
    },
    cardContent:{
        position:'absolute',
        zIndex:'1',
        width:'100%',
        height:'100%'
    },
    cardTop:{
        width:'100%',
        paddingLeft:'15px',
        paddingRight:'15px',
        paddingTop:'15px'
    },
    cardLogo:{
        width:'40%',
        float:'left',
    },
    cardLogoImg:{
        width:'60%',
        display:'block',
        margin:'auto',
    },
    cardlogoNum:{
        fontSize:'10px',
        color:'#fff',
        textTransform:'uppercase',
        textAlign:'center',
        fontFamily:'GothamPro-Bold, sans-serif',
        marginTop:'1em',
    },
    cardInfo:{
        width:'60%',
        float:'left',
    },
    cardName:{
        fontSize:'16px',
        color:'#fff',
        fontFamily:'GothamPro-Bold, sans-serif',
        margin:'0',
        background: 'url(/img/icon/up.png) no-repeat right',
        backgroundSize: '16px',
        '@media (max-width: 350px)': {
            fontSize:'14px'
        }
    },
    cardScore:{
        margin:'0',
        fontSize:'11px',
        color:'#fff',
        lineHeight:'1',
        '@media (max-width: 350px)': {
            fontSize:'9px'
        }
    },
    cardScoreActive:{
        fontSize:'16px',
        '@media (max-width: 350px)': {
            fontSize:'12px'
        }
    },
    cardBottom:{
        width:'100%',
        height:'65px',
        background:'#141414',
        paddingLeft:'15px',
        paddingRight:'15px',
        position:'absolute',
        bottom:'30px',
        '@media (max-width: 350px)': {
            height: '50px',
        }
    },
    cardBottomLeft:{
        width:'30%',
        float:'left'
    },
    cardBottomNum:{
        fontSize:'12px',
        color:'#fff',
        lineHeight:'1',
        '@media (max-width: 350px)': {
            fontSize:'10px'
        }
    },
    cardBottomNumAction:{
        fontSize:'32px',
        '@media (max-width: 350px)': {
            fontSize:'25px'
        }
    },
    cardBottomRight:{
        width:'70%',
        float:'left',
        paddingLeft:'15px'
    },
    cardButtonWrap:{
        width:'100%',
        height:'44px',
        border:'1px solid #fff',
        borderRadius:'4px',
        marginTop:'11px',
        '@media (max-width: 350px)': {
            height:'38px',
            marginTop:'6px'
        }
    },
    cardButton:{
        width:'50%',
        float:'left',
        height:'42px',
        fontSize:'8px',
        color:'#fff',
        textAlign:'center',
        lineHeight:'1',
        paddingTop:'5px',
        ':nth-of-type(1)':{
            borderRight:'1px solid #fff'
        },
        '@media (max-width: 350px)': {
            height:'37px',
            fontSize:'7px'
        }
    },
    cardButtonText:{
        fontSize:'11px',
        textAlign:'center',
        display:'block',
        width:'90px',
        margin:'auto',
        marginTop:'2px',
        fontFamily:'GothamPro-Bold, sans-serif',
        '@media (max-width: 350px)': {
            fontSize:'9px',
            width:'60px'
        }
    }
})