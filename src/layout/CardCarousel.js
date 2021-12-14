import {makeStyles, Box } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme =>({
    slider_styles:{
        justifyContent: 'center',
        minWidth: '100%',
        overflow: 'hidden',
        transition: '0.3s ease all',
        position: 'relative',
        zIndex: '10'
    },
    img_styles:{
        width: '100%',
        verticalAlign: 'top'
    },
    text_styles:{
        background: 'rgba(0,0,0,0.5)',
        color: '#fff',
        width: '100%',
        padding: '10px 60px',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        fontSize: '20px',
        

        [theme.breakpoints.up('sm')]:{
            fontSize: '30px'
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: '50px'
        }

    }
}))

const CardCarousel = (props) => {
    const {slider_styles,img_styles,text_styles} = useStyles();
    
    return ( 
        <Box className={slider_styles}>
            <img src={props.imgSrc} className={img_styles} alt={props.alt}/>
            <div className={text_styles}>
                {props.description}
            </div>
        </Box>
     );
}
 
export default CardCarousel;