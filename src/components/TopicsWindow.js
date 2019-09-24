import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(() => ({
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    borderRight: '1px solid gray'
  }
}));

export default function TopicsWindow({ topics, changeActiveTopic }) {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
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
      </div>
    </div>
  );
}
