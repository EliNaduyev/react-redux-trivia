const nameReducer = (state = 'none', action) => {
  switch (action.type) {
    case 'NICKNAME':
      return action.payload;
    default:
      return 'none';
  }
};

export default nameReducer;
