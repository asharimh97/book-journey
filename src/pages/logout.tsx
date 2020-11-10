import { useNavigate } from "@reach/router";
import Layout from "components/Layout";
import React, { useEffect } from "react";
import { auth } from "service/firebase";
import { APP_COOKIE, removeCookie } from "utils/cookies";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        removeCookie(APP_COOKIE);
        navigate("/", { replace: true });
      })
      .catch(err => {
        console.error(err);
      });
  };
  useEffect(() => {
    handleSignOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Layout />;
};

export default Logout;
