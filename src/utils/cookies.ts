import Cookie from "js-cookie";

export const APP_COOKIE = "bookJourney";

const HOUR_IN_SECOND = 3600;
const HOUR_DURATION = 12;

export const setCookie = (key: string, val: string | object) => {
  Cookie.set(key, val, {
    expires: HOUR_DURATION * HOUR_IN_SECOND
  });
};

export const getCookie = (key: string) => {
  return Cookie.get(key);
};

export const removeCookie = (key: string) => {
  Cookie.remove(key);
};
