import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    pich:{
        width:'calc(100% + 30px)',
        marginLeft:-15,
        marginTop:-75,
        height:'100vh',
        background:`url(${process.env.PUBLIC_URL}/img/picher/end.png) no-repeat center top`,
        backgroundSize:'contain',
        position:'relative'
    },
    text:{
        position:'absolute',
        bottom:40,
        width:'100%'
    },
    textP:{
        fontSize:14,
        color:'#ffffff',
        textAlign:'center',
        width:280,
        margin:'auto'
    },
    button:{
        width:'85%',
        display:'block',
        height:50,
        borderRadius:5,
        background:'#3a934f',
        lineHeight:'50px',
        color:'#ffffff',
        fontSize:16,
        fontFamily:'GothamPro-Bold',
        textAlign:'center',
        margin:'25px auto'
    }
})