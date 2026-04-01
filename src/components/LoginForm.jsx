import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LoginForm() {
  const { initAuth } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    initAuth(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              name="username"
            />
          </div>

          <div>
            <h2>PASSWORD</h2>
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              name="password"
            />
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
