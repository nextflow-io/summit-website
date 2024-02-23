import { writeCookie, readCookie } from "./cookies"

const utm_keys = [
  "utm_source",
  "utm_campaign",
  "utm_medium",
  "utm_content",
  "utm_term",
]

type UTMValues = {
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  utm_content?: string;
  utm_term?: string;
}

function getUTMparams(): UTMValues {
  const urlParams = new URLSearchParams(window.location.search)
  const params = {}
  for (const key of utm_keys) {
    let val = urlParams.get(key)
    if (val) params[key] = val
  }
  return params
}

function getUTMcookies(): UTMValues {
  const cookies = {}
  for (const key of utm_keys) {
    let val = readCookie(key)
    if (val) cookies[key] = val
  }
  return cookies
}

function getUTM(): UTMValues {
  const utmParams = getUTMparams()
  const utmCookies = getUTMcookies()
  return { ...utmCookies, ...utmParams }
}

function setUTMcookies() {
  const utmParams = getUTMparams()
  for (const [key, value] of Object.entries(utmParams)) {
    if (!value) continue
    writeCookie(key, value, 30)
  }
}

function setUTMfields() {
  const utmValues = getUTM()
  for (const [key, value] of Object.entries(utmValues)) {
    if (!value) continue
    let utmField = document.querySelector(`input[name="${key}"]`)
    if (!utmField) continue
    utmField.setAttribute("value", value)
  }
}

export { setUTMcookies, setUTMfields, getUTM }
