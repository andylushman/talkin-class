import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import { CTX } from '../Store';
import ChatBox from './ChatBox';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid gray'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    width: '15%'
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  //CTX Store
  const { allChats, sendChatAction, user } = React.useContext(CTX);
  const topics = Object.keys(allChats);

  //Local State
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState('');

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Talkin' Class
        </Typography>

        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map(topic => (
                <ListItem
                  onClick={e => changeActiveTopic(e.target.innerText)}
                  key={topic}
                  button
                >
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <Typography variant="body1" component="p" gutterBottom>
                  {chat.msg}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <ChatBox
          changeTextValue={changeTextValue}
          sendChatAction={sendChatAction}
          textValue={textValue}
          user={user}
          activeTopic={activeTopic}
        />
      </Paper>
    </div>
  );
}
