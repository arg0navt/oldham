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
        background:'#f89a91',
        borderRadius:'8px',
        border:'2px solid #f89a91'
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
        background:'#e74b3b',
        borderRadius:'4px'
    },
    item:{
        position:'absolute',
        marginTop:'-12px',
        ':nth-of-type(2)':{
            left:'calc(33.3% - 8px)'
        },
        ':nth-of-type(3)':{
            left:'calc(66.6% - 8px)'
        },
        ':nth-of-type(4)':{
            left:'calc(100% - 16px)'
        }
    },
    circle:{
        width:'16px',
        height:'16px',
        borderRadius:'50%',
        background:'#e74b3b',
        border:'2px solid #f89a91'
    },
    num:{
        fontSize:'6px',
        position:'relative',
        marginTop:'-16px',
        color:'#ffe5e2',
        fontFamily:'GothamPro-Bold, sans-serif',
        width:'16px',
        height:'16px',
        lineHeight:'16px',
        textAlign:'center',
        zIndex:'3'
    },
    text:{
        fontSize:'10px',
        color:'#ffe5e2',
        lineHeight:'10px',
        marginTop:'4px',
        '@media (max-width: 350px)': {
            fontSize:'9px'
        }
    },
    active:{
        color:'#fff',
        fontFamily:'GothamPro-Bold, sans-serif',
    }
})