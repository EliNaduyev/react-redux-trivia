const typeReducer = (state = 'none', action) => {
  switch (action.type) {
    case 'TYPEOFGAME':
      return action.payload;
    default:
      return 'none';
  }
};

export default typeReducer;
