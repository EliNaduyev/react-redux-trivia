export const nickname = (name) => {
  return {
    type: 'NICKNAME',
    payload: name,
  };
};

export const typeOfGame = (name) => {
  return {
    type: 'TYPEOFGAME',
    payload: name,
  };
};
