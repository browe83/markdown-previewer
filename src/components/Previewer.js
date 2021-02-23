import React from 'react';
import { CardHeader, Card } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import marked from 'marked';
import parse from 'html-react-parser';

const useStyles = makeStyles({
  prevSytles: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '5px 5px 5px', 
    width: '100%',
    flex: '1',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  prevAvatar: {
    color: 'black',
  },
  header: {
    display: 'fixed',
    backgroundColor: '#87ceeb',
  },
  icon: {
    transform: 'rotate(45deg)',
  },
  content: {
    overflowY: 'scroll',
  }
});

marked.setOptions({
  gfm: true,
  breaks: true,
})

export default function Previewer(props) {
  const classes = useStyles();
  
  return (
    <Card variant='outlined' className={classes.prevSytles}>
      <CardHeader 
        className={classes.header} 
        avatar={
          <Avatar className={classes.prevAvatar}>P</Avatar>
        }
        action={
          <IconButton>
            <OpenWithIcon className={classes.icon}/>
          </IconButton>
        }
        title="PREVIEWER"
      />
      <CardContent className={classes.content}>
          <Typography id="preview" >
            {parse(marked(props.text))}
          </Typography>
      </CardContent>
    </Card>
  )
}