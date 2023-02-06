
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Dropdown( ) {

   const [open, setOpen] = useState(false);

   const handleOpen = () => {
     setOpen(!open);
   };
   const handleClick = () => {
    // do something
    setOpen(false);
  };



 
   return (
    <div className="dropdown">
      <button className='dropBtn'onClick={handleOpen}>Genres</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={handleClick}><Link to='/action'>Action</Link></button>
          </li>
          <li className="menu-item">
            <button onClick={handleClick}><Link to='/comedy'>Comedy</Link></button>
          </li>
          <li className="menu-item">
            <button onClick={handleClick}><Link to='/crime'>Crime</Link></button>
          </li>
          <li className="menu-item">
            <button onClick={handleClick}><Link to='/fantasy'>Fantasy</Link></button>
          </li>
          <li className="menu-item">
            <button onClick={handleClick}><Link to='/horror'>Horror</Link></button>
          </li>
          <li className="menu-item">
            <button onClick={handleClick}><Link to='/mystery'>Mystery</Link></button>
          </li>
          <li className="menu-item">
            <button onClick={handleClick}><Link to='/sci-fi'>Sci-Fi</Link></button>
          </li>
          <li className="menu-item">
            <button onClick={handleClick}><Link to='/thriller'>Thriller</Link></button>
          </li>
          
        </ul>
      ) : null}
      {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
    </div>
 
   );

}
export { Dropdown }