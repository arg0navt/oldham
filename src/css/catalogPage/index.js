import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    tabBlock:{
        width:'100%',
        height:46,
        background:'#111111',
        overflow:'hidden',
        position:'fixed',
        top:60,
        left:0,
        boxShadow:'40px 0 141px rgba(0,0,0,.75)',
        zIndex:10
    },
    tabItem:{
        whiteSpace: "nowrap",
        transition:'.2s all linear',
    },
    category:{
        paddingTop:30,
        whiteSpace: "nowrap",
        transition:'.2s all linear'
    },
    categoryItem:{
        marginLeft:-15,
        marginRight:15,
        display:'inline-block'
    },
    item:{
        width:'100%',
        padding:15,
        marginLeft:-15,
        borderBottom:'1px solid #3e3e3e',
    },
    itemPich:{
        width:85,
        display:'inline-block',
        verticalAlign: 'top',
        position:'relative'
    },
    itemText:{
        display:'inline-block',
        width:'calc(100% - 90px)',
        paddingLeft:15
    },
    itemImgWr:{
        width:'100%',
        height:85,
        overflow:'hidden',
        position:'relative'
    },
    img:{
        display:'block',
        height:'100%',
        width:'auto'
    },
    name:{
        fontSize:16,
        color:'#ffffff',
        fontFamily: 'GothamPro-Medium',
        marginTop:0,
        marginBottom:5,
        whiteSpace:'nowrap',
        lineHeight:'16px',
        textOverflow: 'ellipsis',
        width:'100%',
        overflow: 'hidden'
    },
    descroption:{
        fontSize:12,
        color:'#ffffff',
        marginTop:0,
        height: '35px',
        whiteSpace:'initial',
        overflow: 'hidden'
    },
    num:{
        width:81,
        height:24,
        background:'#d34536',
        borderRadius:5,
        fontSize:25,
        textAlign:'center',
        color:'#ffffff',
        lineHeight:'24px',
        float:'right'
    },
    plus:{
        width:25,
        float:'right',
        height:24,
        borderLeft:'1px solid #a32c1e'
    },
    price:{
        width:56,
        float:'left',
        height:24,
        textAlign:'center',
        color:'#ffffff',
        fontSize:15,
        fontFamily: 'GothamPro-Medium',
        lineHeight:'24px'
    },
    statusItem:{
        width:23,
        height:23,
        borderRadius:23,
        fontSize:9,
        color:'#ffffff',
        lineHeight:'23px',
        textAlign:'center',
        marginBottom:3
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
    statusWr:{
        position:'absolute',
        top:0,
        left:-12,
        zIndex:1
    },
    bottom:{
        width:'100%',
        height:63,
        overflow:'hidden',
        background:'url(/img/bottom.jpg) no-repeat center',
        position:'fixed',
        bottom:0,
        left:0,
        zIndex:100,
        backgroundSize:'cover',
    },
    bottomItem:{
        width:'33.3%',
        float:'left',
        paddingLeft:15,
        paddingRight:15,
        marginTop:11
    },
    bottomTextOne:{
        color:'#ffffff',
        fontSize:11,
        marginTop:0,
        marginBottom:0,
        fontFamily: 'GothamPro-Medium',
    },
    bottomTextTwo:{
        color:'#ffffff',
        fontSize:11,
        marginTop:0,
        marginBottom:0,
        lineHeight:'21px'
    },
    bottomTextTwoSpan:{
        fontSize:21,
        fontFamily: 'GothamPro-Bold'
    },
    iconKorz:{
        paddingLeft:40,
        background:'url(/img/icon/korz.png) no-repeat 10px center',
        backgroundSize:23,
    },
    iconUp:{
        background:'url(/img/icon/up.png) no-repeat 100px center',
        backgroundSize:16,
    },
    border:{
        borderLeft:'1px solid #ab2e20',
        borderRight:'1px solid #ab2e20'
    },
    numItem:{
        display:'none',
        marginTop:0,
        height:24,
        width:81,
        float:'right'
    },
    minus:{
        width:24,
        height:22
    },
    plus:{
        width:24,
        height:22
    },
    input:{
        width:'calc(100% - 48px)',
        height:22
    },
    width:{
        float:'left',
        width:113,
        height:24,
        overflow:'hidden',
        border:'1px solid #e74b3b',
        borderRadius:5
    },
    widthItem:{
        width:'50%',
        height:22,
        float:'left',
        overflow:'hidden',
        fontSize:13,
        textAlign:'center',
        color:'#ffffff',
        lineHeight:'24px',
        fontFamily: 'GothamPro-Medium',
    },
    widthItemActive:{
        background:'#dc4738',
        borderRadius:4
    }
})