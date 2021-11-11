import Home from './Home/Home';
import Login from './Login/Login';

import React from 'react';

const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

function App() {
  if (loggedIn) {
    return <Home></Home>;
  } else {
    return <Login></Login>;
  }
}

export default App;
