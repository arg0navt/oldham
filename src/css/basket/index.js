import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    basketPage:{
        marginLeft:-15,
        marginRight:-15,
        overflow:'hidden',
        marginTop:0
    },
    basketAvtorizations:{
        width:'100%',
        height:65,
        overflow:'hidden',
        paddingLeft:15,
        paddingRight:15,
        background:`url(${process.env.PUBLIC_URL}/img/icon/up.png) no-repeat center right 15px`,
        backgroundSize:16
    },
    avtorizationsText:{
        fontSize:16,
        color:'#e74b3b',
        fontFamily: 'GothamPro-Medium',
        marginTop:10
    },
    avtorizationSpan:{
        color:'#ffffff',
        fontSize:11,
        fontFamily: 'GothamPro-Bold',
        display:'block'
    },
    code:{
        width:'100%',
        height:70,
        paddingLeft:25,
        paddingRight:25,
        background:'rgba(44,44,44,.7)'
    },
    codeInput:{
        width:'100%',
        height:35,
        background:'rgba(0,0,0,0)',
        border:0,
        borderBottom:'1px solid #585b60',
        marginTop:15,
        fontSize:15,
        fontFamily: 'GothamPro-Medium',
    },
    items:{
        width:'100%',
    },
    item:{
        width:'100%',
        padding:15,
        overflow:'hidden',
        borderBottom:'1px solid #3e3e3e'
    },
    itemTop:{
        width:'100%',
        overflow:'hidden'
    },
    itemTopLeft:{
        width:'70%',
        float:'left',
        overflow:'hidden'
    },
    itemTopRight:{
        width:'30%',
        float:'left',
        overflow:'hidden'
    },
    type:{
        fontFamily: 'GothamPro-Bold',
        color:'#ffffff',
        fontSize:11,
        marginTop:0,
        marginBottom:0
    },
    name:{
        fontSize:15,
        color:'#ffffff',
        fontFamily: 'GothamPro-Medium',
        marginTop:5
    },
    uiNum:{
        width:'100%',
        marginTop:5
    },
    list:{
        width:'100%',
        overflow:'hidden'
    },
    listItem:{
        padding:'5px 15px',
        fontSize:12,
        color:'#ffffff',
        fontFamily: 'GothamPro-Medium',
        background:'rgba(44,44,44,.4)',
        float:'left',
        marginRight:5,
        borderRadius:5
    },
    summ:{
        fontSize:16,
        color:'#ffffff',
        textTransform:'uppercase',
        marginBottom:0
    },
    total:{
        width:'100%',
        paddingLeft:15,
        paddingRight:15,
        overflow:'hidden'
    },
    totalTextOne:{
        color:'#ffffff',
        fontSize:14,
        fontFamily: 'GothamPro-Medium',
        textAlign:'right',
        marginBottom:0
    },
    totalSpan:{
        fontSize:21,
    },
    totalTextTwo:{
        textAlign:'right',
        color:'#ffffff',
        fontSize:12,
        marginTop:0
    }
})