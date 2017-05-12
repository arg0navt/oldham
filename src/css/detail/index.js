import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    detailPage:{
        marginTop:-75
    },
    detailPich:{
        width:'calc(100% + 30px)',
        marginLeft:-15
    },
    detailImg:{
        display:'block',
        width:'100%',
        height:'auto'
    },
    detailText:{
        position:'relative',
        width:'100%',
        zIndex:1,
    },
    itemStatus:{
        width:29,
        height:29,
        borderRadius:29,
        fontSize:11,
        color:'#fff',
        lineHeight:'29px',
        textAlign:'center',
        fontFamily: 'GothamPro-Bold',
        float:'left',
        marginRight:10
    },
    imgIcon:{
        width:14,
        margin:'auto',
        height:14,
    },
    detailTextStatus:{
        width:'100%',
        overflow:'hidden',
        marginTop:-15
    },
    name:{
        fontFamily: 'GothamPro-Medium',
        fontSize:24,
        color:'#fff',
        marginTop:10,
        marginBottom:10
    },
    description:{
        color:'#ffffff',
        fontSize:13,
    },
    span:{
        fontSize:11,
        fontFamily: 'GothamPro-Bold',
        display:'block',
        marginBottom:10
    },
    list:{
        width:'100%',
        overflow:'hidden',
        paddingTop:15
    },
    listItem:{
        width:'100%',
        height:60,
        background:'#2c2c2c',
        overflow:'hidden',
        borderLeft:'3px solid #df4839',
        marginBottom:5
    },
    listItemLeft:{
        width:'60%',
        height:60,
        float:'left'
    },
    listItemRight:{
        width:'40%',
        height:60,
        float:'left'
    },
    param:{
        fontSize:11,
        color:'#ffffff',
        fontFamily: 'GothamPro-Medium',
        textAlign:'center',
        lineHeight:'1.3',
        height:60,
        paddingTop:13,
        float:'left',
        width:64
    },
    paramNum:{
        display:'block',
        fontSize:17
    },
    price:{
        fontSize:24,
        fontFamily: 'GothamPro-Medium',
        color:'#ffffff',
        float:'left',
        lineHeight:'60px',
        paddingLeft:15,
        paddingRight:15
    },
    addIngredient:{
        width:'100%',
        height:50,
        borderRadius:4,
        border:'1px solid #ffffff',
        marginTop:20,
        marginBottom:20
    },
    addIngredientText:{
        textAlign:'center',
        color:'#ffffff',
        fontFamily: 'GothamPro-Medium',
        fontSize:14,
        lineHeight:'48px',
        margin:0
    },
    addIngredientImg:{
        width:14,
        marginRight:15
    },
    recomendation:{
        marginLeft:-15,
        marginRight:-15
    },
    recomendationTitle:{
        width:'100%',
        height:30,
        background:'#2c2c2c',
        overflow:'hidden',
        lineHeight:'30px',
        paddingLeft:15,
        paddingRight:15,
        color:'#ffffff',
        fontSize:13
    }
})