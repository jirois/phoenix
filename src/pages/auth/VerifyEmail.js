import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeaderTwo, Page } from "../../components/Styles";
import { NavBtnLinkBtn } from "../../components/Navbar/navbarELements";
import axios from "axios";
import { baseUrl } from "../../utils/url";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const VerifyEmail = () => {
  const [setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const query = useQuery();

  const verifyToken = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(baseUrl + "auth/verify-email", {
        verification: query.get("token"),
        email: query.get("email"),
      });
      setMessage(data.msg);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
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
      <HeaderTwo>{message}</HeaderTwo>
      <NavBtnLinkBtn to="/signin">Please login</NavBtnLinkBtn>
    </Page>
  );
};

export default VerifyEmail;
