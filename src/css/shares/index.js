import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    item:{
        display:'block',
        width:'100%',
        height:170,
        overflow:'hidden',
        position:'relative',
        borderRadius:10,
        marginBottom:15
    },
    itemPich:{
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        backgroundSize:'cover !important'
    },
    itemText:{
        width:'100%',
        height:45,
        position:'absolute',
        bottom:0,
        left:0,
        zIndex:2,
        background:'rgba(0,0,0,.7)',
        display: 'flex',
		flexWrap: 'wrap',
		justifyContent:'start',
		flexDirection:'row',
		alignItems:'center',
    },
    titleLink:{
        paddingLeft:17,
        paddingRight:17,
        fontFamily:'GothamPro-Medium, sans-serif',
        color:'#fff',
        fontSize:'13px',
        margin:0,
        lineHeight:1
    },
    detailPich:{
        width:'calc(100% + 30px)',
        marginLeft:-15,
        height:225,
        backgroundSize:'cover'
    },
    dataPanel:{
        background: 'url(../img/bottom.jpg) no-repeat center',
        width:'calc(100% + 30px)',
        marginLeft:-15,
        height:110,
        backgroundSize:'cover',
        display: 'flex',
		flexWrap: 'wrap',
		justifyContent:'start',
		flexDirection:'row',
		alignItems:'center',
    },
    detailTitle:{
        paddingLeft:30,
        color:'#fff',
        fontSize:24,
        width:'50%',
        lineHeight:1.2
    },
    detailText:{
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15,
        boxSizing:'border-box',
    },
    p:{
        color:'#fff',
        fontSize:14,
        marginBottom:20
    }
})