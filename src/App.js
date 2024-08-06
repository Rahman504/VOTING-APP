import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import accreditialsPage from './pages/users/accreditials';
import loginPage from './pages/users/userlogin';
import adminLoginPage from './pages/admin/admin page/adminlogin';
import addPostPage from './pages/admin/post page/addpost';
import voteSentPage from './pages/users/votesent';
import PositionsPage from './pages/users/position page/positions';
import AdminDashboard from './pages/admin/admin page/admindashboard';
import Posts from './pages/admin/post page/posts';
import ContestantPage from './pages/admin/contestant page/contestant template/contestants';
import AddContestantPage from './pages/admin/contestant page/addcontestant';
import ResultPage from './pages/admin/result page/result';
import UserStatus from './pages/admin/status/voters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={accreditialsPage}/>
        <Route path='/login' Component={loginPage}/>
        <Route path='/positions' Component={PositionsPage}/>
        <Route path='/votesent' Component={voteSentPage}/>
        <Route path='/admin/login' Component={adminLoginPage}/>
        <Route path='/admin/dashboard' Component={AdminDashboard}/>
        <Route path='/admin/posts' Component={Posts}/>
        <Route path='/admin/addpost' Component={addPostPage}/>
        <Route path='/admin/contestants' Component={ContestantPage}/>
        <Route path='/admin/addcontestant' Component={AddContestantPage}/>
        <Route path='/admin/result' Component={ResultPage}/>
        <Route path='/admin/status' Component={UserStatus}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
