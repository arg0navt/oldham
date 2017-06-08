import { StyleSheet } from 'aphrodite/no-important';
import { url } from '../../config/url'

export default StyleSheet.create({
    App:{
        minHeight:'100vh',
        overflow:'hidden',
        boxShadow: 'inset 20px 20px 80px rgba(0,0,0,.8)'
    },
    content:{
        position:'relative',
        zIndex:2,
        '@media screen and (min-width: 500px) , screen and (min-height: 750px)':{
            display:'none'
        }
    },
    landscape:{
        display:'none',
        '@media screen and (min-width: 500px) , screen and (min-height: 750px)':{
            display:'block',
            width:'100%',
            height:'100%',
            position:'fixed',
            top:0,
            left:0,
            zIndex:2
        }
    },
    landscapeText:{
        display:'none',
        '@media screen and (min-width: 500px) , screen and (min-height: 750px)':{
            display:'block',
            paddingLeft:30,
            paddingRight:30,
            textAlign:'center',
            color:'#ffffff',
            fontSize:16,
            position:'absolute',
            margin:'auto',
            top:0, bottom:0, left:0, right:0,
            height:40,
        }
    },
    Bg:{
        position:'fixed',
        width:'100%',
        height:'100%',
        background:`url(${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg) no-repeat center -10px`,
        backgroundSize:'calc(100% + 10px)',
        top:0,
        left:0,
        zIndex:1
    },
    Bg2:{
        position:'fixed',
        width:'100%',
        height:'100%',
        background:`url(${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg) no-repeat center -10px`,
        backgroundSize:'calc(100% + 10px)',
        bottom:0,
        left:0,
        zIndex:1
    }
})