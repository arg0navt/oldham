import { StyleSheet } from 'aphrodite/no-important';
import { url } from '../../config/url'

export default StyleSheet.create({
    App:{
        minHeight:'100vh',
        overflow:'hidden',
        boxShadow: 'inset 20px 20px 80px rgba(0,0,0,.8)',
        background:`url(${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg) no-repeat center -60px`,
        backgroundAttachment: 'fixed',
        maxWidth:375,
        margin:'auto'
    },
    content:{
        position:'relative',
        zIndex:2,
        '@media screen and (min-width: 500px) , screen and (min-height: 750px)':{
            display:'block'
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