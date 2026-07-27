import React from 'react'
import { Routes, Route } from "react-router";


import SignUp from './screen/SignUp'
import SignIn from './screen/SignIn';
import Users from './screen/Users';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/users' element={<Users />} />

      </Routes>

    </div>
  )
}
