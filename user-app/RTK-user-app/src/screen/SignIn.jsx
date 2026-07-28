import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUserData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/user/getsingup"
      );

      // If your backend returns:
      // {
      //   status: true,
      //   data: [...]
      // }
      setUsers(res.data.data);

      // If your backend returns only an array,
      // replace the above line with:
      // setUsers(res.data);

    } catch (err) {
      console.log(err);
      alert("Failed to fetch users.");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleUserSignIn = (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      alert("Please enter Email and Password.");
      return;
    }

    const matchedUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (matchedUser) {
      alert("Login Successful");
      navigate("/users");
    } else {
      alert("Email or Password is incorrect.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">

      <h1 className="my-4">Sign In</h1>

      <form
        className="shadow d-flex flex-column p-4 rounded"
        style={{ width: "500px", height: "400px" }}
        onSubmit={handleUserSignIn}
      >
        {/* Email */}
        <div className="mb-3">
          <label
            htmlFor="inputEmail3"
            className="col-form-label"
          >
            Email
          </label>

          <input
            type="email"
            ref={emailRef}
            className="form-control"
            id="inputEmail3"
            placeholder="Enter Email"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label
            htmlFor="inputPassword3"
            className="col-form-label"
          >
            Password
          </label>

          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            id="inputPassword3"
            placeholder="Enter Password"
          />
        </div>

        {/* Checkbox */}
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheck1"
          />

          <label
            className="form-check-label mx-2"
            htmlFor="gridCheck1"
          >
            Remember Me
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="btn btn-primary"
        >
          Sign In
        </button>

        <p className="mt-3">
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}