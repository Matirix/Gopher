import './App.css';
import Broadcast from './Broadcast';
import Friends from './Friends';
import Login from './Login';
import Settings from './Settings';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';


function App() {
  return (
    <div className="App">
        <Router>
          <Header/> 
          <Routes>
            <Route path='/' element={<Broadcast />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path='/settings' element={<Settings />}></Route>


          </Routes>
          <Navbar />
        </Router>
    </div>
  );
}

export default App;
