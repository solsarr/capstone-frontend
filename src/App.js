import Header from './header/header';
import Home from './components/Home';
import Create from './components/CreatePost'
import Crime from './components/genres/Crime'
import Action from './components/genres/Action'
import { Routes, Route } from "react-router-dom"
import Auth from './components/Auth'
import Profile from './components/Profile'
import { UserContext } from './data/userContext'
import { useState, useEffect, useContext } from 'react'
import Post from './components/PostPreview';

import './App.css';


function App() {
  const { Provider: UserInfo } = UserContext
  // we are using a combination of object destructuring and aliasing; 
  // this allows us to rename the React Context Provider to something more descriptive
  // example: UserInfo

  console.log(UserInfo)

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)  
  
  return (

    <div className="App">
       <UserInfo value={{
                isAuthenticated,
                setAuth: setIsAuthenticated,
                user: currentUser,
                setUser:
                    setCurrentUser
								
            }}
            >
     <Header />
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/recommend' element={<Create />} />
    <Route  path='/crime' element={<Crime />}/>
    <Route path='/action' element={<Action />}/>
    <Route path='/auth' element={<Auth />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/post/:id' element={<Post />}/>

     </Routes>

            </UserInfo>
            {/* /// */}
    </div>
  );
}
  
export default App;
