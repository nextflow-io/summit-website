export function writeCookie(key, value, days = 182) { // default = 6 months
  if (typeof window === "undefined") return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${key}=${value};${expires};path=/`;
}

export function readCookie(name) {
  if (typeof window === "undefined") return;
  let cookieArr = document.cookie.split("; ");

  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0]) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  return null;
}
