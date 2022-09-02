import React, { useState } from "react";
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// import { verifyEmail } from "../../features/auth/authSlice";
// import { TailSpin } from "react-loader-spinner";
import { HeaderFour, HeaderTwo, Page } from "../../components/Styles";
import { NavBtnLinkBtn } from "../../components/Navbar/navbarELements";
import { useGlobalContext } from "../../context";
import axios from "axios";
import { baseUrl } from "../../utils/url";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const VerifyEmail = () => {
  // const { isLoading, isError, message } = useSelector((store) => store.auth);
  // const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const { loading: isLoading } = useGlobalContext();
  const query = useQuery();

  const verifyToken = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(baseUrl + "auth/verify-email", {
        verification: query.get("token"),
        email: query.get("email"),
      });
    } catch (error) {
      console.log(error.response);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      verifyToken();
    }
  }, [isLoading]);

  if (ioading) {
    return (
      <Page>
        <HeaderTwo>Loading...</HeaderTwo>
      </Page>
    );
  }
  // if (error) {
  //   return (
  //     <Page>
  //       <HeaderFour>
  //         There was an error, please double check your link
  //       </HeaderFour>
  //     </Page>
  //   );
  // }

  return (
    <Page>
      <HeaderTwo>Account Confirmed</HeaderTwo>
      <NavBtnLinkBtn to="/signin">Please login</NavBtnLinkBtn>
    </Page>
  );
};

export default VerifyEmail;
