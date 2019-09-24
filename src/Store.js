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
  const [allChats, dispatch] = React.useReducer(reducer, initialState);

  if (!socket) {
    socket = io(':3001');
    socket.on('chat message', msg => {
      console.log(msg);

      dispatch({ type: 'RECEIVE MESSAGE', payload: msg });
    });
  }
  const user = 'Andy' + Math.random(100).toFixed(2);

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  );
}
