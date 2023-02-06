import { userClear, clearUserToken, getUser } from '../utils/authToken';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SignOut(){
const user = getUser()
const navigate = useNavigate()
const [confirm, setConfirm] = useState(false)
const [signOut, setSignOut] = useState(false)
console.log(user)

const check = () => {
if (!user == ""){ 
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

if (confirm == true){
    return (
        <div className='signOut'>
        <p onClick={logOut}>Yes</p>
        <p onClick={handleClick}>No</p>
    </div>
    )
}


if (signOut == true){
return (
    <div className='signOut'>
        <p onClick={handleClick}>Sign out?</p>
    </div>
)
}
}
