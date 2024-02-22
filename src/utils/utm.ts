import { writeCookie, readCookie } from "./cookies";

function getUTMparams() {
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = urlParams.get("utm_source");
  const utm_campaign = urlParams.get("utm_campaign");
  const utm_medium = urlParams.get("utm_medium");
  const utm_content = urlParams.get("utm_content");
  const utm_term = urlParams.get("utm_term");
  return {
    utm_source,
    utm_campaign,
    utm_medium,
    utm_content,
    utm_term,
  };
}

function getUTMcookies() {
  const utm_source = readCookie("utm_source");
  const utm_campaign = readCookie("utm_campaign");
  const utm_medium = readCookie("utm_medium");
  const utm_content = readCookie("utm_content");
  const utm_term = readCookie("utm_term");
  return {
    utm_source,
    utm_campaign,
    utm_medium,
    utm_content,
    utm_term,
  };
}

function setUTMcookies() {
  const utmParams = getUTMparams();
  for (const [key, value] of Object.entries(utmParams)) {
    if (!value) continue;
    writeCookie(key, value, 30);
  }
}

function setUTMfields() {
  const utmCookies = getUTMcookies();
  const utmParams = getUTMparams();
  let utmValues = utmCookies;
  if (utmParams.utm_source) utmValues = utmParams;

  for (const [key, value] of Object.entries(utmValues)) {
    if (!value) continue;
    let utmField = document.querySelector(`input[name="${key}"]`);
    if (!utmField) continue;
    utmField.setAttribute("value", value);
  }
}

export { setUTMcookies, setUTMfields, getUTMcookies, getUTMparams };
