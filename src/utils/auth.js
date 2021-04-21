import Cookies from 'js-cookie'

const TokenKey = 'sourcing-net'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, `Bearer ${token}`, { expires: 7 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
