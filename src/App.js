import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, addTen, decrement, login, logout } from './actions';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLoggin = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <h1>Redux</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}> plus</button>
      <button onClick={() => dispatch(addTen(10))}> AddTen</button>
      <button onClick={() => dispatch(decrement())}> min</button>
      {isLoggin ? (
        <h2> you are logged in brother !</h2>
      ) : (
        <h2> you are logged out brother</h2>
      )}
    </div>
  );
};

export default App;
