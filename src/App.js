import './App.css';
import Editor from './components/Editor.js';
import Previewer from './components/Previewer.js';
import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column', 
    alignItems: 'center',
  }
});

const initialText = '# h1\r## h2\n[GitHub](http://github.com)\n\n`const name = "Brandon"`\n\n```\nconst foo = "bar"\nconsole.log(foo) // output: bar\n\n```\n**bold**\n\n> Block Quotes!\n\n![cat image](https://placekitten.com/g/200/300)\n\n- list item\n- list item\n- list item'

function App() {
  const [text, setText] = useState(initialText);
  const classes = useStyles();

  const updateText = (text) => {
    setText(text);
  }

  return (
    <Container className={classes.container}>
        <Editor text={text} updateText={updateText}/>
        <Previewer text={text}/>
    </Container>
  );
}

export default App;
