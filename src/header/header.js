import {Link} from 'react-router-dom'
import { Dropdown } from '../components/Dropdown'

export default function Header(){

    return (
    <header>
        <nav className='nav'>
            <Link to='/'>
                <img className='logo' src='https://cdn-icons-png.flaticon.com/512/31/31087.png'/> 
            </Link>
            <Link to='/recommend'>
            <h3>test</h3>
            </Link>
            <Link to='/crime'>
            <h3>crime</h3>
            </Link>
         <Dropdown />
        </nav>
    </header>
    )  
}