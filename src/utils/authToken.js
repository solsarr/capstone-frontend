

const getUserToken = () => {
  return localStorage.getItem('token')
}

const setUserToken = (token) => {
  return localStorage.setItem('token', token)
}

const clearUserToken = () => {
  return localStorage.setItem('token', "")
}
const userSet = (currentUser) => {
  return localStorage.setItem('user', currentUser.username)
}
const getUser = () => {
  return localStorage.getItem('user')
}
const userClear = () => {
  return localStorage.setItem('user', "")
}

export { userClear, userSet, getUser, getUserToken, setUserToken, clearUserToken }
