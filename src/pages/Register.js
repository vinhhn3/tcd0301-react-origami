import React, { useContext, useState } from "react";
import OrigamiContext from "../context/origami/origamiContext";
const Register = () => {
  const origamiContext = useContext(OrigamiContext);
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });
  const [rePassword, setRePassword] = useState("");
  const { registerUser } = origamiContext;
  const onSubmit = (e) => {
    e.preventDefault();
    if (register.password !== rePassword) {
      alert("Password and Re-password don't match ...");
      return;
    }
    registerUser(register);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onRePassword = (e) => {
    setRePassword(e.target.value);
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="username"
            value={register.username}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={register.password}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Re-password</label>
          <input
            type="password"
            name="rePassword"
            value={rePassword}
            onChange={onRePassword}
          />
        </div>
        <div className="form-control">
          <button type="submit" onClick={onSubmit}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
