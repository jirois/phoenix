import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { HeaderFour, HeaderTwo, Page } from "../../components/Styles";
// import { NavBtnLinkBtn } from "../../components/Navbar/navbarELements";
import axios from "axios";
import { baseUrl } from "../../utils/url";
import { useGlobalContext } from "../../context";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
const VerifyEmail = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { loading: isLoading } = useGlobalContext();
  // const query = useQuery();
  const [searchParams] = useSearchParams();

  const verifyToken = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(baseUrl + "auth/verify-email", {
        verification: searchParams.get("token"),
        email: searchParams.get("email"),
      });
      console.log(data);
      setMessage(data.msg);
    } catch (error) {
      console.log(error.response.msg);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
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
  if (error) {
    return (
      <Page>
        <HeaderFour>
          There was an error, please double check your link
        </HeaderFour>
      </Page>
    );
  }

  return (
    <Page>
      <HeaderTwo>{message}</HeaderTwo>
      <Link
        to="/signin"
        className="text-xl text-yellow-500 hover:bg-yellow hover:text-white font-body"
      >
        Please login
      </Link>
    </Page>
  );
};

export default VerifyEmail;
