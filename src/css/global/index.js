import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    img:{
        display:'block',
        width:'100%',
        height:'auto',
        ':nth-of-type(2)':{
            left:'30px'
        }
    },
    content:{
        paddingTop:'60px',
        paddingLeft:'15px',
        paddingRight:'15px',
        paddingBottom:'30px',
        overflow:'hidden',
        margin:'auto',
        width:'100%',
        minHeight:'100vh'
    },
    contentPadding:{
        paddingBottom:85,
    },
    newIt:{
        background:'#119229'
    },
    hitIt:{
        background:'#e80057'
    },
    it15:{
        background:'#e99821'
    },
    hot:{
        background:'#f20000'
    },
    uiNum:{
        width: 125,
        height: 30,
        display:'block',
        borderRadius:4,
        border:'1px solid #e64b3b',
        marginTop:15
    },
    minus:{
        width:31,
        height:28,
        background:`url(${process.env.PUBLIC_URL}/img/icon/minus.png) #e64b3b no-repeat center center`,
        textAlign:'center',
        color:'#ffffff',
        lineHeight:'28px',
        float:'left',
        backgroundSize:15
    },
    plus:{
        width:31,
        height:28,
        background:`url(${process.env.PUBLIC_URL}/img/icon/plus.png) #e64b3b no-repeat center center`,
        textAlign:'center',
        color:'#ffffff',
        lineHeight:'28px',
        float:'right',
        backgroundSize:14
    },
    input:{
        border:0,
        height:28,
        width:'calc(100% - 62px)',
        float:'left',
        background:'rgba(0,0,0,0)',
        textAlign:'center',
        color:'#ffffff',
        fontFamily: 'GothamPro-Medium',
        fontSize:14
    },
    addCart:{
        width:'100%',
        height:28,
        background:'#e64b3b',
        display:'block',
        border:0,
        fontSize:14,
        color:'#ffffff',
        fontFamily: 'GothamPro-Medium',
    },
})