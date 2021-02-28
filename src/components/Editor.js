import React, { useState } from 'react';
import { TextareaAutosize, CardHeader, Card, Avatar, IconButton } from '@material-ui/core';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  editorNormal: {
    marginTop: '10px',
    marginBottom: '10px',
    boxShadow: '5px 5px 5px',
    width: '80%',
  },
  editorExpanded: {
    marginTop: '10px',
    marginBottom: '10px',
    boxShadow: '5px 5px 5px',
    width: '100%',
    height: '100vh',
    display:'flex',
    flexDirection: 'column',
  },
  editorAvatar: {
    color: 'black'
  },
  header: {
    backgroundColor: '#87ceeb',
  },
  close: {
    width: '100%',
    overflow: 'scroll !important',
    backgroundColor: '#f9f9f9',
    resize: 'vertical',
  },
  open: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    height: '100% !important',
    resize: 'vertical',
  },
  icon: {
    transform: 'rotate(45deg)',
  }
});

export default function Editor(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    const currentState = expanded;
    setExpanded(!currentState);
  }

  return (
      <Card variant='outlined' className={ expanded ? classes.editorExpanded : classes.editorNormal}>
        <CardHeader
          className={classes.header} 
          avatar={
            <Avatar className={classes.editorAvatar}>E</Avatar>
          }
          action={
            <IconButton onClick={toggleExpanded}>
              {expanded 
                ? <CloseIcon/>
                : <OpenWithIcon className={classes.icon}/> 
              }
            </IconButton>
          }
          title="EDITOR"
        />
        <TextareaAutosize 
          id="editor" 
          className={ expanded ? classes.open : classes.close}
          placeholder="Markdown Editor..." 
          onChange={(e) => props.updateText(e.target.value)}
          rowsMin={12}
          rowsMax={12}
          value={props.text}
        >
        </TextareaAutosize>
     </Card>
  )
}