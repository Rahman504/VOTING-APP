import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import accreditialsPage from './pages/users/accreditials';
import loginPage from './pages/users/userlogin';
import adminLoginPage from './pages/admin/adminlogin';
import addPostPage from './pages/admin/addpost';
import voteSentPage from './pages/users/votesent';
import PositionsPage from './pages/users/position page/positions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={accreditialsPage}/>
        <Route path='/login' Component={loginPage}/>
        <Route path='/positions' Component={PositionsPage}/>
        <Route path='/votesent' Component={voteSentPage}/>
        <Route path='/admin/login' Component={adminLoginPage}/>
        <Route path='/admin/addpost' Component={addPostPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
