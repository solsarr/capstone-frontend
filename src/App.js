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
import Comedy from './components/genres/Comedy';
import Horror from './components/genres/Horror';
import Fantasy from './components/genres/Fantasy';
import SciFi from './components/genres/SciFi';
import Thriller from './components/genres/Thriller';
import Mystery from './components/genres/Mystery';
import './App.css';

function App() {
  const { Provider: UserInfo } = UserContext
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
          <Route path='/crime' element={<Crime />} />
          <Route path='/action' element={<Action />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/comedy' element={<Comedy />} />
          <Route path='/horror' element={<Horror />} />
          <Route path='/fantasy' element={<Fantasy />} />
          <Route path='/sci-fi' element={<SciFi />} />
          <Route path='/thriller' element={<Thriller />} />
          <Route path='/mystery' element={<Mystery />} />

        </Routes>

      </UserInfo>
    </div>
  );
}

export default App;
