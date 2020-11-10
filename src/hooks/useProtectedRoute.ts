import { navigate } from "@reach/router";
import { useEffect } from "react";
import { auth } from "service/firebase";
import { APP_COOKIE, getCookie, setCookie } from "utils/cookies";

export const useProtectedRoute = () => {
  const { currentUser } = auth();
  const validateUser = async () => {
    const cookie = getCookie(APP_COOKIE);
    const token = await currentUser?.getIdToken(false);

    if (!cookie && !token) {
      navigate("/login", { replace: true });
    }

    if (!cookie) {
      setCookie(APP_COOKIE, token || "");
    }
  };

  useEffect(() => {
    validateUser();
  });
};
