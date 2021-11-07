import Login from "./Login";
import Home from "./Home";

const loggedIn = localStorage.getItem('loggedIn') === "true"
function App() {
  if (loggedIn) {
    return <Home></Home>;
  } else {
    return <Login></Login>;
  }
}

export default App;
