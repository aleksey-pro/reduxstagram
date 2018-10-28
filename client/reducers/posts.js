// Принимаеи экшн и текушее состояние state

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 10 },
        ...state.slice(i + 1),
      ];
  }
  return state;
}

export default posts;
