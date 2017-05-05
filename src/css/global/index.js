import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    img:{
        display:'block',
        width:'100%',
        height:'auto',
        ':nth-of-type(2)':{
            left:'30px'
        }
    },
    content:{
        paddingTop:'75px',
        paddingLeft:'15px',
        paddingRight:'15px',
        overflow:'hidden',
        margin:'auto'
    }
})