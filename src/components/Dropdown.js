
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import '../App.css'

function Dropdown( ) {

   const navigate = useNavigate()


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
            <button onClick={handleClick}><Link to='/crime'>Crime</Link></button>
          </li>
        </ul>
      ) : null}
      {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
    </div>

   );
 
//     return(
//         <div className='dropdownWrap'>
//         <select className="selectList" id="selectList">
//     <option value="option 1">Genre</option>
//     <option value="option 2"> Crime</option>
// </select> 
// </div>
//     )



}
export { Dropdown }