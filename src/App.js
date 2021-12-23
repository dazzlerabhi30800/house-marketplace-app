import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Explore />} />
          <Route exact path='/offers' element={<Offers />} />
          <Route exact path='/profile' element={<SignIn />} />
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route exact path='/sign-up' element={<SignUp />} />
          <Route exact path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>

    </>
  );
}

export default App;
