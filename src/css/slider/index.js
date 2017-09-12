import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    sliderWrap:{
        marginRight:'-15px',
        marginLeft:'-15px',
    },
    slide:{
        overflow:'hidden',
        height:'173px',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        width:'calc(100% - 30px)',
        marginLeft:15,
        position:'relative'
    },
    blockImg:{
        borderRadius:'10px',
        width:'100%',
        height:'173px',
        zIndex:'2',
        backgroundSize:'cover'
    },
    blockText:{
        position:'relative',
        height:'45px',
        background:'rgba(0,0,0,.8)',
        width:'100%',
        zIndex:'2',
        marginTop:'-45px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    sliderText:{
        fontFamily:'GothamPro-Bold, sans-serif',
        fontSize:'12px',
        color:'#fff',
        width:'140px',
        height:45,
        paddingLeft:'17px',
        paddingRight:'17px',
        margin:0,
        display: 'flex',
		flexWrap: 'wrap',
		justifyContent:'start',
		flexDirection:'row',
		alignItems:'center',
        '@media (max-width: 350px)': {
            width:'100%',
            fontSize:'9px'
        }
    },
    sliderLink:{
        fontFamily:'GothamPro-Medium, sans-serif',
        color:'#fff',
        fontSize:'13px',
        marginRight:'15px',
        margin:'12px 15px 12px 0px',
        float:'right',
        paddingRight:'25px',
        background:`url(${process.env.PUBLIC_URL}/img/icon/up.png) no-repeat right`,
        backgroundSize:'16px',
        '@media (max-width: 350px)': {
            fontSize:'11px'
        }
    },
    rightBlock:{
        flex:1,
        maxWidth:'100%',
        '@media (max-width: 350px)': {
            maxWidth:'39%'
        }
    }
})