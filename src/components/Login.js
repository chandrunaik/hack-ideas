import Header from "./Header";
import LoginForm from "./LoginForm";
import wallpaper from "./../images/undraw_programming_-2-svr.svg";


function Login() {
  return (
    <div className="d-flex flex-column flex-fill login">
      <Header></Header>
      <div className="d-flex align-items-center flex-fill justify-content-center">
        <img src={wallpaper} alt="wallpaper" width="500" />
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Login;
