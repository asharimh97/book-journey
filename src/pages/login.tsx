import { navigate } from "@reach/router";
import Layout from "components/Layout";
import CardLogin from "components/organisms/CardLogin";
import { usePublicRestrictedRoute } from "hooks";
import React from "react";
import { useToasts } from "react-toast-notifications";
import { auth } from "service/firebase";

type Props = {};

const Login: React.FC<Props> = () => {
  usePublicRestrictedRoute();

  const { addToast } = useToasts();

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
        const message = error?.message || "Oops! Error while login!";
        addToast(message, { autoDismiss: true, appearance: "error" });
      });
  };

  return (
    <Layout title="Login">
      <CardLogin onSubmit={handleSignin} />
    </Layout>
  );
};

export default Login;
