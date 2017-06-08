import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    top:{
        width:'100%',
        overflow:'hidden',
        marginTop:-15
    },
    topItem:{
        width:'100%',
        overflow:'hidden',
        fontSize:15,
        color:'#fff'
    },
    span:{
        fontSize:11,
        color:'#fff',
        fontFamily: 'GothamPro-Bold',
        display:'block'
    },
    priceBlock:{
        width:'calc(100% + 30px)',
        marginLeft:-15,
        overflow:'hidden',
        height:50,
        background:'#e74b3b',
        marginTop:15
    },
    priceText:{
        margin:0,
        marginLeft:15,
        color:'#fff',
        fontFamily: 'GothamPro-Medium',
        lineHeight:'50px',
        fontSize:14
    },
    priceSpan:{
        float:'right',
        fontSize:21,
        marginRight:15
    },
    typeTitle:{
        color:'#ffffff',
        fontSize:14,
        fontFamily: 'GothamPro-Medium',
    },
    typeWr:{
        overflow:'hidden'
    },
    typeItem:{
        width:'50%',
        float:'left'
    },
    typeImg1:{
        width:27,
        height:40,
        display:'block',
        margin:'auto',
        background:`url(${process.env.PUBLIC_URL}/img/icon/delivery/type1.png) no-repeat center`,
        backgroundSize:'contain',
        marginTop:15
    },
    typeImg2:{
        width:33,
        height:40,
        display:'block',
        margin:'auto',
        background:`url(${process.env.PUBLIC_URL}/img/icon/delivery/type2.png) no-repeat center`,
        backgroundSize:'contain',
        marginTop:15
    },
    typeImg1Active:{
        background:`url(${process.env.PUBLIC_URL}/img/icon/delivery/type1_a.png) no-repeat center`,
    },
    typeImg2Active:{
        background:`url(${process.env.PUBLIC_URL}/img/icon/delivery/type2_a.png) no-repeat center`,
    },
    itemType:{
        fontSize:12,
        textAlign:'center',
        color:'#a2a2a2',
        fontFamily: 'GothamPro-Medium',
        width:80,
        margin:'auto',
        marginTop:10
    },
    itemTypeActive:{
        color:'#e74b3b'
    }
})