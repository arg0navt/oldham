import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    page:{
        width:'calc(100% + 30px)',
        marginLeft:-15,
        paddingLeft:15,
        paddingRight:15,
        boxSizing:'border-box',
        overflow:'hidden'
    },
    item:{
        position:'relative',
        ':before':{
            background: 'rgba(255,255,255,.1)',
            position:'absolute',
            width:'100%',
            height:1,
            bottom:0,
            left:0,
            content:'""',
            display:'block'
        }
    }
})