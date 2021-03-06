import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers'
import Category from './pages/Category';
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreateListing from './pages/CreateListing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Explore />} />
          <Route exact path='/offers' element={<Offers />} />
          <Route exact path='/category/:categoryName' element={<Category />} />
          <Route exact path='/profile' element={<PrivateRoute />} >
            <Route exact path='/profile' element={<Profile />} />
          </Route>
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route exact path='/sign-up' element={<SignUp />} />
          <Route exact path='/forgot-password' element={<ForgotPassword />} />
          <Route exact path='/create-listing' element={<CreateListing />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />

    </>
  );
}

export default App;
