import { useState } from "react";

function LoginForm() {
  const [employeeNumber, setEmployeeNumber] = useState("");

  const handleChange = (e) => {
    setEmployeeNumber(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault()
    if(e.target.checkValidity()){
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("username", employeeNumber);
      document.location.reload();
    }
  };

  return (
    <div className="LoginForm">
      <form className="flex flex-column" onSubmit={submitForm} id="loginForm">
        <label className="form-label mb-3">Login</label>
        <input
          type="text"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter employee number"
          maxLength={5}
          pattern="\d{5}"
          required
        ></input>
        <div className="d-grid">
          <button className="btn btn-primary">LOGIN</button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
