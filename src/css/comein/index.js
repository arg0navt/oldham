import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    flexPosition:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        height:'calc(100vh - 60px)',
        minHeight:'438px',
        overflowY:'auto',
        position:'relative',
        width:'100%',
        top:0,
        left:0,
        paddingBottom:40,
        paddingTop:60
    },
    loginPage:{
        alignItems:'center',
    },
    comeinCenter:{
        width:'100%',
        display:'block',
        overflow:'hidden'
    },
    comeinText:{
        color:'#fff',
        textAlign:'center',
        fontSize:14,
        width:240,
        margin:'auto',
        marginBottom:25
    },
    comeinButtons:{
        width:'90%',
        margin:'auto'
    },
    button:{
        display:'block',
        width:'100%',
        height:50,
        borderRadius:7,
        textAlign:'center',
        lineHeight:'48px',
        border:'2px solid #d14638',
        color:'#fff',
        fontFamily: 'GothamPro-Bold',
        fontSize:14
    },
    comeinButtonLogin:{
        background:'#d14638'
    },
    comeinButtonRegistration:{
        marginTop:15,
        border:'2px solid #5d6063',
        marginBottom:60
    },
    formInput:{
        fontSize:14,
        width:250,
        display:'block',
        margin:'auto',
        background:'rgba(0,0,0,0)',
        border:0,
        borderBottom:'1px solid #fff',
        fontFamily: 'GothamPro-Medium',
        color:'#fff',
        marginBottom:20,
        marginTop:10,
        '::-webkit-input-placeholder':{
            color:'#fff',
        },
        ':-moz-placeholder':{
            color:'#fff',
        },
        '::-moz-placeholder':{
            color:'#fff',
        },
        ':-ms-input-placeholder':{
            color:'#fff',
        },
        ':focus':{
            outline:0
        }
    },
    buttonLogin:{
        background:'#d4483a',
        lineHeight:'inherit',
        width:'90%',
        margin:'auto',
        marginTop:40,
    },
    paswordLink:{
        display:'block',
        width:'100%',
        textAlign:'center',
        color:'#fff',
        fontSize:12,
        fontFamily: 'GothamPro-Medium',
        marginTop:20
    },
    form:{
        width:'100%',
        marginBottom:60
    },
    vk:{
        border:'2px solid #48729e',
        background:'url(img/icon/vk.png) no-repeat 20px #48729e',
        backgroundSize: '35px',
        color:'#fff',
        fontFamily: 'GothamPro-Bold',
        width:'90%',
        margin:'auto',
        marginBottom:15,
        textIndent: 20,
        lineHeight:'48px'
    },
    fb:{
        border:'2px solid #3b5998',
        background:'url(img/icon/fb.png) no-repeat 25px #3b5998',
        color:'#fff',
        backgroundSize: '18px',
        fontFamily: 'GothamPro-Bold',
        lineHeight:'inherit',
        width:'90%',
        margin:'auto',
        textIndent: 22
    },
    social:{
        width:'100%',
    },
    registrCenter:{
        minHeight:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    regInput:{
        height:35,
        width:'100%',
        marginBottom:30,
        ':active':{
            background:'rgba(0,0,0,0)'
        }
    },
    inputCod:{
        marginTop:50,
        marginBottom:10
    },
    formReg:{
        paddingLeft:15,
        paddingRight:15
    },
    buttonReg:{
        marginTop:20,
        width:'100%'
    },
    errorPopup:{
        width:250,
        height:100,
        background:'rgba(0,0,0,.7)',
        position:'fixed',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:10,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        boxSizing:'border-box',
        margin:'auto',
        borderRadius:10,
        textAlign:'center',
        transition:'.2s all linear',
        visibility: 'hidden',
        opacity: 0,
    },
    errorText:{
        color:'#fff',
        fontSize:14,
    },
    errorActive:{
        display:'block'
    }
})