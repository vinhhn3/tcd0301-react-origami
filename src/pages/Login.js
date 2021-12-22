import React from "react";

const Login = () => {
  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
