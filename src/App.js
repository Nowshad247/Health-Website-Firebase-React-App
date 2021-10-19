import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFoundPage/NotFound';
import LoginPage from './Pages/LoginPage/LoginPage';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DoctorProfile from './Pages/DoctorProfile/DoctorProfile';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/reg'>
              <LoginPage></LoginPage>
            </Route>
            <PrivateRoute exact path='/booking/:id'>
              <DoctorProfile></DoctorProfile>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
