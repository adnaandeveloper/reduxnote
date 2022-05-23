const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGGEDIN':
      return (state = true);
    case 'LOGGEDOFF':
      return (state = false);

    default:
      return state;
  }
};

export default loggedReducer;
