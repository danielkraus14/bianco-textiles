import React from 'react';
import Header from '../layout/Header';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Grid} from '@material-ui/core';
import SliderCarousel from '../layout/SliderCarousel'
import './Bianco.css';
import Categories from './Categories';

const useStyles = makeStyles(theme =>({
    title_style: {
        color: '#1565c0',
        [theme.breakpoints.up('xs')]:{
            fontSize: '20px'
        },
        [theme.breakpoints.up('sm')]:{
            fontSize: '30px'
        },
        [theme.breakpoints.up('md')]:{
            fontSize: '50px'
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: '80px'
        },
        [theme.breakpoints.up('xl')]:{
            fontSize: '120px'
        }
    },
    body_style:{
        background: '#e1f5fe'
    },
    main_styles:{
        maxWidth: '4000px',
        overflow: 'hidden',
        margin: '50px auto',
    }
}))

const Bianco = ({theme}) => {

    const {title_style, body_style,main_styles} = useStyles()

    return ( 
        <Grid container className={body_style}>
            <Grid container>
                <Header theme={theme}/>
            </Grid>
            <Grid item>
                
                <SliderCarousel controls={true} autoplay={true} speed='1500' interval='5000' />
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8} className={main_styles}>
                    <Categories />
                </Grid>
                <Grid item xs={false} sm={2} />
            
            </Grid>
        </Grid>
     );
}
 
export default Bianco;

                /*<Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8} className={main_styles}>
                    <Typography  variant='h1' className={title_style} align='center' >
                        Bianco Producciones Textiles
                    </Typography>
                </Grid>
                <Grid item xs={false} sm={2} />*/