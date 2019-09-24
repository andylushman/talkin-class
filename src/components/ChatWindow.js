import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left'
  },
  chatWindow: {
    padding: '20px'
  }
}));

export default function ChatWindow({ allChats, activeTopic }) {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <div className={classes.chatWindow}>
        {allChats[activeTopic].map((chat, i) => (
          <div className={classes.flex} style={{ marginTop: '10px' }} key={i}>
            <Chip label={chat.from} />
            <Typography
              variant="body1"
              component="p"
              style={{ marginLeft: '20px' }}
            >
              {chat.msg}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
