import './App.css';
import Header from './header/header';
import Home from './components/Home';
import Create from './components/CreatePost'
import Crime from './components/genres/Crime'
import Action from './components/genres/Action'
import { Routes, Route } from "react-router-dom"
import SignUp from './components/SignUp'
 
function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/recommend' element={<Create />} />
    <Route  path='/crime' element={<Crime />}/>
    <Route path='/action' element={<Action />}/>
    <Route path='/signup' element={<SignUp />}/>

     </Routes>
    </div>
  );
}
  
export default App;
