import { useContext } from 'react'
import { UserContext } from '../data/'

import { setUserToken, clearUserToken, userSet, userClear } from '../utils/authToken'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const Auth = (currentUser, parsedUser) => {
    const { setAuth, setUser } = useContext(UserContext)
    // console.log(setAuth, setUser)
  const BASE_URL = "http://localhost:4000/user/signup"
		const registerUser = async (data) => {
        try {

            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }

            // console.log(data, BASE_URL)

            const newUser = await fetch(
                "http://localhost:4000/user/signup",
                configs
            )
            console.log(newUser)

            const parsedUser = await newUser.json()

            if (parsedUser.token) {
                // sets local storage
                setUserToken(parsedUser.token)
                // put the returned user object in state
                setUser(parsedUser.user)
                userSet(parsedUser.user)
                // adds a boolean cast of the responses isAuthenticated prop
                setAuth(parsedUser.isLoggedIn)

                // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
                // this would also require reconfiguring our backend so we only send tokens with a signup

                return parsedUser
            } else {
                throw `Server Error: ${parsedUser.err}`
            }

        } catch (err) {
            console.log(err)
            clearUserToken();
            setAuth(false);
            return null
        }
    }
    // we will replace our placeholder jsx with a section container and a RegisterForm component

    const loginUser = async (data) => {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const response = await fetch(
                "http://localhost:4000/user/login",
                configs
            )
            const currentUser = await response.json()
            console.log(currentUser)

            if (currentUser.token) {
                // sets local storage
                setUserToken(currentUser.token)
                // put the returned user object in state
                setUser(currentUser.user)
                console.log(currentUser.user)
                userSet(currentUser.user)
                setAuth(currentUser.isLoggedIn)
                console.log(currentUser.token, 'token on login')
                return currentUser
            } else {
                throw `Server Error: ${currentUser.statusText}`
            }
        } catch (err) {
            console.log(err)
            clearUserToken();
            setAuth(false);
        }
    }

    return (<section className='container'>
        <RegisterForm signUp={registerUser} />
        <LoginForm signIn={loginUser} />
    </section>)
}

export default Auth;