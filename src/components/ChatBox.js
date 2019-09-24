import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    width: '15%'
  }
}));

export default function ChatBox({
  changeTextValue,
  sendChatAction,
  textValue,
  user,
  activeTopic
}) {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <TextField
        id="standard-name"
        label="Message"
        className={classes.chatBox}
        value={textValue}
        onChange={e => changeTextValue(e.target.value)}
      />
      <Button
        onClick={() => {
          sendChatAction({
            from: user,
            msg: textValue,
            topic: activeTopic
          });
          changeTextValue('');
        }}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Send
      </Button>
    </div>
  );
}
