import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button, { ButtonProps } from '@mui/material/Button';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Banner() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ShopNowButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#000000",
    '&:hover': {
      backgroundColor: "#000000",
    },
  }));

  return (
    <Card sx={{}}>
     
      <CardMedia
        component="img"
        width="100%"
        image="/img/hero-banner.png"
        alt="Paella dish"
      />
      <CardContent>
      <CardActions disableSpacing>
      <CardMedia
        component="img"
        sx={{
          width: "15vh",

        }}
        image ="/img/yellow-element.png"
        />
        <ShopNowButton  variant="contained">Shop now</ShopNowButton>
      </CardActions>
      </CardContent>
    </Card>
  );
}
