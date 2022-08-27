import React from 'react'
import { useSelector } from "react-redux";

const RedirectPage = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
        <h1>Succesfully Register</h1>
        <p>{user.msg}</p>
        <p>Proceed to your mail</p>
    </div>
  )
}

export default RedirectPage