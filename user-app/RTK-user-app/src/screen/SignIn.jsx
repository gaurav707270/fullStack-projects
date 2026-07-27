import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";


export default function SignIn() {

  const navigate = useNavigate()
  // const { user } = useSelector((state) => state.auth)
  const emailRef = useRef("")
  const passwordRef = useRef("")

  let users = []

  const fetchUserData = async () => {
    const res = await axios.get("http://localhost:3000/users")
    users = res.data
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const handleUserSignIn = () => {
    
    const matchedUser = users.find(
      (user) =>
        user.email === emailRef.current.value &&
        user.password === passwordRef.current.value
    );

    if (matchedUser) {
      navigate("/users");
    } else {
      alert("Email or password is wrong!");
    }
  };


  return (
    <div className='container d-flex justify-content-center align-items-center vh-100 flex-column'>
      <h1 className='my-4'> SingIn</h1>

      <form className='shadow d-flex flex-column p-4 rounded ' style={{ width: "500px", height: "400px" }}>
        <div className=" mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="">
            <input type="email" ref={emailRef} className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className=" mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="">
            <input type="password" ref={passwordRef} className="form-control" id="inputPassword3" />
          </div>
        </div>

        <div className=" mb-3">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label mx-2" htmlFor="gridCheck1">
            checkbox
          </label>
        </div>
        <button type="submit" onClick={() => {
          handleUserSignIn()
        }} className="btn btn-primary">
          SignUp
        </button>

        <p className='mt-3'>
          Dont have an account? <Link to={"/signup"}>Signup</Link>
        </p>

      </form>



    </div>
  )
}
