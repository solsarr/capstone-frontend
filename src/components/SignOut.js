import { userClear, clearUserToken, getUser } from '../utils/authToken';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SignOut() {
    const user = getUser()
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState(false)
    const [signOut, setSignOut] = useState(false)

    const check = () => {
        if (!user == "") {
            setSignOut(true)
        }
    }

    const handleClick = () => {
        setConfirm((current) => !current)
        setSignOut((current) => !current)
    }

    const logOut = () => {
        userClear();
        clearUserToken();
        handleClick()
        navigate('/auth')
    }
    useEffect(() => {
        check()
    })
    const logIn = () => {
        navigate('/auth')
    }
    if (confirm == true) {
        return (
            <div className='signOut'>
                <p className='signOutConfirm' onClick={logOut}>Yes</p>
                <p className='signOutCancel' onClick={handleClick}>No</p>
            </div>
        )
    }
    if (signOut == false) {
        return (
            <div className='signOut'>
                <p className='signOutTxt' onClick={logIn}>Sign In</p>
            </div>
        )
    }

    if (signOut == true) {
        return (
            <div className='signOut'>
                <p className='signOutTxt' onClick={handleClick}>Sign out</p>
            </div>
        )
    }
}
