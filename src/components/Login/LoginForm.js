import React, {useState} from 'react';

function LoginForm() {
  const [employeeNumber, setEmployeeNumber] = useState('');

  const handleChange = (e) => {
    setEmployeeNumber(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', employeeNumber);
      document.location.reload();
    }
  };

  return (
    <div className="LoginForm">
      <form className="flex flex-column" onSubmit={submitForm}>
        <label className="mb-3 hLoginLabel">LOGIN TO HACK IDEAS</label>
        <input
          type="text"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Enter employee number (ex: 12345)"
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
