import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Users() {
  const [allUser, setAllUser] = useState([]);

  // fetching data
  const fetchUserData = async () => {
    const res = await axios.get("http://localhost:3000/allUserData");
    setAllUser(res.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // create new user variable
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);

  // post new user data
  const postNewUserData = async (newUser) => {
    await axios.post("http://localhost:3000/allUserData", newUser);

    fetchUserData();

    userEmailRef.current.value = "";
    userPasswordRef.current.value = "";
  };

  // submit function
  const handleSubmite = () => {
    const newUser = {
      email: userEmailRef.current.value,
      password: userPasswordRef.current.value,
    };

    postNewUserData(newUser);
  };

  // remove user function
  const removeUser = (user) => {
    deleteUserData(user.id);
  };

  const deleteUserData = async (id) => {
    await axios.delete(`http://localhost:3000/allUserData/${id}`);
    fetchUserData();
  };

  // update user data function

  const [editId, setEditId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const editUser = (user) => {
    setEditId(user.id);
    setIsUpdate(true);

    userEmailRef.current.value = user.email;
    userPasswordRef.current.value = user.password;
  };

  const putUserData = async () => {
    const updatedUser = {
      email: userEmailRef.current.value,
      password: userPasswordRef.current.value,
    };

    await axios.put(
      `http://localhost:3000/allUserData/${editId}`,
      updatedUser
    );

    fetchUserData();

    setEditId(null);
    setIsUpdate(false);

    userEmailRef.current.value = "";
    userPasswordRef.current.value = "";
  };

  return (
    <div className="container">
      <div className="container d-flex justify-content-center mt-3">
        <div
          className="card shadow-lg border-0 rounded-4 p-4"
          style={{ maxWidth: "880px", width: "100%" }}
        >
          <h2 className="text-center fw-bold text-primary">
            {isUpdate ? "Update User" : "Add New User"}
          </h2>

          <form>
            <div className=" g-4 d-flex  ">
              {/* Email */}
              <div className="col-md-5">
                <label className="form-label fw-semibold">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Email
                </label>

                <input
                  style={{
                    width: "290px"
                  }}
                  ref={userEmailRef}
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email"
                />
              </div>

              {/* Password */}
              <div className="col-md-5">
                <label className="form-label fw-semibold">
                  <i className="bi bi-lock-fill me-2"></i>
                  Password
                </label>

                <input
                  style={{
                    width: "290px"
                  }}
                  ref={userPasswordRef}
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
                />
              </div>

              {/* Button */}
              <div style={{ width: "180px" }} className=" d-flex mt-3" >
                {isUpdate ? (
                  <button
                    style={{ height: "40px" }}
                    type="button"
                    className="btn btn-warning mt-3"
                    onClick={putUserData}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    style={{ height: "40px" }}
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={handleSubmite}
                  >
                    Add User
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container mt-3">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h3 className="mb-0">👥 All Users</h3>

            <span className="badge bg-primary fs-6">
              Total Users: {allUser.length}
            </span>
          </div>

          <div
            className="card-body overflow-auto"
            style={{ maxHeight: "500px" }}
          >
            {allUser.length === 0 ? (
              <div className="text-center py-5">
                <h5 className="text-muted">No Users Found 😔</h5>
              </div>
            ) : (
              allUser.map((user) => (
                <div
                  key={user.id}
                  className="card shadow-sm border-0 rounded-3 mb-3"
                >
                  <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          fontSize: "24px",
                          fontWeight: "bold",
                        }}
                      >
                        {user.email.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h5 className="mb-1">{user.email}</h5>

                        <p className="text-muted mb-0">
                          🔒 {user.password}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 mt-md-0">
                      <button
                        className="btn btn-warning mx-2"
                        onClick={() => editUser(user)}
                      >
                        ✏️ Update
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => removeUser(user)}
                      >
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}