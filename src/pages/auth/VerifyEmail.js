import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { verifyEmail } from "../../features/auth/authSlice";
import { TailSpin } from "react-loader-spinner";
import { HeaderFour, HeaderTwo, Page } from "../../components/Styles";
import { NavBtnLinkBtn } from "../../components/Navbar/navbarELements";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const VerifyEmail = () => {
  const { isLoading, isError } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const query = useQuery();

  useEffect(() => {
    dispatch(
      verifyEmail({
        verificationToken: query.get("token"),
        email: query.get("email"),
      })
    );
  }, [dispatch, query]);

  if (isLoading) {
    <TailSpin color="yellow" height={70} width={150} />;
  }
  if (isError) {
    return (
      <section>
        <HeaderFour>
          There was an error, please double check your verification link
        </HeaderFour>
      </section>
    );
  }
  return (
    <Page>
      <HeaderTwo>Account Confirmed</HeaderTwo>
      <NavBtnLinkBtn to="/signin">Please login</NavBtnLinkBtn>
    </Page>
  );
};

export default VerifyEmail;
