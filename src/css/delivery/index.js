import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    itemTextOne:{
        fontSize:21,
        color:'#ffffff',
        textAlign:'center',
        marginBottom:0,
        marginTop:5
    },
    itemTextTwo:{
        fontSize:11,
        color:'#ffffff',
        textAlign:'center',
        marginTop:4
    },
    itemBlock:{
        width:285,
        borderRadius:10,
        margin:'auto',
        background:`url(${process.env.PUBLIC_URL}/img/icon/delivery/map.png) #222222 no-repeat center`,
        marginTop:15
    },
    it:{
        borderBottom:'1px solid #383838',
        paddingBottom:15,
        ':last-child':{
            borderBottom:0
        }
    },
    itLeft:{
        width:'25%',
        display:'inline-block',
        verticalAlign: 'top'
    },
    itRight:{
        width:'75%',
        display:'inline-block'
    },
    itLeftImg:{
        width:26,
        display:'block',
        margin:'auto',
        marginTop:20
    },
    pOne:{
        fontSize:14,
        fontFamily:'GothamPro-Bold',
        color:'#ffffff',
        marginBottom:3
    },
    pTwo:{
        fontSize:11,
        color:'#ffffff',
        marginTop:0,
        paddingRight:15,
        marginBottom:0
    },
    fullBlock:{
        width:'calc(100% + 30px)',
        marginLeft:-15,
        height:73,
        background:`url(${process.env.PUBLIC_URL}/img/icon/delivery/map.png) #222222 no-repeat center`,
        marginTop:40,
        marginBottom:40
    },
    fullText:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:17,
        fontFamily:'GothamPro-Medium',
        lineHeight:'73px',
        margin:0,
        background:`url(${process.env.PUBLIC_URL}/img/icon/up.png) no-repeat center right 15px`,
        backgroundSize:16
    },
    fullTextImg:{
        width:16,
        marginRight:10
    },
    bottom:{
        width:'calc(100% + 30px)',
        marginLeft:-15,
        borderTop:'1px solid #e74b3b',
        marginTop:50
    },
    bottomTitle:{
        padding:'5px 20px',
        background:'#e74b3b',
        color:'#fff',
        fontSize:14,
        fontFamily:'GothamPro-Medium',
        display:'inline-block'
    },
    bottomWrap:{
        width:'100%',
        overflow:'hidden',
        paddingTop:20
    },
    bottomItem:{
        width:'50%',
        float:'left'
    },
    bottomItemImg:{
        display:'block',
        margin:'auto'
    },
    bottomItemPOne:{
        textAlign:'center',
        fontSize:14,
        color:'#e74b3b',
        fontFamily:'GothamPro-Medium',
    },
    bottomItemPich:{
        height:31
    },
    bottomItemPTwo:{
        fontSize:10,
        color:'#fff',
        textAlign:'center',
        width:140,
        margin:'auto'
    }
})