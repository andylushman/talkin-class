import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { CTX } from "../Store";
import ChatBox from "./ChatBox";
import TopicsWindow from "./TopicsWindow";
import ChatWindow from "./ChatWindow";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: "flex",
    alignItems: "center"
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  //CTX Store
  const { allChats, sendChatAction, user } = React.useContext(CTX);
  const topics = Object.keys(allChats);

  //Local State
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState("");

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" component="h4">
        Talkin' Class
      </Typography>

      <Typography variant="h5" component="h5">
        {activeTopic}
      </Typography>
      <div className={classes.flex}>
        <TopicsWindow
          topics={topics}
          changeActiveTopic={changeActiveTopic}
          allChats={allChats}
          activeTopic={activeTopic}
        />
        <ChatWindow allChats={allChats} activeTopic={activeTopic} />
      </div>
      <ChatBox
        className={classes.ChatBox}
        changeTextValue={changeTextValue}
        sendChatAction={sendChatAction}
        textValue={textValue}
        user={user}
        activeTopic={activeTopic}
      />
    </Paper>
  );
}
