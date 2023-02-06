import { useContext } from 'react'
import { UserContext } from '../data/'

import { setUserToken, clearUserToken, userSet, userClear } from '../utils/authToken'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const Auth = (currentUser, parsedUser) => {
    const { setAuth, setUser } = useContext(UserContext)
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
            const newUser = await fetch(
                "http://localhost:4000/user/signup",
                configs
            )

            const parsedUser = await newUser.json()

            if (parsedUser.token) {
                setUserToken(parsedUser.token)
                setUser(parsedUser.user)
                userSet(parsedUser.user)
                setAuth(parsedUser.isLoggedIn)
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

            if (currentUser.token) {
                setUserToken(currentUser.token)
                setUser(currentUser.user)
                userSet(currentUser.user)
                setAuth(currentUser.isLoggedIn)
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