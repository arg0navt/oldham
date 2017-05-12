import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    navWrap:{
        width:'100%',
        height:'100%',
        position:'fixed',
        top:0,
        left:"-100%",
        background:'rgba(0,0,0,.5)',
        zIndex:99,
        opacity:0,
        transition:'.2s opacity linear'
    },
    activeShadow:{
        opacity:1,
        left:0
    },
    navActive:{
        left:0,
    },
    nav:{
        position:'fixed',
        width:320,
        height:'100%',
        top:0,
        left:'-320px',
        background:'#181818',
        zIndex:110,
        boxShadow:'0px 5px 60px rgba(0,0,0,.7)',
        paddingLeft:15,
        paddingRight:15,
        transition:'.2s all linear'
    },
    ul:{
        padding:0
    },
    li:{
        listStyle:'none',
        paddingBottom:'1px',
        overflow:'hidden',
        marginBottom:21,
    },
    iconWrap:{
       float:'left',
       width:24,
       marginRight:20
    },
    icon:{
        display:'block',
        margin:'auto'
    },
    liText:{
        fontSize:14,
        color:'#ffffff',
        marginTop:0,
        marginBottom:0
    },
    navLogo:{
        width:70,
        display:'block',
        margin:'auto',
        position:'absolute',
        bottom:40,
        left:0,
        right:0
    }
})