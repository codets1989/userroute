import './App.css';
import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import Userlist from './components/Userlist';
import UserDetails from './components/UserDetails';
import EditUser from './components/EditUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Adduser' element={<AddUser/>}></Route>
          <Route path='/Userlist' element={<Userlist/>}>
              <Route index element={<EditUser/>} />
              <Route path='Edituser' element={<EditUser/>}></Route>
              <Route path='Userdetails' element={<UserDetails/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
