import React, { useState, useEffect } from "react";
import validation from "./validation";

const LoginForm = ({ submitForm }) => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [dataIscorrect, setDataIscorrect] = useState(false);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFor = (event) => {
    event.preventDefault();
    setError(validation(data));
    setDataIscorrect(true);
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && dataIscorrect) {
      submitForm(true);
    }
  }, [error]);

  return (
    <div className="container">
      <div className="child-container">
        <h2 className="title">Create Account</h2>
      </div>
      <form className="form-container">
        <div className="name">
          <label className="lable">Full Name</label>
          <input
            className="input"
            type="text"
            name="fullname"
            value={data.fullname}
            onChange={handleChange}
          />
          {error.fullname && <p>{error.fullname}</p>}
        </div>
        <div className="email">
          <label className="lable">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          {error.email && <p>{error.email}</p>}
        </div>

        <div className="password">
          <label className="lable">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div>
          <button className="submitbtn" onClick={handleFor}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
