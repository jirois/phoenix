import React from 'react'
import { useSelector } from "react-redux";
import { RedirectWrapper } from '../components/Styles';

const RedirectPage = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <RedirectWrapper>
        <h3>Succesfully Register</h3>
        <p>{user.msg}</p>
        <p>Proceed to your mail</p>
    </RedirectWrapper>
  )
}

export default RedirectPage