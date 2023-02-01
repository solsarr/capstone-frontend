import {Link} from 'react-router-dom'

export default function Header(){

    return (
    <header>
        <nav className='nav'>
            <Link to='/'>
                <img className='logo' src='https://cdn-icons-png.flaticon.com/512/31/31087.png'/> 
            </Link>
        </nav>
    </header>
    )  
}