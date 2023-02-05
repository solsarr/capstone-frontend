import {Link} from 'react-router-dom'
import { Dropdown } from '../components/Dropdown'

export default function Header(){

    return (
    <header>
        <nav className='nav'>
            <Link to='/'>
                <img className='logo' src='https://cdn-icons-png.flaticon.com/512/31/31087.png' alt='logo'/> 
            </Link>
            <Link to='/recommend'>
            <h3>test</h3>
            </Link>
         <Dropdown />
        </nav>
    </header>
    )  
}