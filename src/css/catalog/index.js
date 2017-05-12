import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    itemCol:{
        flex:'0 50%',
        maxWidth:'50%',
        padding:'2.5px',
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
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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