import { Link } from 'react-router-dom'
import { Dropdown } from '../components/Dropdown'
import SignOut from '../components/SignOut'


export default function Header() {

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
                <div className='signOutWrap'><SignOut /></div>
            </nav>

        </header>
    )

}