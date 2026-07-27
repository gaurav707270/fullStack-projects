import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../redux-store/features/AuthSlice.js";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(userData)

    dispatch(
      addUser(userData)
    );
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
      <h1 className="my-4">SignUp</h1>

      <form
        onSubmit={handleSubmit}
        className="shadow d-flex flex-column p-4 rounded"
        style={{ width: "500px", height: "350px" }}
      >
        <div className="mb-3">
          <label htmlFor="inputEmail3" className="form-label">
            Email
          </label>

          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="inputEmail3"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPassword3" className="form-label">
            Password
          </label>

          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="inputPassword3"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheck1"
          />
          <label className="form-check-label mx-2" htmlFor="gridCheck1">
            Checkbox
          </label>
        </div>

        <button
          type="submite"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}