import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { indigo } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@material-ui/core';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles({
  imgStyle:{
    height: 250,
    maxWidth:'100%',
    display: 'block',
    background: 'radial-gradient(#111 50%, #000 100%)',
    transform: 'scale(1.1)',
    transition: 'all 0.3s ease-out',
    '&:hover':{
      transform: 'scale(1) translateY(-20px)',
      opacity: '0.3'
    }
  },
  cardStyle:{
    marginTop: '10px',
    border: '2px solid #1769aa',
    transition: 'all 0.3s ease-out',
    '&:hover':{
      border: '0px',
      boxShadow: '0px 2px 4px #1769aa',
    }
  }
})

const ProductCard = (props)=> {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {avatarSrc, title, subheader, productDescription, imgSrc, productDetail} = props;

  const classes = useStyles();

  return (
    <Card className={classes.cardStyle} sx={{ maxWidth: 345, minWidth: 250}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: indigo[800] }} aria-label="bianco" src={avatarSrc}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        className={classes.imgStyle}
        component="img"
        height="194"
        image={imgSrc}
        alt="Product"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingCartIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripción:</Typography>
          <Typography paragraph>
            {productDetail}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProductCard;