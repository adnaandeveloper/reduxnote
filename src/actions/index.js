export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const addTen = (ten) => {
  return {
    type: 'ADDTEN',
    payload: ten,
  };
};

export const minTen = () => {
  return {
    type: 'MINTEN',
  };
};

export const mulTen = () => {
  return {
    type: 'MULTEN',
  };
};

export const login = () => {
  return {
    type: 'LOGGEDIN',
  };
};

export const logout = () => {
  return {
    type: 'LOGGEDOFF',
  };
};
