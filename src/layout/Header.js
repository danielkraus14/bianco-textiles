import {Link } from "react-router-dom";
import { AppBar, Box, Toolbar,Typography, IconButton, Grid } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    titleStyle: {
        fontFamily: 'Indie Flower, cursive',
        marginRight:'10px',
        margin: '10px 0'
    },
    linkStyle: {
        textDecoration: 'none',
        color: '#01579b',
        '&:hover':{
            color: '#039be5'
        },
        margin: '10px',
        padding: '5px'
    }
})

const Header = () => {

    const classes = useStyles();

    return ( 
        <Box sx={{flexGrow: 1}}>
           <Grid sx={12}>
            <AppBar position="static">
                    <Toolbar variant="dense">
                        <Grid container sx={3}>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.titleStyle} variant="h6" color="inherit" component="div">
                                Bianco Textiles
                            </Typography>
                        </Grid>
                        <Grid container sx={9} >
                            <Typography variant="h6" color="inherit" >
                                <Link className={classes.linkStyle} to='/products'>Productos</Link>
                            </Typography>
                            <Typography variant="h6" color="inherit" >
                                <Link className={classes.linkStyle} to='/about-us'>Nosotros</Link>
                            </Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Box>
     );
}
 
export default Header;