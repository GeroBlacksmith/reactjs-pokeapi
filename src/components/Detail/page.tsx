import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop:20
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize:'contain'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const Page = ({detail,abilities}:any) => {
  const classes = useStyles();
  return (
    <>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        
        title={detail && detail!.name}
        
      />
      <CardMedia
        className={classes.media}
        image={detail && detail.sprites.front_default}
        title={detail && detail!.name}
      />
      <CardContent>
        <h2>Abilities:</h2>
        {detail && detail.abilities.map((ab:any, i:number)=>{
          return (
            <Typography variant="body2" color="textSecondary" component="p" key={i}>
              {ab.ability.name}
            </Typography>
          )
        })}
          
      </CardContent>
      
      
    </Card>
      
     
      
    </>
  );
}

export default Page;