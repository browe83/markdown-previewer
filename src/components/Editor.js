import React from 'react';
import { TextareaAutosize } from '@material-ui/core';
import { CardHeader, Card } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  editorSytles: {
    marginTop: '10px',
    marginBottom: '10px',
    boxShadow: '5px 5px 5px',
    width: '80%',
  },
  editorAvatar: {
    color: 'black'
  },
  header: {
    backgroundColor: '#87ceeb',
  },
  textArea: {
    width: '100%',
    overflow: 'scroll',
    backgroundColor: '#f9f9f9',
    resize: 'vertical',
  },
  icon: {
    transform: 'rotate(45deg)',
  }
});

export default function Editor(props) {
  const classes = useStyles();

  return (
      <Card variant='outlined' className={classes.editorSytles}>
        <CardHeader
          className={classes.header} 
          avatar={
            <Avatar className={classes.editorAvatar}>E</Avatar>
          }
          action={
            <IconButton>
              <OpenWithIcon className={classes.icon}/>
            </IconButton>
          }
          title="EDITOR"
        />
        <TextareaAutosize 
          id="editor" 
          className={classes.textArea}
          placeholder="Markdown Editor..." 
          onChange={(e) => props.updateText(e.target.value)}
          rowsMax={12}
          value={props.text}
          >
          </TextareaAutosize>
     </Card>
  )
}