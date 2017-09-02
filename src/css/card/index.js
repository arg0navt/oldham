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
        paddingRight:'15px',
        paddingTop:'15px',
        '@media (max-width: 365px)': {
            paddingTop:'10px',
        }
    },
    cardLogo:{
        width:'38%',
        float:'left',
        height:60,
        '@media (max-width: 365px)': {
            width:'40%'
        }
    },
    cardLogoImg:{
        width:'62%',
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
        color:'#fff !important',
        fontFamily:'GothamPro-Bold, sans-serif',
        margin:'0',
        background: `url(${process.env.PUBLIC_URL}/img/icon/up.png) no-repeat right`,
        backgroundSize: '16px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        paddingRight:30,
        overflow:'hidden',
        '@media (max-width: 365px)': {
            fontSize:'11px'
        }
    },
    cardScore:{
        margin:'0',
        fontSize:'11px',
        color:'#fff',
        lineHeight:'1',
        '@media (max-width: 365px)': {
            fontSize:'8px'
        }
    },
    cardScoreActive:{
        fontSize:'16px',
        '@media (max-width: 365px)': {
            fontSize:'10px'
        }
    },
    cardBottom:{
        width:'calc(100% - 8px)',
        height:'65px',
        paddingLeft:'15px',
        paddingRight:'15px',
        position:'absolute',
        bottom:'18%',
        margin:'auto',
        left:0,
        right:0,
        '@media (max-width: 365px)': {
            height: '50px',
            bottom:'20%'
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
        '@media (max-width: 365px)': {
            fontSize:'10px'
        }
    },
    cardBottomNumAction:{
        fontSize:'32px',
        '@media (max-width: 365px)': {
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
        '@media (max-width: 365px)': {
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
        '@media (max-width: 365px)': {
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
        '@media (max-width: 365px)': {
            fontSize:'9px',
            width:'60px'
        }
    },
    cardProcent:{
        width:'70%',
        display:'block',
        margin:'auto',
    },
    procentSpan:{
        fontSize:35,
        color:'#fff',
        textAlign:'center',
        position:'absolute',
        width:'100%',
        lineHeight: '1.7',
        '@media (max-width: 365px)': {
            fontSize:24,
        },
    },
    procentText:{
        fontSize:10,
        color:'#fff',
        textAlign:'center',
        fontFamily:'GothamPro-Bold, sans-serif',
        '@media (max-width: 365px)': {
            fontSize:9,
            marginTop:15
        },
    },
    noUserText:{
        fontSize:10,
        color:'#fff',
        marginTop:4
    },
    noUserButton:{
        display:'block',
        border:'1px solid #fff',
        height:30,
        borderRadius: 5,
        width: 140,
        textAlign: 'center',
        fontSize: 10,
        color: '#fff',
        lineHeight: '27px',
        fontFamily: 'GothamPro-Bold, sans-serif'
    }
})