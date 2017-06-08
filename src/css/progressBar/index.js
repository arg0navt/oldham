import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    wrap:{
        width:'90%',
        position:'relative',
        paddingTop:'10px'
    },
    line:{
        width:'100%',
        height:'8px',
        background:'rgba(255,255,255,.2)',
        borderRadius:'8px',
    },
    lineProgressWrap:{
        position:'absolute',
        width:'calc(100% - 4px)',
        top:'12px',
        left:'2px',
        height:'4px',
        zIndex:'2'
    },
    lineProgress:{
        height:'4px',
        borderRadius:'4px',
        float:'left'
    },
    lin:{
        height:'4px',
        background:'#e74b3b',
    },
    items:{
        width:'102%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    item:{
        marginTop:'-12px',
        opacity:'.6',
        ':last-child':{

        }
    },
    circle:{
        width:'18px',
        height:'18px',
        borderRadius:'50%',
        position:'relative',
        border:'2px solid rgba(255,255,255,.2)',
        ':after':{
            width:'100%',
            height:'100%',
            position:'absolute',
            background:'#e74b3b',
            content:'""',
            display:'block',
            borderRadius:'50%',
        }
    },
    num:{
        fontSize:'6px',
        position:'relative',
        marginTop:'-17px',
        color:'#ffe5e2',
        fontFamily:'GothamPro-Bold, sans-serif',
        width:'18px',
        height:'18px',
        lineHeight:'16px',
        textAlign:'center',
        zIndex:'3'
    },
    text:{
        fontSize:'10px',
        color:'#ffe5e2',
        lineHeight:'10px',
        marginTop:'4px',
        fontFamily:'GothamPro-Bold, sans-serif',
        position:'absolute',
        '@media (max-width: 350px)': {
            fontSize:'9px'
        }
    },
    active:{
        color:'#fff',
        fontFamily:'GothamPro-Bold, sans-serif',
        opacity:'1'
    }
})