import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initialState = {
  general: [{ from: 'Andy', msg: 'hello' }, { from: 'Lushman', msg: 'hello' }],
  topic2: [{ from: 'Andy2', msg: 'hello' }, { from: 'Lushman2', msg: 'hello' }]
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

export default function Store(props) {
  if (!socket) {
    socket = io(':3001');
  }
  const user = 'Andy' + Math.random(100).toFixed(2);

  const [allChats] = React.useReducer(reducer, initialState);

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  );
}
