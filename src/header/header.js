import { Link } from 'react-router-dom'
import { Dropdown } from '../components/Dropdown'
import SignOut from '../components/SignOut'
import { getUser } from '../utils/authToken'

export default function Header() {
const user = getUser()
    return (
        <header>
            <nav className='nav'>
                <Link to='/'>
                    <img className='logo' src='https://cdn-icons-png.flaticon.com/512/31/31087.png' alt='logo' />
                </Link>
                <Link to='/recommend'>
                    <button className='createBtn'
                    >Create a Post!</button>
                </Link>
                <Link to='/profile'><button className='profileBtn'>Profile</button></Link>

                <div className='dropDownWrap'><Dropdown /></div>
                <h5 className='greeting'>Hello {user}.</h5>
                <div className='signOutWrap'><SignOut /></div>
            </nav>

        </header>
    )

}