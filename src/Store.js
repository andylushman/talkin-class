import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initialState = {
  general: [
    { from: 'User1', msg: 'Anyone know of an education conference this week?' },
    { from: 'User2', msg: 'Yeah, I think there is one in Denver' }
  ],
  students: [
    { from: 'User1', msg: 'Where can I contact my coach?' },
    { from: 'User2', msg: 'You can find the number on the website' }
  ],
  schools: [
    { from: 'User1', msg: 'Seeing a lot of new students here on campus!' },
    { from: 'User2', msg: 'That is great!' }
  ],
  advisors: [
    { from: 'User1', msg: 'Enrollment is up this semester!' },
    { from: 'User2', msg: 'Awesome!' }
  ],
  companies: [
    {
      from: 'User1',
      msg:
        'We have 90% of our employees taking advantage of our educational benefits!'
    },
    { from: 'User2', msg: 'Nice! Hopefully we will hit 100% soon ;)' }
  ]
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case 'RECEIVE MESSAGE':
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };
    default:
      return state;
  }
}

let socket;

function sendChatAction(value) {
  socket.emit('chat message', value);
}
const user = 'User' + Math.round(Math.random() * 100);

export default function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initialState);

  if (!socket) {
    socket = io(':3001');
    socket.on('chat message', msg => {
      dispatch({ type: 'RECEIVE MESSAGE', payload: msg });
    });
  }

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  );
}
