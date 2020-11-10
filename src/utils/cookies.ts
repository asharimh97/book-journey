import Cookie from "js-cookie";

export const APP_COOKIE = "bookJourney";

export const setCookie = (key: string, val: string | object) => {
  Cookie.set(key, val, {
    expires: 7 * 24 * 3600
  });
};

export const getCookie = (key: string) => {
  return Cookie.get(key);
};

export const removeCookie = (key: string) => {
  Cookie.remove(key);
};
