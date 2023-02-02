import './App.css';
import Header from './header/header';
import Home from './components/Home';
import Create from './components/CreatePost'
import Crime from './components/genres/Crime'
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/recommend' element={<Create />} />
    <Route  path='/crime' element={<Crime />}/>
    
     </Routes>
    </div>
  );
}
  
export default App;
