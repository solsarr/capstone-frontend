import {Link} from 'react-router-dom'
import { Dropdown } from '../components/Dropdown'

export default function Header(){

// inside of an existing handler that accesses a protected route that uses 'requireToken' middleware
// const URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/user'

// fetch(`${URL+'/yourEndpoint'}`, {
//   method: 'POST',
//   headers: {
//     'Authorization': `bearer ${getUserToken()}`,
// 		'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// });


    return (
    <header>
        <nav className='nav'>
            <Link to='/'>
                <img className='logo' src='https://cdn-icons-png.flaticon.com/512/31/31087.png' alt='logo'/> 
            </Link>
            <Link to='/recommend'>
            <h3>test</h3>
            </Link>
            <Link to='/auth'>auth</Link>
            <Link to='/profile'>profile</Link>

         <Dropdown />
        </nav>
    </header>
    )  
}