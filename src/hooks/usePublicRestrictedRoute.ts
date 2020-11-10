import { navigate } from "@reach/router";
import { useEffect } from "react";
import { auth } from "service/firebase";
import { APP_COOKIE, getCookie } from "utils/cookies";

export const usePublicRestrictedRoute = () => {
  const { currentUser } = auth();

  const checkUserSignedIn = async () => {
    const token = await currentUser?.getIdToken(false);
    const cookie = getCookie(APP_COOKIE);

    if (token || cookie) {
      navigate("/add-book");
    }
  };

  useEffect(() => {
    checkUserSignedIn();
  });
};
