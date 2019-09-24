import React from 'react';

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

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initialState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
