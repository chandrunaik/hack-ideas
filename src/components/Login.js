import Header from "./Header";
import LoginForm from "./LoginForm";
import wallpaper from "./../images/undraw_hacker_mindset_re_8a33.svg";

let stylea = {
  minHeight: "100vh",
};

function Login() {
  return (
    <div style={stylea} className="d-flex flex-column">
      <Header></Header>
      <div className="d-flex align-items-center flex-fill justify-content-center">
        <img src={wallpaper} alt="wallpaper" width="300" />
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Login;
