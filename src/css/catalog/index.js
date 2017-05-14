import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    itemCol:{
        width:'50%',
        float:'left',
        padding:'2.5px',
        position:'relative'
    },
    catalogRow:{
        marginLeft:'-2.5px',
        marginRight:'-2.5px',
    },
    itemBlock:{
        width:'100%',
        height:'120px',
        borderRadius:'5px',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    itemText:{
        position:'relative',
        zIndex:1
    },
    blockImage:{
        opacity:.3,
        position:'absolute',
        width:'calc(100% - 5px)'
    },
    catalogBlock:{
        paddingTop:'15px'
    },
    icon:{
        display: 'flex',
        height:'100%'
    },
    iconWrap:{
        margin:'auto'
    },
    iconImg:{
        display:'block',
        margin:'auto'
    },
    iconText:{
        color:'#fff',
        fontSize:'12px',
        margin:'0',
        minWidth:'63px',
        textAlign:'center',
        fontFamily:'GothamPro-Medium, sans-serif'
    }
})