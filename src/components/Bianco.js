import React from 'react';
import Header from '../layout/Header';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Grid} from '@material-ui/core';
import SliderCarousel from '../layout/SliderCarousel'
import './Bianco.css'

const useStyles = makeStyles({
    title_style: {
        color: '#1565c0',
    },
    body_style:{
        background: '#e1f5fe'
    },
    main_styles:{
        maxWidth: '4000px',
        overflow: 'hidden',
        margin: '50px auto',
    }
})

const Bianco = () => {

    const {title_style, body_style,main_styles} = useStyles()

    return ( 
        <Grid container className={body_style}>
            <Grid container>
                <Header />
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8} className={main_styles}>
                    <Typography  variant='h1' className={title_style}>
                        Bianco Producciones Textiles
                    </Typography>
                    <SliderCarousel controls={true} autoplay={true} speed='500' interval='5000' />
                </Grid>
                
                <Grid item xs={false} sm={2} />
            </Grid>
        </Grid>
     );
}
 
export default Bianco;