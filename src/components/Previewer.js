import { CardHeader, Card, Avatar, IconButton, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import marked from 'marked';
import parse from 'html-react-parser';

const useStyles = makeStyles({
  previewer: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '5px 5px 5px', 
    width: '100%',
    marginTop: '10px',
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
})

marked.setOptions({
  gfm: true,
  breaks: true,
})

export default function Previewer(props) {
  const classes = useStyles();
  
  return (
    <Card variant='outlined' className={classes.previewer}>
      <CardHeader 
        className={classes.header} 
        avatar={
          <Avatar className={classes.prevAvatar}>P</Avatar>
        }
        action={
          <IconButton onClick={props.toggleShow}>
            {props.show 
              ? <OpenWithIcon className={classes.icon}/> 
              : <CloseIcon />
            }
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