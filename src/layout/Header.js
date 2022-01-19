import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import logo_blue from '../components/logo_blue.png';
import logo_white from '../components/logo_white.png';
import {styled} from '@mui/system';



function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme =>({
  iconButtonClasses:{
    color: 'inherit',
    transition: theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.complex
    }),

    "&:hover":{
      backgroundColor: "inherit" ,
      color: '#bbdefb',
      transform: 'scale(1.2)'
    }
  },
  page_tittle:{
    fontWeight: '900'
  },
  logoClasses:{
    height: '100px',
    width: '200px'
  }
}));

const CustomIconButton = styled('IconButton')(({theme})=>({
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: theme.spacing(1)
}))



const Header = props => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const menuItems = [
    {
      menuTittle: 'Home',
      pageURL: '/'
    },
    {
      menuTittle: 'Nosotros',
      pageURL: '/about-us'
    },
    {
      menuTittle: 'Productos',
      pageURL: '/products'
    },
    {
      menuTittle: 'Contacto',
      pageURL: '/contact'
    },
  ];
 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = () => {
    setAnchorEl(null);
  };

  const changeBackground = ()=>{
    if(window.scrollY >= 80){
      setActiveNav(true)
    }else{
      setActiveNav(false)
    };
  }

  window.addEventListener('scroll', changeBackground)

  const [activeNav,setActiveNav] = React.useState(false);
  
  return (
    <React.Fragment>
        <AppBar style={activeNav ? {backgroundColor:'#1976d2'} : {backgroundColor: 'transparent'}} >
          <Toolbar > 
            <div style={{flexGrow: '1'}}>
              <img src={activeNav ? logo_white : logo_blue} className={classes.logoClasses} alt='biancoLogo'/>
            </div>

              {isMobile ? (
                <React.Fragment>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={()=> handleMenuClick(null)}
                  >
                    {menuItems.map(menuItem => {
                  const {menuTittle,pageURL} = menuItem
                  console.log(menuTittle,pageURL);
                  return (
                    <MenuItem onClick={()=> handleMenuClick(pageURL)}>{menuTittle}</MenuItem>
                  )})}
                  </Menu>
                </React.Fragment>

              )
              :
              (
                <React.Fragment>
                  {menuItems.map(menuItem => {
                    return (
                      <IconButton
                        disableRipple
                        size='large'
                        className={classes.iconButtonClasses}
                        color={activeNav ? 'secondary' : 'primary'}
                        href={menuItem.pageURL}
                        sx={{
                          "&:hover": {
                            backgroundColor: "transparent"
                            }}}
                      >
                        <Typography variant='h5' sx={{fontWeight: 600}}>{menuItem.menuTittle}</Typography>
                      </IconButton>
                    )
                  })}
                </React.Fragment>
                
              )
            }
          </Toolbar>
        </AppBar>
      </React.Fragment>
  );
}

export default Header;

/*<Typography 
            className={classes.page_tittle}
            variant={isMobile ? 'h5' : 'h3'} 
            component="div" 
            sx={{ flexGrow: 1 }}
            color={activeNav ? 'inherit' : 'primary'}
          >
            Bianco Textiles
          </Typography>*/