import { navigate } from "@reach/router";
import Layout from "components/Layout";
import CardLogin from "components/organisms/CardLogin";
import { usePublicRestrictedRoute } from "hooks";
import React from "react";
import { auth } from "service/firebase";

type Props = {};

const Login: React.FC<Props> = () => {
  usePublicRestrictedRoute();

  const handleSignin = (data: any) => {
    const email: any = process.env.REACT_APP_FIREBASE_EMAIL || "";
    const { password } = data;

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        // success login, then what?
        navigate("/add-book");
      })
      .catch(error => {
        // error not handled in here, I dunno why -_-
        alert(error?.message || "Oops! Error while login!");
      });
  };

  return (
    <Layout title="Login">
      <CardLogin onSubmit={handleSignin} />
    </Layout>
  );
};

export default Login;
