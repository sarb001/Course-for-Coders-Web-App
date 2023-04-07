import React from 'react';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Layout/Header/Header';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Layout/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgetPassword from './Components/Auth/ForgetPassword';

function App() {
  return (
     <>
     <Router>
            <Header />
         <Routes>
            <Route exact path = "/"  element= {<Home />}> </Route>
            <Route exact path = "/courses"  element= {<Courses />}> </Route>
            <Route exact path = "/login"  element= {<Login />}> </Route>
            <Route exact path = "/register"  element= {<Register />}> </Route>
            <Route exact path = "/forgetpassword"  element= {<ForgetPassword />}> </Route>
         </Routes>
         <Footer />
     </Router>
     </>
  );
}

export default App;
