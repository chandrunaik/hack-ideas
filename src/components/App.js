import Login from "./Login";
import Home from "./Home";

const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

function App() {
  if (loggedIn) {
    return <Home></Home>;
  } else {
    return <Login></Login>;
  }
}

export default App;
